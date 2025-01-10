// import React, { useState } from "react";

// type CreateProps = {
//   showModal: boolean;
//   toggleModal: () => void;
// };

// const Create: React.FC<CreateProps> = ({ showModal, toggleModal }) => {
//   const [selectedOption, setSelectedOption] = useState<string>("create");

//   if (!showModal) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
//       role="dialog"
//       onKeyDown={(e) => e.key === "Escape" && toggleModal()}
//     >
//       {/* Background overlay */}
//       <div
//         className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300"
//         onClick={toggleModal}
//       ></div>

//       {/* Modal content */}
//       <div className="relative flex w-full max-w-6xl origin-top flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
//         {/* Modal Header */}
//         <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
//           <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
//             Add Admission
//           </h3>
//           <button
//             onClick={toggleModal}
//             className="btn -mr-1.5 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="size-4.5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Modal Body */}
//         <div className="flex flex-col overflow-y-auto px-4 py-4 sm:px-5">
//           {/* Radio Buttons */}

//           <div className="flex items-center space-x-4 mb-4">
//             <label className="inline-flex items-center space-x-2">
//               <input
//                 value="create"
//                 checked={selectedOption === "create"}
//                 onChange={(e) => setSelectedOption(e.target.value)}
//                 className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
//                 name="basic"
//                 type="radio"
//               />
//               <span>Create</span>
//             </label>

//             <label className="inline-flex items-center space-x-2">
//               <input
//                 value="alreadyCreated"
//                 checked={selectedOption === "alreadyCreated"}
//                 onChange={(e) => setSelectedOption(e.target.value)}
//                 className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
//                 name="basic"
//                 type="radio"
//               />
//               <span>Already Created</span>
//             </label>
//           </div>

//           {/* Conditional Input Field */}
//           {selectedOption === "alreadyCreated" && (
//             <div className="mb-4">
//               <label className="block">
//                 <span>Enter Mobile No:</span>
//                 <select className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
//                   <option>Select a mobile</option>
//                   <option>345678</option>
//                   <option>78907654</option>
//                   <option>0098765434</option>
//                 </select>
//               </label>
//             </div>
//           )}

//           <div className="mb-4 mt-4 ">
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               Profile Information
//             </label>
//             {/* Input Fields Section */}
//             <div className="flex space-x-4 mb-4">
//               <label className="block">
//                 <span>Name</span>
//                 <input
//                   type="text"
//                   placeholder="name"
//                   className="form-input mt-1.5 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder:text-slate-400 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:placeholder:text-navy-300 dark:hover:border-navy-400 dark:focus:border-accent"
//                 />
//               </label>
//               <label className="block">
//                 <span>Mobile</span>
//                 <input
//                   type="text"
//                   placeholder="mobile"
//                   className="form-input mt-1.5 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder:text-slate-400 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:placeholder:text-navy-300 dark:hover:border-navy-400 dark:focus:border-accent"
//                 />
//               </label>
//             </div>
//             <div className="flex space-x-4 mb-4">
//               <label className="block">
//                 <span>Email</span>
//                 <input
//                   type="text"
//                   placeholder="email"
//                   className="form-input mt-1.5 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder:text-slate-400 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:placeholder:text-navy-300 dark:hover:border-navy-400 dark:focus:border-accent"
//                 />
//               </label>

//               <label className="block">
//                 <span>Blood group</span>
//                 <select className="form-select mt-1.5 w-full  rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
//                   <option>Select Blood Group</option>
//                   <option>A+ve</option>
//                   <option>O+ve</option>
//                   <option>B+ve</option>
//                   <option>AB+ve</option>
//                   <option>B-ve</option>
//                   <option>A-ve</option>
//                   <option>o-ve</option>
//                 </select>
//               </label>
//             </div>
//             <div className="flex space-x-4 mb-4">
//               <label className="block">
//                 <span>Gender</span>
//                 <select className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
//                   <option>Select a Gender</option>
//                   <option>Male</option>
//                   <option>Female</option>
//                   <option>Others</option>
//                 </select>
//               </label>

//               <label className="block">
//                 <span>Choose Document</span>
//                 <select className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
//                   <option>Choose Document Type</option>
//                   <option>SSLC</option>
//                   <option>Adhar</option>
//                   <option>Birth Certificate</option>
//                   <option>Passport</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           <div className="mb-4 mt-4">
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               Service Information
//             </label>
//             <div className="card space-y-5 p-4 sm:p-5">
//               <label className="block">

//                 <select className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
//                   <option>Select a Service</option>
//                   <option>Licence fresh</option>
//                   <option>Renewal Licence</option>
//                   <option>Duplicate Licence</option>
//                   <option>rc renewal</option>
//                 </select>

//               </label>
//               </div>
//               <div className="flex space-x-4 mb-4">
//               <label className="block">
//                 <span className="font-medium text-slate-600 dark:text-navy-100">
//                 Payment method
//                 </span>
//                 <select className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
//                   <option>Cash</option>
//                   <option value="digital">Online</option>
//                 </select>

//               </label>
//               <label className="block">
//                 <span className="font-medium text-slate-600 dark:text-navy-100">
//                 Total Amount
//                 </span>
//                 <input
//                   type="text"
//                   placeholder="0"
//                   className="form-input mt-1.5 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder:text-slate-400 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:placeholder:text-navy-300 dark:hover:border-navy-400 dark:focus:border-accent"
//                 />
//               </label>
//               </div>
//               <label className="block">
//                 <span className="font-medium text-slate-600 dark:text-navy-100">
//                 Pay Amount
//                 </span>
//                 <input
//                   type="number"
//                   placeholder=""
//                   className="form-input mt-1.5 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder:text-slate-400 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:placeholder:text-navy-300 dark:hover:border-navy-400 dark:focus:border-accent"
//                 />
//               </label>
//             </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Create;


import React, { useState } from "react";

type CreateProps = {
  showModal: boolean;
  toggleModal: () => void;
};

const Create: React.FC<CreateProps> = ({ showModal, toggleModal }) => {
  const [selectedOption, setSelectedOption] = useState<string>("create");

  if (!showModal) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
      role="dialog"
      onKeyDown={(e) => e.key === "Escape" && toggleModal()}
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300"
        onClick={toggleModal}
      ></div>

      {/* Modal content */}
      <div className="relative flex w-full max-w-6xl origin-top flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
        {/* Modal Header */}
        <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
          <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
            Add Admission
          </h3>
          <button
            onClick={toggleModal}
            className="btn -mr-1.5 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex flex-col overflow-y-auto px-4 py-4 sm:px-5">
        <label className="block mb-2 text-sm font-medium text-gray-700">
                  Profile Information
                </label>
          {/* Main Flex Container */}
          {/* <div className="flex space-x-8"> */}
          <div className="flex flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8">
            {/* Left Section: Radio Buttons & Profile Information */}
            
            <div className="flex-1">
              {/* Radio Buttons */}
              <div className="flex items-center space-x-4 mb-4">
                <label className="inline-flex items-center space-x-2">
                  <input
                    value="create"
                    checked={selectedOption === "create"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                    name="basic"
                    type="radio"
                  />
                  <span>Create</span>
                </label>

                <label className="inline-flex items-center space-x-2">
                  <input
                    value="alreadyCreated"
                    checked={selectedOption === "alreadyCreated"}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                    name="basic"
                    type="radio"
                  />
                  <span>Already Created</span>
                </label>
              </div>

              {/* Conditional Input Field */}
              {selectedOption === "alreadyCreated" && (
                <div className="mb-4">
                  <label className="block">
                    <span>Enter Mobile No:</span>
                    <select className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
                      <option>Select a mobile</option>
                      <option>345678</option>
                      <option>78907654</option>
                      <option>0098765434</option>
                    </select>
                  </label>
                </div>
              )}

              {/* Profile Information */}
              <div className="mb-4 mt-4">
                
                {/* Input Fields Section */}
                {/* <div className="flex space-x-4 mb-4">
                  <label className="block flex-1">
                    <span>Name</span>
                    <input
                      type="text"
                      placeholder="name"
                      className="form-input mt-1.5 w-full flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder:text-slate-400 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:placeholder:text-navy-300 dark:hover:border-navy-400 dark:focus:border-accent"
                    />
                  </label>
                  <label className="block flex-1">
                    <span>Mobile</span>
                    <input
                      type="text"
                      placeholder="mobile"
                      className="form-input mt-1.5 w-full flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder:text-slate-400 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:placeholder:text-navy-300 dark:hover:border-navy-400 dark:focus:border-accent"
                    />
                  </label>
                </div> */}
 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span>Name  </span>
                      <span className="relative mt-1.5 flex">
                        <input
                          className="form-input peer  mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                          placeholder="name"
                          type="text"
                        />
                       
                      </span>
                    </label>
                    <label className="block">
                      <span>Mobile</span>
                      <span className="relative mt-1.5 flex">
                        <input
                          className="form-input peer  mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                          placeholder="mobile"
                          type="text"
                        />
                       
                      </span>
                    </label>
                    </div>



                {/* Additional Fields */}
                {/* <div className="flex space-x-4 mb-4"> */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span>Email</span>
                    <span className="relative mt-1.5 flex">
                    <input
                      type="text"
                      placeholder="email"
                      // className="form-input mt-1.5 w-full flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder:text-slate-400 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:placeholder:text-navy-300 dark:hover:border-navy-400 dark:focus:border-accent"
                       className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    />
                    </span>
                  </label>
                  <label className="block ">
                    <span>Blood Group</span>
                    <span className="relative mt-1.5 flex">
                    <select 
                    // className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
                     className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    >
                      <option>Select Blood Group</option>
                      <option>A+ve</option>
                      <option>O+ve</option>
                      <option>B+ve</option>
                      <option>AB+ve</option>
                      <option>B-ve</option>
                      <option>A-ve</option>
                      <option>O-ve</option>
                    </select>
                    </span>
                  </label>
                </div>
                {/* <div className="flex space-x-4 mb-4"> */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block ">
                    <span>Gender</span>
                    <span className="relative mt-1.5 flex">
                    <select 
                    //  className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
                    className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                     >
                      <option>Select a Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                    </span>
                  </label>

                  <label className="block ">
                    <span>Choose Document</span>
                    <span className="relative mt-1.5 flex">
                    <select 
                    // className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
                    className="form-select peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    >
                      <option>Choose Document Type</option>
                      <option>SSLC</option>
                      <option>Adhar</option>
                      <option>Birth Certificate</option>
                      <option>Passport</option>
                    </select>
                    </span>
                  </label>
                </div>
                {/* <div className="flex space-x-4 mb-4">
             <label className="btn relative bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
  <input tabIndex={-1} type="file" className="pointer-events-none absolute inset-0 h-full w-full opacity-0" />
  <span className="flex items-center space-x-2">
    <i className="fa-solid fa-cloud-arrow-up text-base" />
    <span>Choose File</span>
  </span>
</label>


</div> */}

                <div>
                  <span className="font-medium text-slate-600 dark:text-navy-100">Images</span>
                  <div className="filepond fp-bordered fp-grid mt-1.5 [--fp-grid:2]">
                    <div
                      className="filepond--root filepond--hopper"
                      data-style-button-remove-item-position="left"
                      data-style-button-process-item-position="right"
                      data-style-load-indicator-position="right"
                      data-style-progress-indicator-position="right"
                      data-style-button-remove-item-align="false"
                      style={{ height: 76 }}
                    >
                      <input
                        className="filepond--browser"
                        type="file"
                        id="filepond--browser-fb9ga0v01"
                        name="filepond"
                        aria-controls="filepond--assistant-fb9ga0v01"
                        aria-labelledby="filepond--drop-label-fb9ga0v01"
                        multiple
                      />
                      <a
                        className="filepond--credits"
                        href="https://pqina.nl/"
                        tabIndex={-1}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ transform: "translateY(68px)" }}
                      >
                        Powered by PQINA
                      </a>
                      <div
                        className="filepond--drop-label"
                        style={{
                          transform: "translate3d(0px, 0px, 0px)",
                          opacity: 1,
                        }}
                      >
                        <label
                          htmlFor="filepond--browser-fb9ga0v01"
                          id="filepond--drop-label-fb9ga0v01"
                        >
                          Drag &amp; Drop your files or{" "}
                          <span className="filepond--label-action" tabIndex={0}>
                            Browse
                          </span>
                        </label>
                      </div>
                      <div
                        className="filepond--list-scroller"
                        style={{ transform: "translate3d(0px, 60px, 0px)" }}
                      >
                        <ul className="filepond--list" role="list" />
                      </div>
                      <div
                        className="filepond--panel filepond--panel-root"
                        data-scalable="true"
                      >
                        <div className="filepond--panel-top filepond--panel-root" />
                        <div
                          className="filepond--panel-center filepond--panel-root"
                          style={{
                            transform:
                              "translate3d(0px, 8px, 0px) scale3d(1, 0.6, 1)",
                          }}
                        />
                        <div
                          className="filepond--panel-bottom filepond--panel-root"
                          style={{ transform: "translate3d(0px, 68px, 0px)" }}
                        />
                      </div>
                      <span
                        className="filepond--assistant"
                        id="filepond--assistant-fb9ga0v01"
                        role="status"
                        aria-live="polite"
                        aria-relevant="additions"
                      />
                      <div className="filepond--drip" />
                      <fieldset className="filepond--data" />
                    </div>
                  </div>
     
                </div>
  {/* <div>
  <span className="font-medium text-slate-600 dark:text-navy-100">Post Images</span>
  <div className="filepond fp-bordered fp-grid mt-1.5 [--fp-grid:2]">
    <div className="filepond--root filepond--hopper" 
    data-style-button-remove-item-position="left" 
    data-style-button-process-item-position="right" 
    data-style-load-indicator-position="right" 
    data-style-progress-indicator-position="right" 
    data-style-button-remove-item-align="false" 
    style={{height: 76}}>
      <input className="filepond--browser" 
      type="file" id="filepond--browser-2jg6cl76i" 
      aria-controls="filepond--assistant-2jg6cl76i" 
      aria-labelledby="filepond--drop-label-2jg6cl76i" 
      multiple name="filepond" />
      <a className="filepond--credits" 
      href="https://pqina.nl/" tabIndex={-1} target="_blank" rel="noopener noreferrer" style={{transform: 'translateY(68px)'}}>Powered by PQINA</a>
      <div className="filepond--drop-label" style={{transform: 'translate3d(0px, 0px, 0px)', opacity: 1}}>
        <label htmlFor="filepond--browser-2jg6cl76i" id="filepond--drop-label-2jg6cl76i">Drag &amp; Drop your files or <span className="filepond--label-action" tabIndex={0}>Browse</span>
      </label>
      </div>
      <div className="filepond--list-scroller" style={{transform: 'translate3d(0px, 60px, 0px)'}}>
        <ul className="filepond--list" role="list" />
      </div>
      <div className="filepond--panel filepond--panel-root" data-scalable="true">
        <div className="filepond--panel-top filepond--panel-root" />
      <div className="filepond--panel-center filepond--panel-root" style={{transform: 'translate3d(0px, 8px, 0px) scale3d(1, 0.6, 1)'}} />
      <div className="filepond--panel-bottom filepond--panel-root" style={{transform: 'translate3d(0px, 68px, 0px)'}} /></div>
      <span className="filepond--assistant" id="filepond--assistant-2jg6cl76i" role="status" aria-live="polite" aria-relevant="additions" />
      <div className="filepond--drip" />
      <fieldset className="filepond--data" />
      </div>
  </div>
</div> */}
              </div>
            </div>

            {/* Right Section: Service Information */}
            <div className="flex-1">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Service Information
              </label>
              <div className="space-y-5 p-4 sm:p-5">
              {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"> */}
                <label className="block">
                  <select 
                  // className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
                  className="form-input peer  mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  >
                    <option>Select a Service</option>
                    <option>Licence Fresh</option>
                    <option>Renewal Licence</option>
                    <option>Duplicate Licence</option>
                    <option>RC Renewal</option>
                  </select>
                </label>
                {/* Additional Fields */}
                {/* <div className="flex space-x-4 mb-4"> */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="block ">
                    <span>Payment Method</span>
                    <span className="relative mt-1.5 flex">
                    <select 
                    // className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
                    className="form-input peer mt-1.5  w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    >
                      <option>Cash</option>
                      <option value="digital">Online</option>
                    </select>
                    </span>
                  </label>
                  <label className="block">
                    <span>Total Amount</span>
                    <span className="relative mt-1.5 flex">
                    <input
                      type="text"
                      placeholder="Total amount"
                      // className="form-input mt-1.5 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder:text-slate-400 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:placeholder:text-navy-300 dark:hover:border-navy-400 dark:focus:border-accent"
                      className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    />
                    </span>
                  </label>
                </div>
                <label className="block ">
                  <span>Pay Amount</span>
                  <span className="relative mt-1.5 flex">
                  <input
                    type="number"
                    placeholder=""
                    // className="form-input mt-1.5 w-full flex-1 rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder:text-slate-400 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:placeholder:text-navy-300 dark:hover:border-navy-400 dark:focus:border-accent"
                    className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  />
                  </span>
                </label>

                <button className="btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;



// import React, { useState } from "react";

// type CreateProps = {
//   showModal: boolean;
//   toggleModal: () => void;
// };

// const Create: React.FC<CreateProps> = ({ showModal, toggleModal }) => {
//   const [selectedOption, setSelectedOption] = useState<string>("create");

//   if (!showModal) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
//       role="dialog"
//       onKeyDown={(e) => e.key === "Escape" && toggleModal()}
//     >
//       {/* Background overlay */}
//       <div
//         className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300"
//         onClick={toggleModal}
//       ></div>

//       {/* Modal content */}
//       <div className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
//         {/* Modal Header */}
//         <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
//           <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
//             Add Admission
//           </h3>
//           <button
//             onClick={toggleModal}
//             className="btn -mr-1.5 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="size-4.5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Modal Body */}
//         <div className="flex flex-col overflow-y-auto px-4 py-4 sm:px-5">
//           {/* Main Flex Container */}
//           <div className="flex flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8">
//             {/* Left Section */}
//             <div className="flex-1 w-full">
//               {/* Radio Buttons */}
//               <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
//                 <label className="inline-flex items-center space-x-2">
//                   <input
//                     value="create"
//                     checked={selectedOption === "create"}
//                     onChange={(e) => setSelectedOption(e.target.value)}
//                     className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
//                     name="basic"
//                     type="radio"
//                   />
//                   <span>Create</span>
//                 </label>

//                 <label className="inline-flex items-center space-x-2">
//                   <input
//                     value="alreadyCreated"
//                     checked={selectedOption === "alreadyCreated"}
//                     onChange={(e) => setSelectedOption(e.target.value)}
//                     className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
//                     name="basic"
//                     type="radio"
//                   />
//                   <span>Already Created</span>
//                 </label>
//               </div>

//               {/* Conditional Input */}
//               {selectedOption === "alreadyCreated" && (
//                 <div className="mb-4">
//                   <label className="block">
//                     <span>Enter Mobile No:</span>
//                     <select className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
//                       <option>Select a mobile</option>
//                       <option>345678</option>
//                       <option>78907654</option>
//                       <option>0098765434</option>
//                     </select>
//                   </label>
//                 </div>
//               )}

//               {/* Profile Information */}
//               <div className="mb-4 mt-4">
//                 <label className="block mb-2 text-sm font-medium text-gray-700">
//                   Profile Information
//                 </label>
//                 <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
//                   <label className="block flex-1">
//                     <span>Name</span>
//                     <input
//                       type="text"
//                       placeholder="name"
//                       className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder:text-slate-400 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:placeholder:text-navy-300 dark:hover:border-navy-400 dark:focus:border-accent"
//                     />
//                   </label>
//                   <label className="block flex-1">
//                     <span>Mobile</span>
//                     <input
//                       type="text"
//                       placeholder="mobile"
//                       className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 placeholder:text-slate-400 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:placeholder:text-navy-300 dark:hover:border-navy-400 dark:focus:border-accent"
//                     />
//                   </label>
//                 </div>
//               </div>
//             </div>

//             {/* Right Section */}
//             <div className="flex-1 w-full">
//               <label className="block mb-2 text-sm font-medium text-gray-700">
//                 Service Information
//               </label>
//               <div className="space-y-5">
//                 <label className="block">
//                   <select className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
//                     <option>Select a Service</option>
//                     <option>Licence Fresh</option>
//                     <option>Renewal Licence</option>
//                   </select>
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Create;
