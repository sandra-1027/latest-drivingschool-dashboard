'use client'
import React, { useEffect, useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import Create from './Create';

import { useAuth } from '@/app/context/AuthContext';
import { CgNotes } from "react-icons/cg";
import { RiCurrencyLine } from 'react-icons/ri';
import Payment from './payment';
import { FiClock } from "react-icons/fi";
import { IoMdCheckmark } from 'react-icons/io';
import Edit from './edit';

type Admission = {
  id?: string;
 pay_status: string;
  user_name:string;
  email:string;
  blood_group:string;
  gender:string;
  service_name:string;
  due_amount:string;
  added_date:string;
  amount:string;
  pay_amount: string;
  payed_amount: string;
  customer_id: string;
  service_id: string;
  type: string;
  branch_id:string;
  name:string;
  mobile:string;
  document_type:string;
  userfile:File;
  document:File;
  total_amount:string;
  payment_method:string;
 
};

const Admission = () => {

  const { state } = useAuth();
  const [showmodal,setShowmodal]=useState(false);
   const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');

  const [showmodals,setShowmodals]=useState(false);
  const [costData, setCostData] = useState<Admission []>([]);
  const [filteredData, setFilteredData] = useState<Admission []>([]);
  const [selectedCost, setSelectedCost] = useState<Admission  | null>(null); 
  const [search, setSearch] = useState("");
  const [selectedServices, setSelectedServices] = useState<string>("");
  const [selectedAdmission,  setSelectedAdmission] = useState<Admission  | null>(null); 
  const [editedAdmission,  setEditedAdmission] = useState<Admission  | null>(null); 
  const [service, setService] = useState<{ id: string; service_name: string }[]>([]);
  const [filters, setFilters] = useState({ service_name: '', status: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  // const togglemodal =()=>{
  //   setShowmodal((prev)=> !prev)
  // }
  const togglemodal = (mode: 'add' | 'edit', admission: Admission | null = null) => {
    setModalMode(mode);  // Set the modal mode to either "add" or "edit"
    setEditedAdmission(admission);  // Pass the selected driver if in edit mode
    setShowmodal((prev) => !prev);  // Toggle the modal visibility
  };
  const togglemodals =()=>{
    setShowmodals((prev)=> !prev)
  }
  const fetchAdmissionData = async () => {
  

    try {

      const response = await fetch('/api/admin/signup/get_admission_details', {
        method: 'POST',
        headers: {
           'authorizations': state?.accessToken ?? '', 
          // 'authorizations': token ?? '',
          'api_key': '10f052463f485938d04ac7300de7ec2b',  // Make sure the API key is correct
        },
        body: JSON.stringify({ user_id:null}),
      });
      if (!response.ok) {
        const errorData = await response.json();
        // console.error('API error:', errorData);
        throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || 'Unknown error'}`);
      }
      
      const data = await response.json();
 
      if (data.success) {
        setCostData(data.data || []);
         setFilteredData(data.data || []);
      } else {
        // console.error("API error:", data.msg || "Unknown error");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  
  useEffect(() => {
    fetchAdmissionData();
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
  const handleEdits = (staff: Admission) => {
    setSelectedAdmission(staff); 
    setShowmodal(true); 
  };

  const handleEdit = (staff: Admission ) => {
      setSelectedCost(staff); 
      setShowmodals(true); 
    };
    const applyFilters = () => {
      let newFilteredData = costData;
    
      // Apply form filters
     
      if (selectedServices) {
        newFilteredData = newFilteredData.filter(
          (item) => item.mobile === selectedServices
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
          item.mobile.toLowerCase().includes(value.toLowerCase()) ||
          item.added_date.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.status.toLowerCase().includes(value.toLowerCase())
      );
    
      setFilteredData(searchFilteredData); // Update filtered data in real-time
    };
    
    const handleFilterSubmit = (e: React.FormEvent) => {
      e.preventDefault(); // Prevent page reload
      const newFilteredData = applyFilters();
      setFilteredData(newFilteredData); // Update filtered data

      setCurrentPage(1); // Reset pagination to the first page
    };
    
    const handleReset = () => {
      setSearchTerm("");
      setSelectedServices("");
      setSelectedStatus("");
      setFilteredData(costData); // Reset to original data

      setCurrentPage(1); // Reset pagination to the first page
    };



    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);
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

 
  <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6 mb-4" >
  <div className="card px-4 pb-4 sm:px-5 pt-4">
  <div className="p-4 rounded-lg bg-slate-100 dark:bg-navy-800">
    <form>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Driver Name Select */}
        <div className='flex-1'>
          <label
            htmlFor="serviceName"
            className="block text-sm font-medium text-slate-700 dark:text-navy-100"
          >
            Mobile
          </label>
          <select
            id="mobile"
            name="mobile"
            value={selectedServices}
            onChange={(e) => setSelectedServices(e.target.value)}
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
          >
            <option value="">select a mobile</option>
            {costData.map((admission) => (
    <option key={admission.id} value={admission.mobile}>
      {admission.mobile}
    </option>
  ))}
          </select>
        </div>
        {/* Status Select */}
        {/* <div className='flex-1'>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-slate-700 dark:text-navy-100"
          >
            Status
          </label>
          <select
            id="status"
            name="status"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div> */}
        <div className='flex-1 mt-6'>
        <button
          type="submit"
          onClick={handleFilterSubmit}
          className="inline-flex justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        ><i className='fa fa-filter' style={{marginTop:'3px',marginRight:'3px'}}></i>
          Filter
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="ml-4 inline-flex justify-center rounded-md border border-gray-300 bg-warning py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-warningfocus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        ><i className='fa fa-refresh' style={{marginTop:'3px',marginRight:'3px'}}></i>
          Reset
        </button>
        </div>
      </div>
     
    </form>
  </div>
    </div>
  </div>






  <div className="flex items-center justify-between py-5 lg:py-6">
                <span className="text-lg font-medium text-slate-800 dark:text-navy-50">
              
                </span>
                <button className="px-4 py-2 bg-[#4f46e5] text-white rounded-md" 
                 onClick={() => togglemodal('add')}>  
          Add admission
                </button>
                
              
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
                Mobile Number
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
              Date
                </th> 
                <th className="whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Action
                </th> 
          
              </tr>
            </thead>
            <tbody>
            {currentEntries.map((item, index) => (
              <tr key={item.id} className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                <td className="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5">
                {indexOfFirstEntry+index + 1}
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {item.user_name}
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  <p><span className="font-bold mr-2">Email: </span>{item.email}</p>
                  <p><span className="font-bold mr-2">Blood Group:</span>{item.blood_group}</p>
                  <p><span className="font-bold mr-2">Gender:</span>{item.gender}</p>
               
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {item.service_name}
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {item.due_amount}
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
               
                 {item.pay_status === "completed" && (
                <div className="badge space-x-2.5 rounded-lg bg-success/10 text-success">
                  {/* <div className="size-2 rounded-full bg-current"/> */}
                  {/* <span>completed</span> */}
                  <span className="badge bg-orange-transparent">
                 
                  <IoMdCheckmark className='mr-2'/>
                    Fully Paid</span>
                </div>
                )}
                 {item.pay_status === "pending" && (
                <div className="badge space-x-2.5 rounded-lg bg-error/10 text-error">
                  
                  <span className="badge bg-orange-transparent">
                  <FiClock className='mr-2'/>
                  

                   Pending</span>
                </div>
                )}
                 {item.pay_status === "remaining" && (
                <div className="badge space-x-2.5 rounded-lg bg-info/10 text-info">
                 
                  <span className="badge bg-orange-transparent">
                  <CgNotes className='mr-2'/>
                  Partially Paid</span>
                </div>
                )}
                </td>
            <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {item.added_date}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                <span>
                      <div className="flex justify-center space-x-2">
                        <button className="btn size-8 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25">
                          <i className="fa fa-edit"  
                           onClick={() => togglemodal('edit', item)}
                          />
                        </button>
                        {/* <button className="btn size-8 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25 border-error">
                        <RiCurrencyLine />
                        </button> */}
                         {item.pay_status !== 'completed' && (
                      <button
        
                      onClick={() => handleEdit(item)}
                      className="btn size-7 p-0 text-error focus:bg-error/20 active:bg-error/25 border border-error rounded">
                <RiCurrencyLine />
              </button>
                )}
    
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

  {/* <Create
  showmodal={showmodal}
  togglemodal={togglemodal}
  formDatas={selectedAdmission ? { 
    name: selectedAdmission.name, 
    mobile: selectedAdmission.mobile, 
    email: selectedAdmission.email, 
    blood_group: selectedAdmission.blood_group, 
    document_type:selectedAdmission.document_type, 
    gender:selectedAdmission.gender, 
    userfile:selectedAdmission.userfile, 
    document:selectedAdmission.document, 
    payment_method:selectedAdmission.payment_method, 
    service_id:selectedAdmission.service_id, 
    total_amount:selectedAdmission.total_amount, 
    pay_amount:selectedAdmission.pay_amount, 
    type:selectedAdmission.type, 
    amount:selectedAdmission.amount, 
    branch_id:selectedAdmission.branch_id, 
    id:selectedAdmission.id || ""
  } : undefined}
  isEditing={!!selectedAdmission}
/> */}
  <Payment
  showmodals={showmodals}
  togglemodals={togglemodals}
  formData={selectedCost ? { 
    pay_amount: selectedCost.pay_amount, 
    payed_amount: selectedCost.payed_amount,  
    due_amount:selectedCost. due_amount, 
    customer_id: selectedCost.customer_id, 
    service_id: selectedCost.service_id, 
    type: selectedCost.type,
    amount: selectedCost.amount, 
    service_name:selectedCost.service_name,
    id:selectedCost.id || ""
  } : undefined}
  isEditing={!!selectedCost}
/>

{showmodal && (
  modalMode === 'edit' ? (
    <Edit
      showmodal={showmodal}
      togglemodal={() => togglemodal('add')}  // Correct the mode here if you want to switch to 'edit'
      admissionData={editedAdmission}
      onSave={(updatedAdmission) => {
        setAdmissionData((prevData) => prevData.map((admission) =>
          admission.id === updatedAdmission.id ? updatedBranch : admission
        ));
        togglemodal('add');  // Close modal after saving
      }}
    />
  ) : (
    <Create showmodal={showmodal} togglemodal={() => togglemodal('add')} />
  )
)}
  </div>


  )
}

export default Admission
