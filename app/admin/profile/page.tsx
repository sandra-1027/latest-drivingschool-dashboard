// "use client";
// import { useAuth } from "@/app/context/AuthContext";
// import withAuth from "@/hoc/withAuth";
// import Link from "next/link";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   FaFacebookSquare,
//   FaInstagram,
//   FaLinkedin,
//   FaTwitter,
// } from "react-icons/fa";

// import { IoEye, IoEyeOff } from "react-icons/io5";
// const AdminProfile = () => {
//   const {state}=useAuth();
//   const [activeTab, setActiveTab] = useState("account"); // Default to 'account'
//   const [changePasswordData, setChangePasswordData] = useState({
//     role: "staff",
//     phone: "",
//     oldPassword: "",
//     newPassword: "",
//     confirmNewPassword: "",
//   });

//   const [showOldPassword, setShowOldPassword] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [message, setMessage] = useState("");
//   const [profileImage, setProfileImage] = useState<string | null>(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement | null>(null);
//   const togglePasswordVisibility = () => setShowPassword(!showPassword);
//   const toggleConfirmPasswordVisibility = () =>
//     setShowConfirmPassword(!showConfirmPassword);


  // const handleCancel = () => {
  //   if (activeTab === "account") {
  //     setUserData({ first_name: "", email: "" }); // Reset Account form
  //   } else if (activeTab === "security") {
  //     setChangePasswordData({ newPassword: "", confirmPassword: "" }); // Reset Security form
  //   }
  //   setMessage("");
  // };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setChangePasswordData({ ...changePasswordData, [name]: value });
//   };

//   // const handlePasswordChange = (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();
//   //   setMessage("");
//   //   setIsSubmitting(true);

//   //   setTimeout(() => {
//   //     setIsSubmitting(false);

//   //     if (!changePasswordData.oldPassword) {
//   //       setMessage("Old password is required!");
//   //       return;
//   //     }

//   //     if (
//   //       changePasswordData.newPassword !== changePasswordData.confirmNewPassword
//   //     ) {
//   //       setMessage("Passwords do not match!");
//   //       return;
//   //     }

//   //     console.log("Password change request:", changePasswordData);
//   //     setMessage("Password successfully updated!");
//   //   }, 1500);
//   // };
  
//   const handlePasswordChange = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setMessage("");
//     setIsSubmitting(true);
  
//     try {
//       // Replace this with your backend endpoint
//       const response = await fetch('/api/admin/member/change_password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(changePasswordData),
//       });
  
//       const result = await response.json();
//       if (!response.ok) throw new Error(result.message || 'Failed to update password.');
  
//       setMessage("Password successfully updated!");
//     } catch (error: any) {
//       setMessage(error.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
  
//   const showAccount = () => setActiveTab("account");
//   const showSecurity = () => setActiveTab("security");
//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setProfileImage(reader.result?.toString() ?? null); // Safely set the state
//       setIsEditing(true); // Set editing to true when an image is uploaded
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle saving the profile image to the backend
//   const saveProfileImage = async () => {
//     if (!profileImage) {
//       alert("Please upload a profile image.");
//       return;
//     }
//   };
//   const triggerFileInput = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click(); // Only call if ref is not null
//     }
//   };

//   return (
//     <div className=" w-full  pb-8">
//       <div className="flex items-center space-x-4 py-5 lg:py-6">
//         <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
//           Profile
//         </h2>
//         <div className="hidden h-full py-1 sm:flex">
//           <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
//         </div>
//         <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
//           <li className="flex items-center space-x-2">
//             <a
//               className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
//               href="#"
//             >
//               Admin
//             </a>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="size-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </li>
//           <li> Profile</li>
//         </ul>
//       </div>
//       <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
//         <div className="col-span-12 lg:col-span-4">
//           <div className="card p-4 sm:p-5">
//             <div className="flex items-center space-x-4">
//               <div className="avatar size-14">
//                 <img className="rounded-full" src="/profile.png" alt="avatar" />
//               </div>
//               <div>
//                 <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
//                   Shaniba Driving Academy
//                 </h3>
//                 <p className="text-xs+">123 Main Street, City, Country</p>
//                 <p className="text-xs+">+123-456-7890</p>

//                 {/* social icons */}
//                 <div>
//                   <button className="btn size-8 m-1 rounded-full bg-primary/10 p-0 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25">
//                     <FaFacebookSquare className="size-4" />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
//                     />
//                   </button>
//                   <button className="btn size-8 m-1 rounded-full bg-success/10 p-0 font-medium text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25">
//                     <FaTwitter className="size-4" />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
//                     />
//                   </button>
//                   <button className="btn size-8 m-1 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25">
//                     <FaLinkedin className="size-4" />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
//                     />
//                   </button>
//                   <button className="btn size-8 m-1 rounded-full bg-secondary/10 p-0 font-medium text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25">
//                     <FaInstagram className="size-4" />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <ul className="mt-6 space-y-1.5 font-inter font-medium">
//               <li>
//                 {/* <button onClick={showAccount} className="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent" href="#"> */}
//                 <button
//                   onClick={showAccount}
//                   className={`group flex w-full items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all ${
//                     activeTab === "account"
//                       ? "bg-primary text-white"
//                       : "hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
//                   }`}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="1.5"
//                       d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                   <span>Account</span>
//                 </button>
//               </li>
//               <li>
//                 {/* <button onClick={showSecurity} className="group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100" > */}
//                 <button
//                   onClick={showSecurity}
//                   className={`group flex w-full items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all ${
//                     activeTab === "security"
//                       ? "bg-primary text-white"
//                       : "hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
//                   }`}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="size-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="1.5"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
//                     />
//                   </svg>
//                   <span>Security</span>
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="col-span-12 lg:col-span-8">
//           <div className="card">
//             {activeTab === "account" && (
//               <div>
//                 <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
//                   <h2 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
//                     Account Settings
//                   </h2>
//                   <div className="flex justify-center space-x-2">
//                     <button className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
//                       Cancel
//                     </button>
//                     <button
//                       className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
//                       type="submit"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? "Saving..." : "Save"}
//                     </button>
//                   </div>
//                 </div>
//                 <div className="p-4 sm:p-5">
//                   <div className="flex flex-col">
//                     <span className="text-base font-medium text-slate-600 dark:text-navy-100">
//                       Avatar
//                     </span>
//                     <div className="avatar mt-1.5 size-20">
//                       <img
//                         className="mask is-squircle"
//                         src="/images/200x200.png"
//                         // src={profileImage || "/images/placeholder-avatar.png"}
//                         alt="avatar"
//                       />
//                       <div className="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white dark:bg-navy-700">
//                         <button
//                           onClick={
//                             isEditing ? saveProfileImage : triggerFileInput
//                           }
//                           // onClick={triggerFileInput}
//                           className="btn size-6 rounded-full border border-slate-200 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:border-navy-500 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="size-3.5"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <input
//                               type="file"
//                               ref={fileInputRef}
//                               accept="image/*"
//                               onChange={handleImageUpload}
//                               className="uploadInput"
//                               style={{ display: "none" }}
//                             />

//                             <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="my-7 h-px bg-slate-200 dark:bg-navy-500" />
//                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                     <label className="block">
//                       <span>User name </span>
//                       <span className="relative mt-1.5 flex">
//                         <input
//                           className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                           placeholder="User name"
//                           type="text"
//                         />
//                         <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
//                           <i className="fa-regular fa-user text-base" />
//                         </span>
//                       </span>
//                     </label>
//                     <label className="block">
//                       <span>Name </span>
//                       <span className="relative mt-1.5 flex">
//                         <input
//                           className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                           placeholder="Enter name"
//                           type="text"
//                         />
//                         <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
//                           <i className="fa-regular fa-user text-base" />
//                         </span>
//                       </span>
//                     </label>
//                     <label className="block">
//                       <span>Email Address </span>
//                       <span className="relative mt-1.5 flex">
//                         <input
//                           className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                           placeholder="Enter email address"
//                           type="text"
//                         />
//                         <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
//                           <i className="fa-regular fa-envelope text-base" />
//                         </span>
//                       </span>
//                     </label>
//                     <label className="block">
//                       <span>Phone Number</span>
//                       <span className="relative mt-1.5 flex">
//                         <input
//                           className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                           placeholder="Enter phone number"
//                           type="text"
//                         />
//                         <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
//                           <i className="fa fa-phone" />
//                         </span>
//                       </span>
//                     </label>

//                     {/* <label className="block">
//                       <span> Address </span>
//                       <span className="relative mt-1.5 w-full">
//                         <textarea
//                           rows={3}
//                           placeholder=" "
//                           className="form-textarea mt-1.5 w-full resize-none rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                         />
//                       </span>
//                     </label>
//                     <label className="block">
//                       <span>City </span>
//                       <span className="relative mt-1.5 flex">
//                         <input
//                           className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                           placeholder=""
//                           type="text"
//                         />
//                       </span>
//                     </label>
//                     <label className="block">
//                       <span>Zipcode</span>
//                       <span className="relative mt-1.5 flex">
//                         <input
//                           className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                           placeholder=""
//                           type="text"
//                         />
//                       </span>
//                     </label> */}
//                   </div>
//                   <div className="gap-4 sm:grid-cols-2">
//                     <label className="block mt-2">
//                       <span> Address </span>
//                       <span className="relative mt-1.5 flex">
//                         <textarea
//                           rows={3}
//                           placeholder=" "
//                           className="form-textarea mt-1.5 w-full resize-none rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                         />
//                       </span>
//                     </label>
//                   </div>
//                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                     <label className="block mt-2">
//                       <span>City </span>
//                       <span className="relative mt-1.5 flex">
//                         <input
//                           className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                           placeholder=""
//                           type="text"
//                         />
//                       </span>
//                     </label>
//                     <label className="block mt-2">
//                       <span>Zipcode</span>
//                       <span className="relative mt-1.5 flex">
//                         <input
//                           className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                           placeholder=""
//                           type="text"
//                         />
//                       </span>
//                     </label>
//                   </div>
//                   <div className="my-7 h-px bg-slate-200 dark:bg-navy-500" />
//                 </div>
//               </div>
//             )}
//             {activeTab === "security" && (
//               <div>
//                 <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
//                   <h2 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
//                     Change password
//                   </h2>
//                   <div className="flex justify-center space-x-2">
//                     <button className="btn min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
//                       Cancel
//                     </button>
//                     <button
//                       className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
//                       type="submit"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? "Saving..." : "Save"}
//                     </button>
//                   </div>
//                 </div>
//                 <div className="p-4 sm:p-5">
//                   <div>
//                     <form onSubmit={handlePasswordChange} className="space-y-4">
//                       <div>
//                         <label className="block ">Select Role:</label>
//                         <select
//                           name="role"
//                           className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                           value={changePasswordData.role}
//                           onChange={handleChange}
//                         >
//                           <option value="staff">Staff</option>
//                           <option value="student">Student</option>
//                         </select>
//                       </div>
//                       <div>
//                         <label className="block ">Phone Number:</label>
//                         <input
//                           type="text"
//                           name="phone"
//                           className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                           placeholder="Enter phone number"
//                           value={changePasswordData.phone}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>
//                       <div className="relative">
//                         <label className="block">New Password:</label>
//                         <input
//                           type={showPassword ? "text" : "password"}
//                           name="newPassword"
//                           className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                           placeholder="Enter new password"
//                           value={changePasswordData.newPassword}
//                           onChange={handleChange}
//                           required
//                         />
//                         <span
//                           className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 dark:text-gray-400 mt-4"
//                           onClick={togglePasswordVisibility}
//                         >
//                           {showPassword ? <IoEye /> : <IoEyeOff />}
//                         </span>
//                       </div>
//                       <div className="relative">
//                         <label className="block">Confirm New Password:</label>
//                         <input
//                           type={showConfirmPassword ? "text" : "password"}
//                           name="confirmNewPassword"
//                           // className="w-full rounded border-gray-300 p-2 dark:bg-gray-800 dark:text-gray-200"
//                           className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//                           placeholder="Confirm new password"
//                           value={changePasswordData.confirmNewPassword}
//                           onChange={handleChange}
//                           required
//                         />
//                         <span
//                           className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 dark:text-gray-400 mt-4"
//                           onClick={toggleConfirmPasswordVisibility}
//                         >
//                           {showConfirmPassword ? <IoEye /> : <IoEyeOff />}
//                         </span>
//                       </div>
//                       {message && (
//                         <p className="text-sm text-red-600">{message}</p>
//                       )}
//                     </form>
//                   </div>
//                   <div className="my-7 h-px bg-slate-200 dark:bg-navy-500" />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default AdminProfile;
// export default withAuth(AdminProfile, ["admin"]);


















"use client";
import { useAuth } from "@/app/context/AuthContext";
import withAuth from "@/hoc/withAuth";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { IoEye, IoEyeOff } from "react-icons/io5";
const AdminProfile = () => {
  const {state}=useAuth();
  const [activeTab, setActiveTab] = useState("account"); // Default to 'account'
  const [changePasswordData, setChangePasswordData] = useState({
    Password: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [userData, setUserData] = useState({
    first_name: "",
   second_name: "",
    email: "",
   mobile: "",
    address: "",
    city: "",
    zipcode: "",
    user_photo:"",
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  //  const [imagePreview, setImagePreview] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);




    const fetchProfileData = async () => {
      try {

        const response = await fetch('/api/admin/member/my_profile', {
          method: 'POST',
          headers: {
             'authorizations': state?.accessToken ?? '', 
            'api_key': '10f052463f485938d04ac7300de7ec2b',  // Make sure the API key is correct
          },
          body: JSON.stringify({ /* request body */ }),
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || 'Unknown error'}`);
        }
        
        const data = await response.json();
       console.log(data,'datttt')
        if (data.success) {
          setUserData(data.data || []);
          
        } else {
          // console.error("API error:", data.msg || "Unknown error");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    // };
    useEffect(() => {
      fetchProfileData ();
  }, [state]);



 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 
 

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
   
    // setLoading(true);
    // setError('');
    // setSuccess(false);
   
      
      const formData = new FormData();
      formData.append("first_name", userData.first_name);
      formData.append("second_name", userData.second_name);
      formData.append("email", userData.email);
      formData.append("mobile", userData.mobile);
      formData.append("address", userData.address);
      formData.append("city", userData.city);
      formData.append("zipcode", userData.zipcode);

      // if (profileImage) {
      //   formData.append("user_photo", profileImage); // Upload image
      // }
      if (userData.user_photo) {
        formData.append("user_photo", userData.user_photo); // Send the actual file
      }

      try {
        setIsSubmitting(true);
      const response = await fetch(`/api/admin/member/profile_update`, {
        method: "POST",
        headers: {
          authorizations: state?.accessToken ?? "",
          api_key: "10f052463f485938d04ac7300de7ec2b",
        },
        body: formData,
      });
  
      const data = await response.json();
      console.log(data,'update')
      if (data.success) {
      
        setSuccess(true);
      } else {
        
        setError(data.msg || 'Failed to update profile.');
        console.log('Error Messages:', data.error_msgs);
      }
    } catch (err: any) {
     
      console.error('Error during API call:', err);
      setError('Update failed!');
    } finally {
     
      setIsSubmitting(false);
    }
  };
  
 
  

  const handlePasswordInputChange = (e) => {
    const { name, value } = e.target;
    setChangePasswordData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 
 
  const handlePasswordChange = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setFormStatus({ ...formStatus, isSubmitting: true, message: "", error: "" });
    setLoading(true);
    setError('');
    setSuccess(false);
  
    if (changePasswordData.newPassword !== changePasswordData.confirmPassword) {
      // setFormStatus({ ...formStatus, error: "Passwords do not match." });
      setError('Passwords do not match.');
      return;
    }
  
    try {
      const response = await fetch("/api/admin/member/change_password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: changePasswordData.Password,
          newPassword: changePasswordData.newPassword,
        }),
      });
  
      const result = await response.json();
  
      if (!response.ok) throw new Error(result.message || "Failed to update password.");
  
      // setFormStatus({ ...formStatus, message: "Password successfully updated!" });
    } catch (err: any) {
      // setFormStatus({ ...formStatus, error: err.message });
      console.error('Error during API call:', err);
      setError('An error occurred while changing password.');
    } finally {
      // setFormStatus({ ...formStatus, isSubmitting: false });
      // setIsSubmitting('')
    }
  };

  
  const showAccount = () => setActiveTab("account");
  const showSecurity = () => setActiveTab("security");

  
  // const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
    
  //   if (file) {
  //     if (!file.type.startsWith("image/")) {
  //       setError("Only image files are allowed.");
  //       return;
  //     }
  //     if (file.size > 5 * 1024 * 1024) {
  //       setError("File size should not exceed 5MB.");
  //       return;
  //     }
  
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setProfileImage(reader.result?.toString() ?? null);
  //       setUserData((prevData) => ({
  //         ...prevData,
  //         user_photo: reader.result?.toString() ?? "",
  //       }));
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
   
    const file = event.target.files?.[0];
  
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Only image files are allowed.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError("File size should not exceed 5MB.");
        return;
      }
  
      // Update the profile image state with the file
      setProfileImage(URL.createObjectURL(file)); // Create object URL for image preview
  
      // Add the file to user data for submission
      setUserData((prevData) => ({
        ...prevData,
        user_photo: file, // Store the file, not the base64 string
      }));
    }
  };
  
  return (
    <div className=" w-full  pb-8">
      <div className="flex items-center space-x-4 py-5 lg:py-6">
        <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
          Profile
        </h2>
        <div className="hidden h-full py-1 sm:flex">
          <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
        </div>
        <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
          <li className="flex items-center space-x-2">
            <a
              className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="#"
            >
              Admin
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li> Profile</li>
        </ul>
      </div>
      <div className="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
        <div className="col-span-12 lg:col-span-4">
          <div className="card p-4 sm:p-5">
            <div className="flex items-center space-x-4">
              <div className="avatar size-14">
                <img className="rounded-full" src="/profile.png" alt="avatar" />
              </div>
              <div>
                <h3 className="text-base font-medium text-slate-700 dark:text-navy-100">
                  Admin
                </h3>

                {/* social icons */}
                <div>
                  <button className="btn size-8 m-1 rounded-full bg-primary/10 p-0 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25">
                    <FaFacebookSquare className="size-4" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </button>
                  <button className="btn size-8 m-1 rounded-full bg-success/10 p-0 font-medium text-success hover:bg-success/20 focus:bg-success/20 active:bg-success/25">
                    <FaTwitter className="size-4" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </button>
                  <button className="btn size-8 m-1 rounded-full bg-info/10 p-0 font-medium text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25">
                    <FaLinkedin className="size-4" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </button>
                  <button className="btn size-8 m-1 rounded-full bg-secondary/10 p-0 font-medium text-secondary hover:bg-secondary/20 focus:bg-secondary/20 active:bg-secondary/25">
                    <FaInstagram className="size-4" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </button>
                </div>
              </div>
            </div>

            <ul className="mt-6 space-y-1.5 font-inter font-medium">
              <li>
                {/* <button onClick={showAccount} className="flex items-center space-x-2 rounded-lg bg-primary px-4 py-2.5 tracking-wide text-white outline-none transition-all dark:bg-accent" href="#"> */}
                <button
                  onClick={showAccount}
                  className={`group flex w-full items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all ${
                    activeTab === "account"
                      ? "bg-primary text-white"
                      : "hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Account</span>
                </button>
              </li>
              <li>
                {/* <button onClick={showSecurity} className="group flex space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100" > */}
                <button
                  onClick={showSecurity}
                  className={`group flex w-full items-center space-x-2 rounded-lg px-4 py-2.5 tracking-wide outline-none transition-all ${
                    activeTab === "security"
                      ? "bg-primary text-white"
                      : "hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 text-slate-400 transition-colors group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <span>Security</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <div className="card">
            {activeTab === "account" && (
              <form onSubmit={handleUpdate}>
                <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
                  <h2 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
                    Account Settings
                  </h2>
                  <div className="flex justify-center space-x-2">

                  {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">updated successfully!</p>}
    
                    <button
                      className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                      type="submit"
                      disabled={isSubmitting}
                     
                    >
                      {isSubmitting ? "Updating..." : "Update"}
                    </button>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  {/* <div className="flex flex-col">
                    <span className="text-base font-medium text-slate-600 dark:text-navy-100">
                      Avatar
                    </span>
                    <div className="avatar mt-1.5 size-20">
                      <img
                        className="mask is-squircle"
                        // src="/images/200x200.png"
                        src={profileImage || "/profile.png"}
                        alt="avatar"
                      />
                      <div className="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white dark:bg-navy-700">
                        <button
                          className="btn size-6 rounded-full border border-slate-200 p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:border-navy-500 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <input
                              type="file"
                              // ref={fileInputRef}
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="uploadInput"
                              // style={{ display: "none" }}
                            />

                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>

                        {error && <p className="text-red-500">{error}</p>}

                      </div>
                    </div>
                  </div> */}
                  {/* <div className="my-7 h-px bg-slate-200 dark:bg-navy-500" /> */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span>First Name </span>
                      <span className="relative mt-1.5 flex">
                        <input
                          className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                          placeholder="User name"
                          type="text"
                          name="first_name"
                          value={userData.first_name}
                          onChange={handleInputChange}
                        />
                        <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                          <i className="fa-regular fa-user text-base" />
                        </span>
                      </span>
                    </label>
                    <label className="block">
                      <span>Last Name </span>
                      <span className="relative mt-1.5 flex">
                        <input
                          className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                          placeholder="Enter name"
                          type="text"
                          name="second_name"
                          value={userData.second_name}
                          onChange={handleInputChange}
                        />
                        <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                          <i className="fa-regular fa-user text-base" />
                        </span>
                      </span>
                    </label>
                    <label className="block">
                      <span>Email Address </span>
                      <span className="relative mt-1.5 flex">
                        <input
                          className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                          placeholder="Enter email address"
                          type="text"
                          name="email"
                          value={userData.email}
                          onChange={handleInputChange}
                        />
                        <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                          <i className="fa-regular fa-envelope text-base" />
                        </span>
                      </span>
                    </label>
                    <label className="block">
                      <span>Phone Number</span>
                      <span className="relative mt-1.5 flex">
                        <input
                          className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                          placeholder="Enter phone number"
                          type="text"
                          name="mobile"
                          value={userData.mobile}
                          onChange={handleInputChange}
                        />
                        <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                          <i className="fa fa-phone" />
                        </span>
                      </span>
                    </label>

                  </div>
                  <div className="gap-4 sm:grid-cols-2">
                    <label className="block mt-2">
                      <span> Address </span>
                      <span className="relative mt-1.5 flex">
                        <textarea
                          rows={3}
                          placeholder=" "
                          name="address"
                          className="form-textarea mt-1.5 w-full resize-none rounded-lg border border-slate-300 bg-transparent p-2.5 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                          value={userData.address}
                          onChange={handleInputChange}
                        />
                      </span>
                    </label>
                  </div>
                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="block mt-2">
                      <span>City </span>
                      <span className="relative mt-1.5 flex">
                        <input
                          className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                          placeholder=""
                          type="text"
                          value={userData.city}
                          onChange={handleInputChange}
                        />
                      </span>
                    </label>
                    <label className="block mt-2">
                      <span>Zipcode</span>
                      <span className="relative mt-1.5 flex">
                        <input
                          className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                          placeholder=""
                          type="text"
                          value={userData.zipcode}
                          onChange={handleInputChange}
                        />
                      </span>
                    </label>
                  </div>



<div className="mb-4">
          <label className="block mb-2 font-medium">User Photo</label>
          <div className="w-32 h-32">
            {profileImage ? (
              <img
                src={userData.user_photo}
                alt="Profile Preview"
                className="w-full h-full object-cover rounded border"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center border rounded">
               <img
                        className="mask is-squircle"
                        // src="/images/200x200.png"
                        src= "/profile.png"
                        alt="avatar"
                      />
              </div>
            )}
          </div>
        </div>

        {/* File Input for New Profile Photo */}
        <div className="mb-4">
           <label className="w-1/4 flex items-center justify-center border rounded p-2 cursor-pointer bg-blue-500 text-white">
        Select Image
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden" // Hide the default file input
        />
      </label>
        </div>


                  <div className="my-7 h-px bg-slate-200 dark:bg-navy-500" />
                </div>
              </form>
            )}
            {activeTab === "security" && (
              <form onSubmit={handlePasswordChange}>
                <div className="flex flex-col items-center space-y-4 border-b border-slate-200 p-4 dark:border-navy-500 sm:flex-row sm:justify-between sm:space-y-0 sm:px-5">
                  <h2 className="text-lg font-medium tracking-wide text-slate-700 dark:text-navy-100">
                    Change password
                  </h2>
                  <div className="flex justify-center space-x-2">
                    
                  {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">password Changed successfully!</p>}
                    <button
                      className="btn min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Saving..." : "Save"}
                    </button>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <div>
                    {/* <form onSubmit={handlePasswordChange} className="space-y-4"> */}
                      
                      <div className="relative">
                        <label className="block">New Password:</label>
                        <input
                          type={showPassword ? "text" : "password"}
                          name="newPassword"
                          className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                          placeholder="Enter new password"
                          value={changePasswordData.newPassword}
                        onChange={handlePasswordInputChange}
                          required
                        />
                        <span
                          className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 dark:text-gray-400 mt-4"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? <IoEye /> : <IoEyeOff />}
                        </span>
                      </div>
                      <div className="relative">
                        <label className="block">Confirm New Password:</label>
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          // className="w-full rounded border-gray-300 p-2 dark:bg-gray-800 dark:text-gray-200"
                          className="form-input peer w-full rounded-full border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                          placeholder="Confirm new password"
                          value={changePasswordData.confirmPassword}
                          onChange={handlePasswordInputChange}
                          required
                        />
                        <span
                          className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-500 dark:text-gray-400 mt-4"
                          onClick={toggleConfirmPasswordVisibility}
                        >
                          {showConfirmPassword ? <IoEye /> : <IoEyeOff />}
                        </span>
                      </div>
                      {message && (
                        <p className="text-sm text-red-600">{message}</p>
                      )}
                    {/* </form> */}
                  </div>
                  <div className="my-7 h-px bg-slate-200 dark:bg-navy-500" />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// export default AdminProfile;
export default withAuth(AdminProfile, ["admin"]);