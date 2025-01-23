// import React, { useState } from "react";

// type CreateProps = {
//   showmodal: boolean;
//   togglemodal: () => void;
// };


// const Create: React.FC<CreateProps> = ({
//   showmodal,
//   togglemodal,
//   formData,
//   isEditing,
// }) => {
//   const [selectedOption, setSelectedOption] = useState<string>("create");


//   const [document, setDocument] = useState<string | null>(null);
//   const [photo, setPhoto] = useState<string | null>(null);


//   const handleFileChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     setImage: React.Dispatch<React.SetStateAction<string | null>>
//   ) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };


//   const handleRemove = (
//     setImage: React.Dispatch<React.SetStateAction<string | null>>
//   ) => {
//     setImage(null);
//   };

//   if (!showmodal) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
//       role="dialog"
//     >
//       {/* Background overlay */}
//       <div
//         className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300"
//         onClick={togglemodal}
//       ></div>

//       {/* Modal content */}
//       <div className="relative flex w-full max-w-6xl origin-top flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
//         {/* Modal Header */}
//         <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
//           <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
//             Add Admission
//           </h3>
//           <button
//             onClick={togglemodal}
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

//         <div className="flex flex-col sm:flex-row max-h-[80vh] overflow-y-auto px-4 py-4 sm:px-5">
//           <div className="flex-1">
//             <label className="block mb-2 text-lg font-medium text-slate-700 dark:text-navy-100">
//               Profile Information
//             </label>

//             <div className="flex flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8 mt-2">
//               <div className="flex-1 ">
//                 {/* Radio Buttons */}
//                 <div className="flex items-center space-x-4 mb-4">
//                   <label className="inline-flex items-center space-x-2">
//                     <input
//                       value="create"
//                       checked={selectedOption === "create"}
//                       onChange={(e) => setSelectedOption(e.target.value)}
//                       className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
//                       name="basic"
//                       type="radio"
//                     />
//                     <span>Create</span>
//                   </label>

//                   <label className="inline-flex items-center space-x-2">
//                     <input
//                       value="alreadyCreated"
//                       checked={selectedOption === "alreadyCreated"}
//                       onChange={(e) => setSelectedOption(e.target.value)}
//                       className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
//                       name="basic"
//                       type="radio"
//                     />
//                     <span>Already Created</span>
//                   </label>
//                 </div>

//                 {/* Conditional Input Field */}
//                 {selectedOption === "alreadyCreated" && (
//                   <div className="mb-4">
//                     <label className="block">
//                       <span>Enter Mobile No:</span>
//                       <select className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
//                         <option>Select a mobile</option>
//                         <option>345678</option>
//                         <option>78907654</option>
//                         <option>0098765434</option>
//                       </select>
//                     </label>
//                   </div>
//                 )}

//                 {/* Profile Information */}
//                 <div className="mb-4 mt-4 ">
//                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                     <label className="block">
//                       <span>Name</span>
//                       <span className="relative mt-1.5 flex">
//                         <input
//                           className="form-input peer  mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                           placeholder="name"
//                           type="text"
//                         />
//                       </span>
//                     </label>
//                     <label className="block">
//                       <span>Mobile</span>
//                       <span className="relative mt-1.5 flex">
//                         <input
//                           className="form-input peer  mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                           placeholder="mobile"
//                           type="text"
//                         />
//                       </span>
//                     </label>
//                   </div>

//                   {/* Additional Fields */}
//                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">
//                     <label className="block">
//                       <span>Email</span>
//                       <span className="relative mt-1.5 flex">
//                         <input
//                           type="text"
//                           placeholder="email"
//                           className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                         />
//                       </span>
//                     </label>
//                     <label className="block ">
//                       <span>Blood Group</span>
//                       <span className="relative mt-1.5 flex">
//                         <select
//                           className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                         >
//                           <option>Select Blood Group</option>
//                           <option>A+ve</option>
//                           <option>O+ve</option>
//                           <option>B+ve</option>
//                           <option>AB+ve</option>
//                           <option>B-ve</option>
//                           <option>A-ve</option>
//                           <option>O-ve</option>
//                         </select>
//                       </span>
//                     </label>
//                   </div>
//                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">
//                     <label className="block ">
//                       <span>Gender</span>
//                       <span className="relative mt-1.5 flex">
//                         <select
//                           className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                         >
//                           <option>Select a Gender</option>
//                           <option>Male</option>
//                           <option>Female</option>
//                           <option>Others</option>
//                         </select>
//                       </span>
//                     </label>

//                     <label className="block ">
//                       <span>Branch Name</span>
//                       <span className="relative mt-1.5 flex">
//                         <select
//                           // className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
//                           className="form-select peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                         >
//                           <option>Choose Document Type</option>
//                           <option>SSLC</option>
//                           <option>Adhar</option>
//                           <option>Birth Certificate</option>
//                           <option>Passport</option>
//                         </select>
//                       </span>
//                     </label>
//                   </div>

//                   <label className="block mt-2">
//                     <span>Choose Document</span>
//                     <span className="relative mt-1.5 flex">
//                       <select
//                         className="form-select peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                       >
//                         <option>Choose Document Type</option>
//                         <option>SSLC</option>
//                         <option>Adhar</option>
//                         <option>Birth Certificate</option>
//                         <option>Passport</option>
//                       </select>
//                     </span>
//                   </label>

//                   <div className="w-full max-w-3xl mx-auto space-y-6">
//                     {/* Grid Container */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                       {/* Upload Document Proof Image Section */}
//                       <div>
//                         <label className="block mb-2 mt-4">
//                           Document Proof
//                         </label>
//                         <div
//                           className={`border-2 rounded-lg flex items-center justify-center h-42 w-42 sm:h-40 sm:w-40 ${
//                             document ? "border-gray-300" : "border-blue-500"
//                           }`}
//                         >
//                           {document ? (
//                             <img
//                               src={document}
//                               alt="Uploaded Document"
//                               className="max-h-full max-w-full object-contain"
//                             />
//                           ) : (
//                             <span className="text-gray-500 text-sm text-center">
//                               No image selected
//                             </span>
//                           )}
//                         </div>
//                         <div className="mt-4 flex space-x-2">
//                           {!document ? (
//                             <label className="cursor-pointer bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded">
//                               Select Image
//                               <input
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={(e) =>
//                                   handleFileChange(e, setDocument)
//                                 }
//                                 className="hidden"
//                               />
//                             </label>
//                           ) : (
//                             <>
//                               <label className="cursor-pointer bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded">
//                                 Change
//                                 <input
//                                   type="file"
//                                   accept="image/*"
//                                   onChange={(e) =>
//                                     handleFileChange(e, setDocument)
//                                   }
//                                   className="hidden"
//                                 />
//                               </label>
//                               <button
//                                 onClick={() => handleRemove(setDocument)}
//                                 className="outline-dark border-[1px] border-dark font-bold py-2 px-4 rounded"
//                               >
//                                 Remove
//                               </button>
//                             </>
//                           )}
//                         </div>
//                       </div>

//                       {/* Upload User Photo Section */}
//                       <div>
//                         <label className="block mb-2 mt-4">User Photo</label>
//                         <div
//                           className={`border-2 rounded-lg flex items-center justify-center h-42 w-42 sm:h-40 sm:w-40 ${
//                             photo ? "border-gray-300" : "border-blue-500"
//                           }`}
//                         >
//                           {photo ? (
//                             <img
//                               src={photo}
//                               alt="Uploaded Photo"
//                               className="max-h-full max-w-full object-contain"
//                             />
//                           ) : (
//                             <span className="text-gray-500 text-sm text-center">
//                               No image selected
//                             </span>
//                           )}
//                         </div>
//                         <div className="mt-4 flex space-x-2">
//                           {!photo ? (
//                             <label className="cursor-pointer bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded">
//                               Select Image
//                               <input
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={(e) => handleFileChange(e, setPhoto)}
//                                 className="hidden"
//                               />
//                             </label>
//                           ) : (
//                             <>
//                               <label className="cursor-pointer bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded">
//                                 Change
//                                 <input
//                                   type="file"
//                                   accept="image/*"
//                                   onChange={(e) =>
//                                     handleFileChange(e, setPhoto)
//                                   }
//                                   className="hidden"
//                                 />
//                               </label>
//                               <button
//                                 onClick={() => handleRemove(setPhoto)}
//                                 className="outline-dark border-[1px] border-dark font-bold py-2 px-4 rounded"
//                               >
//                                 Remove
//                               </button>
//                             </>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Right Section: Service Information */}
//           <div className="flex-1 mt-4 sm:mt-0">
//             <label className="block mb-2 text-lg  font-medium text-slate-700 dark:text-navy-100 mt-4">
//               Service Information
//             </label>
//             <div className="space-y-5 p-4 sm:p-5">
//               <label className="block">
//                 <select
//                   className="form-input peer  mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                 >
//                   <option>Select a Service</option>
//                   <option>Licence Fresh</option>
//                   <option>Renewal Licence</option>
//                   <option>Duplicate Licence</option>
//                   <option>RC Renewal</option>
//                 </select>
//               </label>
//               {/* Additional Fields */}
//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 <label className="block ">
//                   <span>Payment Method</span>
//                   <span className="relative mt-1.5 flex">
//                     <select
//                       className="form-input peer mt-1.5  w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                     >
//                       <option>Cash</option>
//                       <option value="digital">Online</option>
//                     </select>
//                   </span>
//                 </label>
//                 <label className="block">
//                   <span>Total Amount</span>
//                   <span className="relative mt-1.5 flex">
//                     <input
//                       type="text"
//                       placeholder="Total amount"
//                       className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                     />
//                   </span>
//                 </label>
//               </div>
//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">
//                 <label className="block ">
//                   <span>Pay Amount</span>
//                   <span className="relative mt-1.5 flex">
//                     <input
//                       type="number"
//                       placeholder=""
//                       className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                     />
//                   </span>
//                 </label>
//               </div>
//               <button className="btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
//                 Add
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Create;










// import React, { useEffect, useState } from "react";

// type CreateProps = {
//   showmodal: boolean;
//   togglemodal: () => void;
  
// };

// // const Create: React.FC<CreateProps> = ({showmodal,togglemodal, formDatas, isEditing,}) => {
//   const Create: React.FC<CreateProps> = ({ showmodal, togglemodal}) => {
//   const [selectedOption, setSelectedOption] = useState<string>("create");


//   const [document, setDocument] = useState<string | null>(null);
//   const [photo, setPhoto] = useState<string | null>(null);


//   const handleFileChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     setImage: React.Dispatch<React.SetStateAction<string | null>>
//   ) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImage(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };


//   const handleRemove = (
//     setImage: React.Dispatch<React.SetStateAction<string | null>>
//   ) => {
//     setImage(null);
//   };

//   if (!showmodal) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
//       role="dialog"
//     >
//       {/* Background overlay */}
//       <div
//         className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300"
//         onClick={togglemodal}
//       ></div>

//       {/* Modal content */}
//       <div className="relative flex w-full max-w-6xl origin-top flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
//         {/* Modal Header */}
//         <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
//           <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
//           Add Admission
//           </h3>
//           <button
//             onClick={togglemodal}
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

//         <div className="flex flex-col sm:flex-row max-h-[80vh] overflow-y-auto px-4 py-4 sm:px-5">
//           <div className="flex-1">
//             <label className="block mb-2 text-lg font-medium text-slate-700 dark:text-navy-100">
//               Profile Information
//             </label>

//             <div className="flex flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8 mt-2">
//               <div className="flex-1 ">
//                 {/* Radio Buttons */}
//                 <div className="flex items-center space-x-4 mb-4">
//                   <label className="inline-flex items-center space-x-2">
//                     <input
//                       value="create"
//                       checked={selectedOption === "create"}
//                       onChange={(e) => setSelectedOption(e.target.value)}
//                       className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
//                       name="basic"
//                       type="radio"
//                     />
//                     <span>Create</span>
//                   </label>

//                   <label className="inline-flex items-center space-x-2">
//                     <input
//                       value="alreadyCreated"
//                       checked={selectedOption === "alreadyCreated"}
//                       onChange={(e) => setSelectedOption(e.target.value)}
//                       className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
//                       name="basic"
//                       type="radio"
//                     />
//                     <span>Already Created</span>
//                   </label>
//                 </div>

//                 {/* Conditional Input Field */}
//                 {selectedOption === "alreadyCreated" && (
//                   <div className="mb-4">
//                     <label className="block">
//                       <span>Enter Mobile No:</span>
//                       <select className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
//                         <option>Select a mobile</option>
//                         <option>345678</option>
//                         <option>78907654</option>
//                         <option>0098765434</option>
//                       </select>
//                     </label>
//                   </div>
//                 )}

//                 {/* Profile Information */}
//                 <div className="mb-4 mt-4 ">
//                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                     <label className="block">
//                       <span>Name</span>
//                       <span className="relative mt-1.5 flex">
//                         <input
//                          value={ localFormData.user_name}
//              onChange={handleChange}
//                           className="form-input peer  mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                           placeholder="name"
//                           type="text"
//                         />
//                       </span>
//                     </label>
//                     <label className="block">
//                       <span>Mobile</span>
//                       <span className="relative mt-1.5 flex">
//                         <input
//                           className="form-input peer  mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                           placeholder="mobile"
//                           type="text"
//                         />
//                       </span>
//                     </label>
//                   </div>

//                   {/* Additional Fields */}
//                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">
//                     <label className="block">
//                       <span>Email</span>
//                       <span className="relative mt-1.5 flex">
//                         <input
//                           type="text"
//                           placeholder="email"
//                           className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                         />
//                       </span>
//                     </label>
//                     <label className="block ">
//                       <span>Blood Group</span>
//                       <span className="relative mt-1.5 flex">
//                         <select
//                           className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                         >
//                           <option>Select Blood Group</option>
//                           <option>A+ve</option>
//                           <option>O+ve</option>
//                           <option>B+ve</option>
//                           <option>AB+ve</option>
//                           <option>B-ve</option>
//                           <option>A-ve</option>
//                           <option>O-ve</option>
//                         </select>
//                       </span>
//                     </label>
//                   </div>
//                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">
//                     <label className="block ">
//                       <span>Gender</span>
//                       <span className="relative mt-1.5 flex">
//                         <select
//                           className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                         >
//                           <option>Select a Gender</option>
//                           <option>Male</option>
//                           <option>Female</option>
//                           <option>Others</option>
//                         </select>
//                       </span>
//                     </label>

//                     <label className="block ">
//                       <span>Branch Name</span>
//                       <span className="relative mt-1.5 flex">
//                         <select
//                           // className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
//                           className="form-select peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                         >
//                           <option>Choose Document Type</option>
//                           <option>SSLC</option>
//                           <option>Adhar</option>
//                           <option>Birth Certificate</option>
//                           <option>Passport</option>
//                         </select>
//                       </span>
//                     </label>
//                   </div>

//                   <label className="block mt-2">
//                     <span>Choose Document</span>
//                     <span className="relative mt-1.5 flex">
//                       <select
//                         className="form-select peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                       >
//                         <option>Choose Document Type</option>
//                         <option>SSLC</option>
//                         <option>Adhar</option>
//                         <option>Birth Certificate</option>
//                         <option>Passport</option>
//                       </select>
//                     </span>
//                   </label>

//                   <div className="w-full max-w-3xl mx-auto space-y-6">
//                     {/* Grid Container */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                       {/* Upload Document Proof Image Section */}
//                       <div>
//                         <label className="block mb-2 mt-4">
//                           Document Proof
//                         </label>
//                         <div
//                           className={`border-2 rounded-lg flex items-center justify-center h-42 w-42 sm:h-40 sm:w-40 ${
//                             document ? "border-gray-300" : "border-blue-500"
//                           }`}
//                         >
//                           {document ? (
//                             <img
//                               src={document}
//                               alt="Uploaded Document"
//                               className="max-h-full max-w-full object-contain"
//                             />
//                           ) : (
//                             <span className="text-gray-500 text-sm text-center">
//                               No image selected
//                             </span>
//                           )}
//                         </div>
//                         <div className="mt-4 flex space-x-2">
//                           {!document ? (
//                             <label className="cursor-pointer bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded">
//                               Select Image
//                               <input
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={(e) =>
//                                   handleFileChange(e, setDocument)
//                                 }
//                                 className="hidden"
//                               />
//                             </label>
//                           ) : (
//                             <>
//                               <label className="cursor-pointer bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded">
//                                 Change
//                                 <input
//                                   type="file"
//                                   accept="image/*"
//                                   onChange={(e) =>
//                                     handleFileChange(e, setDocument)
//                                   }
//                                   className="hidden"
//                                 />
//                               </label>
//                               <button
//                                 onClick={() => handleRemove(setDocument)}
//                                 className="outline-dark border-[1px] border-dark font-bold py-2 px-4 rounded"
//                               >
//                                 Remove
//                               </button>
//                             </>
//                           )}
//                         </div>
//                       </div>

//                       {/* Upload User Photo Section */}
//                       <div>
//                         <label className="block mb-2 mt-4">User Photo</label>
//                         <div
//                           className={`border-2 rounded-lg flex items-center justify-center h-42 w-42 sm:h-40 sm:w-40 ${
//                             photo ? "border-gray-300" : "border-blue-500"
//                           }`}
//                         >
//                           {photo ? (
//                             <img
//                               src={photo}
//                               alt="Uploaded Photo"
//                               className="max-h-full max-w-full object-contain"
//                             />
//                           ) : (
//                             <span className="text-gray-500 text-sm text-center">
//                               No image selected
//                             </span>
//                           )}
//                         </div>
//                         <div className="mt-4 flex space-x-2">
//                           {!photo ? (
//                             <label className="cursor-pointer bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded">
//                               Select Image
//                               <input
//                                 type="file"
//                                 accept="image/*"
//                                 onChange={(e) => handleFileChange(e, setPhoto)}
//                                 className="hidden"
//                               />
//                             </label>
//                           ) : (
//                             <>
//                               <label className="cursor-pointer bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded">
//                                 Change
//                                 <input
//                                   type="file"
//                                   accept="image/*"
//                                   onChange={(e) =>
//                                     handleFileChange(e, setPhoto)
//                                   }
//                                   className="hidden"
//                                 />
//                               </label>
//                               <button
//                                 onClick={() => handleRemove(setPhoto)}
//                                 className="outline-dark border-[1px] border-dark font-bold py-2 px-4 rounded"
//                               >
//                                 Remove
//                               </button>
//                             </>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Right Section: Service Information */}
//           <div className="flex-1 mt-4 sm:mt-0">
//             <label className="block mb-2 text-lg  font-medium text-slate-700 dark:text-navy-100 mt-4">
//               Service Information
//             </label>
//             <div className="space-y-5 p-4 sm:p-5">
//               <label className="block">
//                 <select
//                   className="form-input peer  mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                 >
//                   <option>Select a Service</option>
//                   <option>Licence Fresh</option>
//                   <option>Renewal Licence</option>
//                   <option>Duplicate Licence</option>
//                   <option>RC Renewal</option>
//                 </select>
//               </label>
//               {/* Additional Fields */}
//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 <label className="block ">
//                   <span>Payment Method</span>
//                   <span className="relative mt-1.5 flex">
//                     <select
//                       className="form-input peer mt-1.5  w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                     >
//                       <option>Cash</option>
//                       <option value="digital">Online</option>
//                     </select>
//                   </span>
//                 </label>
//                 <label className="block">
//                   <span>Total Amount</span>
//                   <span className="relative mt-1.5 flex">
//                     <input
//                       type="text"
//                       placeholder="Total amount"
//                       className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                     />
//                   </span>
//                 </label>
//               </div>
//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">
//                 <label className="block ">
//                   <span>Pay Amount</span>
//                   <span className="relative mt-1.5 flex">
//                     <input
//                       type="number"
//                       placeholder=""
//                       className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                     />
//                   </span>
//                 </label>
//               </div>
//               <button className="btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
//                 Add
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Create;



import { useAuth } from "@/app/context/AuthContext";
import React, { useEffect, useState } from "react";
import Select from 'react-select';

type CreateProps = {
  showmodal: boolean;
  togglemodal: () => void;
  
};

// const Create: React.FC<CreateProps> = ({showmodal,togglemodal, formDatas, isEditing,}) => {
  const Create: React.FC<CreateProps> = ({ showmodal, togglemodal}) => {
    const { state } = useAuth();
  const [selectedOption, setSelectedOption] = useState<string>("create");
  const [branch, setBranch] = useState<{ id: string; branch_name: string }[]>([]);
  const [service, setService] = useState<{ id: string; service_name: string }[]>([]);
  const [documents, setDocuments] = useState<File | null>(null);
  const [photo, setPhoto] = useState<File | null>(null);
const[imagePreview,setImagePreview]=useState<string>('');
const[documentPreview,setDocumentPreview]=useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');


  const [name, setname] = useState('');
  const [mobile, setmobile] = useState('');
  const [email, setemail] = useState('');
  const [blood_group, setblood_group] = useState('');
  const [gender, setgender] = useState('');
  const [branch_id, setbranch_id] = useState('');
  const [userfile, setuserfile] = useState('');
  const [document, setdocument] = useState('');
  const [payment_method, setpayment_method] = useState('');
  const [service_id, setservice_id] = useState('');
  const [total_amount, settotal_amount] = useState('');
  const [pay_amount, setpay_amount] = useState('');
  const [type, settype] = useState('');
  const [amount, setamount] = useState('');
  const [document_type, setdocument_type] = useState('');

 


  const fetchbranchData = async () => {
  

    try {

      const response = await fetch('/api/admin/settings/branch_details', {
        method: 'POST',
        headers: {
           'authorizations': state?.accessToken ?? '', 
          // 'authorizations': token ?? '',
          'api_key': '10f052463f485938d04ac7300de7ec2b',  // Make sure the API key is correct
        },
        body: JSON.stringify({ /* request body */ }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        // console.error('API error:', errorData);
        throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || 'Unknown error'}`);
      }
      
      const data = await response.json();
   
      if (data.success) {
        setBranch(data.data || []);
         
      } else {
        // console.error("API error:", data.msg || "Unknown error");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  
  useEffect(() => {
    fetchbranchData();
  }, [state]);

  const fetchserviceData = async () => {
  
    try {

      const response = await fetch('/api/admin/settings/service_details', {
        method: 'POST',
        headers: {
           'authorizations': state?.accessToken ?? '', 
          // 'authorizations': token ?? '',
          'api_key': '10f052463f485938d04ac7300de7ec2b',  // Make sure the API key is correct
        },
        body: JSON.stringify({ /* request body */ }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        // console.error('API error:', errorData);
        throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || 'Unknown error'}`);
      }
      
      const data = await response.json();
   
      if (data.success) {
        setService(data.data || []);
         
      } else {
        // console.error("API error:", data.msg || "Unknown error");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  
  useEffect(() => {
    fetchserviceData();
  }, [state]);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  
  
  const handleImageChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    const file=e.target.files?.[0];

    if(file){
      setPhoto(file);
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleDocumentChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    const file=e.target.files?.[0];

    if(file){
      setDocuments(file);
      setDocumentPreview(URL.createObjectURL(file))
    }
  }

  const handleRemove = (
    setImage: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    setImage(null);
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('mobile', mobile);
    formData.append('email', email);
    formData.append('blood_group', blood_group);
    formData.append('gender', gender);
    formData.append('branch_id', branch_id);
    formData.append('payment_method', payment_method);
    formData.append('service_id', service_id);
    formData.append(' total_amount',  total_amount);
    formData.append(' pay_amount', pay_amount);
    formData.append('type', type);
    formData.append('amount', amount);
    formData.append('document_type',document_type);

    if (photo) {
      formData.append('userfile', photo);
    }
    if (documents) {
      formData.append('document', documents);
    }


    try {
      const response = await fetch("/api/admin/signup/admission", {
        method: "POST",
        headers: {
          authorizations: state?.accessToken ?? "",
        api_key: "10f052463f485938d04ac7300de7ec2b",
        "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

   
    console.log(formData, "data sent to backend");
  
    const responseJson = await response.json();
    console.log("Response from backend:", responseJson);

    if (!response.ok) {
      alert(`Failed to add Admission. Status code: ${response.status}`);
      return;
    }

    alert(`Admission added successfully!`);
    togglemodal(); 
  } catch (error) {
    console.error("Error submitting form:", error);
    alert(`An error occurred while adding the Admission.`);
  }
  };



  const filteredServices = service.filter((service) =>
    service.service_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle service selection
  const handleSelect = (service) => {
    setSelectedService(service.service_name);
    if (selectedService) {
      setSelectedAmount(selectedService.amount);
    }
    setIsOpen(false); // Close the dropdown after selecting
  };

  if (!showmodal) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
      role="dialog"
    >
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300"
        onClick={togglemodal}
      ></div>

      {/* Modal content */}
      <div className="relative flex w-full max-w-6xl origin-top flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
        {/* Modal Header */}
        <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
          <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
          Add Admission
          </h3>
          <button
            onClick={togglemodal}
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
        <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row max-h-[80vh] overflow-y-auto px-4 py-4 sm:px-5 gap-8">
          
          <div className="flex-1  p-4">
            <label className="block mb-2 text-lg font-medium text-slate-700 dark:text-navy-100">
              Profile Information
            </label>

            <div className="flex flex-col space-y-8 sm:flex-row sm:space-y-0 sm:space-x-8 mt-2">
              <div className="flex-1 ">
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
                      <select 
                      className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent">
                        <option>Select a mobile</option>
                        <option>345678</option>
                        <option>78907654</option>
                        <option>0098765434</option>
                      </select>
                    </label>
                  </div>
                )}

                {/* Profile Information */}
                <div className="mb-4 mt-4 ">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span>Name</span>
                      <span className="relative mt-1.5 flex">
                        <input
                        name="name"
                       value={name}
                       onChange={handleChange}
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
                         name="mobile"
                         value={mobile}
                         onChange={handleChange}
                          className="form-input peer  mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                          placeholder="mobile"
                          type="text"
                        />
                      </span>
                    </label>
                  </div>

                  {/* Additional Fields */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">
                    <label className="block">
                      <span>Email</span>
                      <span className="relative mt-1.5 flex">
                        <input
                         name="email"
                         value={email}
                         onChange={handleChange}
                          type="text"
                          placeholder="email"
                          className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        />
                      </span>
                    </label>
                    <label className="block ">
                      <span>Blood Group</span>
                      <span className="relative mt-1.5 flex">
                        <select
                         name="blood_group"
                         value={blood_group}
                         onChange={handleChange}
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
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">
                    <label className="block ">
                      <span>Gender</span>
                      <span className="relative mt-1.5 flex">
                        <select
                         name="gender"
                         value={gender}
                         onChange={handleChange}
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
                      <span>Branch Name</span>
                      <span className="relative mt-1.5 flex">
                        <select
                         name="branch_id"
                         value={branch_id}
                         onChange={handleChange}
                          // className="form-select mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
                          className="form-select peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                        >
                          <option>Select a Branch</option>
                          {branch.map((branch) => (
                  <option key={branch.id} value={branch.id}>
                    {branch.branch_name}
                  </option>
                ))}
                        </select>
             
                      </span>
                    </label>
                  </div>

                  <label className="block mt-2">
                    <span>Choose Document</span>
                    <span className="relative mt-1.5 flex">
                      <select
                       name="document_type"
                       value={document_type}
                       onChange={handleChange}
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

                  <div className="w-full max-w-3xl mx-auto space-y-6">
                    {/* Grid Container */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Upload Document Proof Image Section */}
                      <div>
                        <label className="block mb-2 mt-4">
                          Document Proof
                        </label>
                        <div
                          className={`border-2 rounded-lg flex items-center justify-center h-42 w-42 sm:h-40 sm:w-40 ${
                            document ? "border-gray-300" : "border-blue-500"
                          }`}
                        >
                          {document ? (
                            <img
                              src={document}
                              alt="Uploaded Document"
                              className="max-h-full max-w-full object-contain"
                            />
                          ) : (
                            <span className="text-gray-500 text-sm text-center">
                              No image selected
                            </span>
                          )}
                        </div>
                        <div className="mt-4 flex space-x-2">
                          {!document ? (
                            <label className="cursor-pointer bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded">
                              Select Image
                              <input
                                type="file"
                                accept="image/*"
                                name="document"
                                value={document}
                                // onChange={handleChange}
                                onChange={handleDocumentChange}
                                className="hidden"
                              />
                            </label>
                          ) : (
                            <>
                              <label className="cursor-pointer bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded">
                                Change
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) =>
                                    handleFileChange(e, setDocument)
                                  }
                                  className="hidden"
                                />
                              </label>
                              <button
                                onClick={() => handleRemove(setDocument)}
                                className="outline-dark border-[1px] border-dark font-bold py-2 px-4 rounded"
                              >
                                Remove
                              </button>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Upload User Photo Section */}
                      <div>
                        <label className="block mb-2 mt-4">User Photo</label>
                        <div
                          className={`border-2 rounded-lg flex items-center justify-center h-42 w-42 sm:h-40 sm:w-40 ${
                            photo ? "border-gray-300" : "border-blue-500"
                          }`}
                        >
                          {photo ? (
                            <img
                              src={photo}
                              alt="Uploaded Photo"
                              className="max-h-full max-w-full object-contain"
                            />
                          ) : (
                            <span className="text-gray-500 text-sm text-center">
                              No image selected
                            </span>
                          )}
                        </div>
                        <div className="mt-4 flex space-x-2">
                          {!photo ? (
                            <label className="cursor-pointer bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded">
                              Select Image
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                              />
                            </label>
                          ) : (
                            <>
                              <label className="cursor-pointer bg-primary hover:bg-primary-focus text-white font-bold py-2 px-4 rounded">
                                Change
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) =>
                                    handleFileChange(e, setPhoto)
                                  }
                                  className="hidden"
                                />
                              </label>
                              <button
                                onClick={() => handleRemove(setPhoto)}
                                className="outline-dark border-[1px] border-dark font-bold py-2 px-4 rounded"
                              >
                                Remove
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Section: Service Information */}
          <div className="flex-1 mt-4 sm:mt-0  p-4">
            <label className="block mb-2 text-lg  font-medium text-slate-700 dark:text-navy-100 mt-4">
              Service Information
            </label>
            <div className="space-y-5 p-4 sm:p-5">
      <div className="relative w-full">
      <div
        className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9"
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown open/close
      >
        <span>{selectedService || 'Select a Service'}</span>
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-slate-300 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search services..."
            className="w-full px-3 py-2 border-b"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="max-h-60 overflow-y-auto">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="cursor-pointer px-3 py-2 hover:bg-gray-200"
                  onClick={() => handleSelect(service)}
                >
                  {service.service_name}
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-gray-400">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
   
              {/* Additional Fields */}
     {(selectedService === 'licence fresh' || selectedService === 'renewal licence' || selectedService === 'duplicate licence' || selectedService === 'licence reentry' || selectedService === 'rc transfer') && (
      
  <label className="block ">

  <span className="relative mt-1.5 flex">
    <select
      className="form-input peer mt-1.5  w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
    >
      <option>Select Type</option>
      <option value="lmc">LMC</option>
      <option value="mc">MC</option>
      <option value="both">BOTH</option>
    </select>
  </span>
</label>
     )}

     {(selectedService === 'rc transfer' || selectedService === 'cf' || selectedService === 'cf renewal' || selectedService === 'rc renewal' || selectedService === 'sfds') && (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <label className="block ">
    <span className="relative mt-1.5 flex">
                    <input
                      type="text"
                      placeholder="Tax"
                      className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    />
                  </span>
    </label>
    <label className="block ">
    <span className="relative mt-1.5 flex">
                    <input
                      type="text"
                      placeholder="Pucc"
                      className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    />
                  </span>
    </label>
    </div>
         )}
         {/* Common Fields */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="block ">
                  <span>Payment Method</span>
                  <span className="relative mt-1.5 flex">
                    <select
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
                      value={selectedAmount}
                      className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    />
                  
                  </span>
                </label>
             
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">
                <label className="block ">
                  <span>Pay Amount</span>
                  <span className="relative mt-1.5 flex">
                    <input
                      type="number"
                      placeholder=""
                      className="form-input peer mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                    />
                  </span>
                </label>
              </div>
              <button 
           type="submit"
              className="btn bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                Add
              </button>
            </div>
          </div>
          
        </div>
        </form>
      </div>
    </div>
  );
};

export default Create;