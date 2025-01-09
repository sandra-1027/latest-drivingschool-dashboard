'use client'
import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import Create from './Create';
import Edit from './Edit';

const Admission = () => {

      const [attendanceData, setAttendanceData] = useState([
        {
          id: 1,
          name: "john",
          date: "2024-11-01",
          gender:"male",
          bloodgrp:"A+",
          email:"john@gmail.com",
          paymentDetails: [
            { term: "1st Term", status: "Paid" },
            { term: "2nd Term", status: "Pending" },
          ],
          status: "active",
        },
        {
          id: 2,
          name: "Riya",
          date: "2024-11-02",
          gender:"female",
          bloodgrp:"A+",
          email:"riya@gmail.com",
          paymentDetails: [
            { term: "1st Term", status: "Pending" },
            { term: "2nd Term", status: "Pending" },
          ],
          status: "inactive",
        },
        {
          id: 3,
          name: "Smith",
          date: "2024-11-03",
          gender:"male",
          bloodgrp:"o+",
          email:"smith@gmail.com",
          paymentDetails: [
            { term: "1st Term", status: "Paid" },
            { term: "2nd Term", status: "Paid" },
          ],
          status: "completed",
        },
      ]);
      const [showModal, setShowModal] = useState(false);
      const [editModal, seteditModal] = useState(false);
      const toggleModal = () => {
        setShowModal((prev) => !prev);
      };
      const toggleEditModal = () => {
        seteditModal((prev) => !prev);
      };
      const [filterStatus, setFilterStatus] = useState("all");
      const filteredData =
      filterStatus === "all"
        ? attendanceData
        : attendanceData.filter((item) => item.status === filterStatus);
          const [currentPage,setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  
 
 

  
    // Calculate pagination
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
    const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);
    const totalEntries = filteredData.length;
  
    // Pagination logic
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
  {/* <div className="flex justify-end mb-4">

           <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"

          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="completed">Completed</option>
          </select>
        </div> */}

<div className="flex justify-end mb-4">
<button
 onClick={toggleModal}
 className="btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
  Add Admission
</button>
<Create showModal={showModal} toggleModal={toggleModal} />
</div>
{/* {showModal && (
        <Create showModal={showModal}  toggleModal={ toggleModal}/>
      )} */}
  <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6" >
  <div className="card px-4 pb-4 sm:px-5">
  <div className="mt-5">

 

  <div className="gridjs-head">
            <div className="gridjs-search">
              <input
                type="search"
                placeholder="Type a keyword..."
                aria-label="Type a keyword..."
                className="gridjs-input gridjs-search-input"
                
              />
            </div>
          </div>
    
         

        {/* <div className="is-scrollbar-hidden min-w-full overflow-x-auto"> */}
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
                Email
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Blood_Group
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                Gender
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
                {item.name}
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {item.email}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {item.bloodgrp}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {item.gender}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {item.date}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {/* <FaEdit className='btn size-8 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25'/> */}
                <button 
                onClick={toggleEditModal} 
                className="btn size-8 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25">
  <i className="fa fa-edit" />

</button>
<Edit editModal={editModal} toggleEditModal={toggleEditModal} />
<button className="btn size-8 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25">
  <i className="fa fa-trash-alt" />
</button>

                </td>
              </tr>

))}
            </tbody>
          </table>
        </div>
 {/* <div className="flex justify-between items-center mt-4">
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
</div>  */}
<div className="flex justify-between items-center mt-4 flex-wrap">
  <div className="flex-1">
    Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries} entries
  </div>
  <div className="flex flex-wrap items-center space-x-2">
    <button
      onClick={() => setCurrentPage(1)}
      disabled={currentPage === 1}
      className="px-3 py-2 border rounded-md text-sm"
    >
      First
    </button>
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className="px-3 py-2 border rounded-md text-sm"
    >
      Previous
    </button>
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i + 1}
        onClick={() => setCurrentPage(i + 1)}
        className={`px-3 py-2 border rounded-md text-sm ${currentPage === i + 1 ? 'bg-[#4f46e5] text-white' : ''}`}
      >
        {i + 1}
      </button>
    ))}
    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="px-3 py-2 border rounded-md text-sm"
    >
      Next
    </button>
    <button
      onClick={() => setCurrentPage(totalPages)}
      disabled={currentPage === totalPages}
      className="px-3 py-2 border rounded-md text-sm"
    >
      Last
    </button>
  </div>
</div>
       </div>
   </div>
   </div>
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
