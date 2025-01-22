'use client'
import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import Create from './Create';
import Edit from './Edit';
import { useAuth } from '@/app/context/AuthContext';

type Admission = {
  id?: string;
  status: string;
  service_name: string;
  f_cost: string;
  m_cost: string;
  vehicle_type: string;
  service_id: string;
  branch_name:string;
  added_date:string;
};

const Admission = () => {

  const { state } = useAuth();
  const [showmodal,setShowmodal]=useState(false);
  const [costData, setCostData] = useState<Admission []>([]);
  const [filteredData, setFilteredData] = useState<Admission []>([]);
  const [selectedCost, setSelectedCost] = useState<Admission  | null>(null); 
  const [search, setSearch] = useState("");
  const [selectedServices, setSelectedServices] = useState<string>("");
  const [service, setService] = useState<{ id: string; service_name: string }[]>([]);
  const [filters, setFilters] = useState({ service_name: '', status: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const togglemodal =()=>{
    setShowmodal((prev)=> !prev)
  }

  const fetchlicenseData = async () => {
    try {
      const response = await fetch('/https://our-demos.com/n/shanibads/api/admin/signup/get_admission_details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'authorizations': state?.accessToken ?? '' ,
          'authorizationts':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMTYiLCJ1c2VyX3R5cGUiOiJhZG1pbiJ9.CfhEfHc-FN-nM-GQSYok4U-IaFZHUZlKkVxaVsdfIHU',
          'api_key': '10f052463f485938d04ac7300de7ec2b',
          
        },
        body: JSON.stringify({}),
      });
  
      console.log(response, "response");
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API error:', errorData);
        throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || 'Unknown error'}`);
      }
  
      const data = await response.json();
      console.log(data, "data");
  
      if (data.success) {
        console.log(data.data, "data");
        setCostData(data.data || []);
        setFilteredData(data.data || []);
      } else {
        console.error("API error:", data.msg || "Unknown error");
      }
    } catch (error) {
      // console.error("Fetch error:", error);
    }
  };
  

  useEffect(() => {
    fetchlicenseData();
    
  }, [state]);
  
 

 


  const [filterStatus,setFilterStatus] = useState("all");
  
  const [currentPage,setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  
  

  const updateAccountStatus = async (id: string, status: string) => {
    try {
      const response = await fetch('/api/admin/accounts/inactivate_license_cost', {
        method: 'POST',
        headers: {
          'authorizations': state?.accessToken ?? '', 
          'api_key': '10f052463f485938d04ac7300de7ec2b',
        },
        body: JSON.stringify({
          id: id,
          status: status,
          table: "license_cost"
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || 'Unknown error'}`);
      }
  
      const data = await response.json();
      console.log("API Response:", data); // Log the response
  
      if (data.success) {
       
        fetchlicenseData();
      } else {
        console.error("API error:", data.msg || "Unknown error");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };
  

  const handleEdit = (staff: Admission ) => {
      setSelectedCost(staff); 
      setShowmodal(true); 
    };
    const applyFilters = () => {
      let newFilteredData = costData;
    
      // Apply form filters
     
      if (selectedServices) {
        newFilteredData = newFilteredData.filter(
          (item) => item.service_name === selectedServices
        );
      }
      if (selectedStatus) {
        newFilteredData = newFilteredData.filter(
          (item) => item.status === selectedStatus
        );
      }
    
      return newFilteredData; // Return filtered data
    };
    
    // Handle real-time search filtering
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchTerm(value);
    
      const searchFilteredData = costData.filter(
        (item) =>
          item.service_name.toLowerCase().includes(value.toLowerCase()) ||
          item.vehicle_type.toLowerCase().includes(value.toLowerCase()) ||
          item.status.toLowerCase().includes(value.toLowerCase())
      );
    
      setFilteredData(searchFilteredData); // Update filtered data in real-time
    };
    
 
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredData.slice(
      indexOfFirstEntry,
      indexOfLastEntry
    );
    const totalEntries = filteredData.length;
    const totalPages = Math.ceil(totalEntries / entriesPerPage);
   

  
 
 

  

  return (
  
    <div className=" w-full  pb-8">
 
        
    <div className="flex items-center space-x-4 py-5 lg:py-6">
    <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
    Admission
    </h2>
    <div className="hidden h-full py-1 sm:flex">
      <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
    </div>
    <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
      <li className="flex items-center space-x-2">
        <a className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent" href="#">Home
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </li>
     
      <li>Admission</li>
    </ul>
  </div>

 

  <div className="flex items-center justify-between py-5 lg:py-6">
                <span className="text-lg font-medium text-slate-800 dark:text-navy-50">
              
                </span>
                <button className="px-4 py-2 bg-[#4f46e5] text-white rounded-md" onClick={togglemodal}>  
          Add admission
                </button>
                {/* <Add showmodal={showmodal} togglemodal={togglemodal}/> */}
              
            </div>

                             
  <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6" >
  <div className="card px-4 pb-4 sm:px-5">
  <div className="mt-5">
<div className="gridjs-head">
            <div className="gridjs-search">
                <input
      type="text"
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder="Search by name, branch, or place..."
      className="form-input peer w-1/4 rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-1 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
    />
            </div>
          </div>
        <div className="overflow-x-auto w-full">
  <table className="is-hoverable w-full text-left">
            <thead>
              <tr>
                <th className="whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                SL No
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                User Name
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
               Info
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Service Name
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Due Amount
                </th>            
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
               Pay Status
                </th> 
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
               Branch Name
                </th> 
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
              Date
                </th> 
                <th className="whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Action
                </th> 
          
              </tr>
            </thead>
            <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id} className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5">
                {index + 1}
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {item.user_name}
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  Email: {item.email}
                  Blood Group:{item.email}
                  Gender:{item.email}
               
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {item.f_cost}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {item.m_cost}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
               
                 {item.status === "active" && (
                <div className="badge space-x-2.5 rounded-full bg-success/10 text-success">
                  <div className="size-2 rounded-full bg-current"/>
                  <span>active</span>
                </div>
                )}
                 {item.status === "inactive" && (
                <div className="badge space-x-2.5 rounded-full bg-error/10 text-error">
                  <div className="size-2 rounded-full bg-current"/>
                  <span>inactive</span>
                </div>
                )}
                 {item.status === "completed" && (
                <div className="badge space-x-2.5 rounded-full bg-info/10 text-info">
                  <div className="size-2 rounded-full bg-current"/>
                  <span>completed</span>
                </div>
                )}
                </td>
            <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {item.added_date}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                <span>
                      <div className="flex justify-center space-x-2">
                        <button className="btn size-8 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25">
                          <i className="fa fa-edit" onClick={() => handleEdit(item)}/>
                        </button>
                        <button className="btn size-8 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25">
                          <i className="fa fa-trash-alt" onClick={() => updateAccountStatus(item.id!, item.status)} />
                        </button>
                      </div>
                    </span>
                </td>
              </tr>
  ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-4">
        <div>
          Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries} entries
        </div>
        <div>
          <button
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-md"
          >
            First
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-md"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 border rounded-md ${currentPage === i + 1 ? 'bg-[#4f46e5] text-white' : ''}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-md"
          >
            Next
          </button>
          <button
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-md"
          >
            Last
          </button>
        </div>
      </div>
      </div>
  </div>
  </div>
  {/* <Add
  showmodal={showmodal}
  togglemodal={togglemodal}
  formData={selectedCost ? { 
    service_id: selectedCost.service_id, 
    vehicle_type: selectedCost.vehicle_type, 
    f_cost: selectedCost.f_cost, 
    m_cost: selectedCost.m_cost, 
    id:selectedCost.id || ""
  } : undefined}
  isEditing={!!selectedCost}
/> */}
  </div>


  )
}

export default Admission









// "use client";
// import React, { useState } from "react";
// import { FaEdit } from "react-icons/fa";

// const Admission = () => {
//   const [filteredData, setFilteredData] = useState([
//     { id: 1, name: "John", email: "john@example.com", bloodGroup: "A+", gender: "Male", date: "13/2/2025" },
//     // Add more entries
// ]);
  
//   const [currentPage,setCurrentPage] = useState(1);
//   const [entriesPerPage] = useState(10);
  
 
 

  
//     // Calculate pagination
//     const indexOfLastEntry = currentPage * entriesPerPage;
//     const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
//     const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);
//     const totalEntries = filteredData.length;
  
//     // Pagination logic
//     const totalPages = Math.ceil(totalEntries / entriesPerPage);
  
//   return (
//     <div className=" w-full  pb-8">
 
        
//     <div className="flex items-center space-x-4 py-5 lg:py-6">
//     <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
//     Admission
//     </h2>
//     <div className="hidden h-full py-1 sm:flex">
//       <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
//     </div>
//     <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
//       <li className="flex items-center space-x-2">
//         <a className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent" href="#">Home
//         </a>
//         <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </li>
//       <li>Admission</li>
//     </ul>
//   </div>
//       <div x-data="pages.tables.initGridTableExapmle">
//         <div
//           role="complementary"
//           className="gridjs gridjs-container"
//           style={{ width: "100%" }}
//         >
//           <div className="gridjs-head">
//             <div className="gridjs-search">
//               <input
//                 type="search"
//                 placeholder="Type a keyword..."
//                 aria-label="Type a keyword..."
//                 className="gridjs-input gridjs-search-input"
                
//               />
//             </div>
//           </div>
//           <div className="gridjs-wrapper" style={{ height: "auto" }}>
//             <table
//               role="grid"
//               className="gridjs-table"
//               style={{ height: "auto" }}
//             >
//               <thead className="gridjs-thead">
//                 <tr className="gridjs-tr">
//                   <th
//                     data-column-id="id"
//                     className="gridjs-th gridjs-th-sort"
//                     tabIndex={0}
//                     style={{ minWidth: 61, width: 82 }}
//                   >
//                     <div className="gridjs-th-content">#</div>
//                     <button
//                       tabIndex={-1}
//                       aria-label="Sort column ascending"
//                       title="Sort column ascending"
//                       className="gridjs-sort gridjs-sort-neutral"
//                     />
//                   </th>
//                   <th
//                     data-column-id="name"
//                     className="gridjs-th gridjs-th-sort"
//                     tabIndex={0}
//                     style={{ minWidth: 84, width: 112 }}
//                   >
//                     <div className="gridjs-th-content">User Name</div>
//                     <button
//                       tabIndex={-1}
//                       aria-label="Sort column ascending"
//                       title="Sort column ascending"
//                       className="gridjs-sort gridjs-sort-neutral"
//                     />
//                   </th>
//                   <th
//                     data-column-id="avatar_url"
//                     className="gridjs-th"
//                     style={{ minWidth: 89, width: 118 }}
//                   >
//                     <div className="gridjs-th-content">Email</div>
//                   </th>
//                   <th
//                     data-column-id="email"
//                     className="gridjs-th gridjs-th-sort"
//                     tabIndex={0}
//                     style={{ minWidth: 193, width: 256 }}
//                   >
//                     <div className="gridjs-th-content">Blood_Group</div>
//                     <button
//                       tabIndex={-1}
//                       aria-label="Sort column ascending"
//                       title="Sort column ascending"
//                       className="gridjs-sort gridjs-sort-neutral"
//                     />
//                   </th>
//                   <th
//                     data-column-id="phone"
//                     className="gridjs-th gridjs-th-sort"
//                     tabIndex={0}
//                     style={{ minWidth: 153, width: 203 }}
//                   >
//                     <div className="gridjs-th-content">Gender</div>
//                     <button
//                       tabIndex={-1}
//                       aria-label="Sort column ascending"
//                       title="Sort column ascending"
//                       className="gridjs-sort gridjs-sort-neutral"
//                     />
//                   </th>
//                   <th
//                     data-column-id="phone"
//                     className="gridjs-th gridjs-th-sort"
//                     tabIndex={0}
//                     style={{ minWidth: 153, width: 203 }}
//                   >
//                     <div className="gridjs-th-content">Date</div>
//                     <button
//                       tabIndex={-1}
//                       aria-label="Sort column ascending"
//                       title="Sort column ascending"
//                       className="gridjs-sort gridjs-sort-neutral"
//                     />
//                   </th>
//                   <th
//                     data-column-id="actions"
//                     className="gridjs-th"
//                     style={{ minWidth: 104, width: 138 }}
//                   >
//                     <div className="gridjs-th-content">Actions</div>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="gridjs-tbody">
//                 <tr className="gridjs-tr">
//                   <td data-column-id="id" className="gridjs-td">
//                     <span>
//                       <span className="mx-2">1</span>
//                     </span>
//                   </td>
//                   <td data-column-id="name" className="gridjs-td">
//                     <span>
//                       <span className="text-slate-700 dark:text-navy-100 font-medium">
//                         John
//                       </span>
//                     </span>
//                   </td>
//                   <td data-column-id="email" className="gridjs-td">
//                     john@example.com
//                   </td>
//                   <td data-column-id="bloodgrp" className="gridjs-td">
//                     A+
//                   </td>
//                   <td data-column-id="bloodgrp" className="gridjs-td">
//                     male
//                   </td>
//                   <td data-column-id="date" className="gridjs-td">
//                     13/2/2025
//                   </td>
//                   <td data-column-id="actions" className="gridjs-td">
//                     <span>
//                       <div className="flex justify-center space-x-2">
//                         <button className="btn size-8 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25">
//                           <i className="fa fa-edit" />
//                         </button>
//                         <button className="btn size-8 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25">
//                           <i className="fa fa-trash-alt" />
//                         </button>
//                       </div>
//                     </span>
//                   </td>
//                 </tr>
//                 <tr className="gridjs-tr">
//                   <td data-column-id="id" className="gridjs-td">
//                     <span>
//                       <span className="mx-2">2</span>
//                     </span>
//                   </td>
//                   <td data-column-id="name" className="gridjs-td">
//                     <span>
//                       <span className="text-slate-700 dark:text-navy-100 font-medium">
//                         Doe
//                       </span>
//                     </span>
//                   </td>
                 
//                   <td data-column-id="email" className="gridjs-td">
//                     thedoe@example.com
//                   </td>
//                   <td data-column-id="date" className="gridjs-td">
//                    07/01/2025
//                   </td>
//                   <td data-column-id="date" className="gridjs-td">
//                    AB-
//                   </td>
//                   <td data-column-id="date" className="gridjs-td">
//                    male
//                   </td>
//                   <td data-column-id="actions" className="gridjs-td">
//                     <span>
//                       <div className="flex justify-center space-x-2">
//                         <button className="btn size-8 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25">
//                           <i className="fa fa-edit" />
//                         </button>
//                         <button className="btn size-8 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25">
//                           <i className="fa fa-trash-alt" />
//                         </button>
//                       </div>
//                     </span>
//                   </td>
//                 </tr>
//                 <tr className="gridjs-tr">
//                   <td data-column-id="id" className="gridjs-td">
//                     <span>
//                       <span className="mx-2">3</span>
//                     </span>
//                   </td>
//                   <td data-column-id="name" className="gridjs-td">
//                     <span>
//                       <span className="text-slate-700 dark:text-navy-100 font-medium">
//                         Nancy
//                       </span>
//                     </span>
//                   </td>
//                   {/* <td data-column-id="avatar_url" className="gridjs-td">
//                     <span>
//                       <div className="avatar flex">
//                         <img
//                           className="rounded-full"
//                           src="images/avatar/avatar-14.jpg"
//                           alt="avatar"
//                         />
//                       </div>
//                     </span>
//                   </td> */}
//                   <td data-column-id="email" className="gridjs-td">
//                     nancy@example.com
//                   </td>
//                   <td data-column-id="phone" className="gridjs-td">
//                    12/12/2024
//                   </td>
//                   <td data-column-id="phone" className="gridjs-td">
//                   O+
//                   </td>
//                   <td data-column-id="phone" className="gridjs-td">
//                    female
//                   </td>
//                   <td data-column-id="actions" className="gridjs-td">
//                     <span>
//                       <div className="flex justify-center space-x-2">
//                         <button className="btn size-8 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25">
//                           <i className="fa fa-edit" />
//                         </button>
//                         <button className="btn size-8 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25">
//                           <i className="fa fa-trash-alt" />
//                         </button>
//                       </div>
//                     </span>
//                   </td>
//                 </tr>
               
//               </tbody>
//             </table>
//           </div>
//           {/* <div className="gridjs-footer">
//             <div className="gridjs-pagination">
//               <div className="gridjs-pages">
//                 <button
//                   tabIndex={0}
//                   role="button"
//                   title="Previous"
//                   aria-label="Previous"
//                   disabled={currentPage === 1}
//                   onClick={() => setCurrentPage(currentPage - 1)}
//                 >
//                   Previous
//                 </button>
//                 <button
//                   tabIndex={0}
//                   role="button"
//                   title="Next"
//                   aria-label="Next"
//                   disabled={currentPage === totalPages}
//                   onClick={() => setCurrentPage(currentPage + 1)}
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           </div> */}
//           <div className="flex justify-between items-center mt-4">
//         <div>
//           Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries} entries
//         </div>
//         <div>
//           <button
//             onClick={() => setCurrentPage(1)}
//             disabled={currentPage === 1}
//             className="px-4 py-2 border rounded-md"
//           >
//             First
//           </button>
//           <button
//             onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-4 py-2 border rounded-md"
//           >
//             Previous
//           </button>
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i + 1}
//               onClick={() => setCurrentPage(i + 1)}
//               className={`px-4 py-2 border rounded-md ${currentPage === i + 1 ? 'bg-[#4f46e5] text-white' : ''}`}
//             >
//               {i + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             className="px-4 py-2 border rounded-md"
//           >
//             Next
//           </button>
//           <button
//             onClick={() => setCurrentPage(totalPages)}
//             disabled={currentPage === totalPages}
//             className="px-4 py-2 border rounded-md"
//           >
//             Last
//           </button>
//         </div>
//       </div>
//           <div id="gridjs-temp" className="gridjs-temp" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admission;
