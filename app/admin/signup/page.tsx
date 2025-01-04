// import React from 'react'

// const Signup = () => {
//   return (
//     <>
//     <link rel="stylesheet" href="/css/base.css" />
//     <link rel="stylesheet" href="/dist/css/app.css" />
// <main className="grid w-full grow grid-cols-1 place-items-center">
//   <div className="w-full max-w-[26rem] p-4 sm:px-5">
//     <div className="text-center">
//       <img className="mx-auto size-16" src="images/app-logo.svg" alt="logo" />
//       <div className="mt-4">
//         <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
//           Welcome To Lineone
//         </h2>
//         <p className="text-slate-400 dark:text-navy-300">
//           Please sign up to continue
//         </p>
//       </div>
//     </div>
//     <div className="card mt-5 rounded-lg p-5 lg:p-7">
//       <label className="relative flex">
//         <input className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Choose" type="text" />
//         <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
//           <svg xmlns="http://www.w3.org/2000/svg" className="size-5 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//           </svg>
//         </span>
//       </label>
//       <label className="relative mt-4 flex">
//         <input className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Username" type="text" />
//         <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
//           <svg xmlns="http://www.w3.org/2000/svg" className="size-5 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//           </svg>
//         </span>
//       </label>
//       <label className="relative mt-4 flex">
//         <input className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Password" type="password" />
//         <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
//           <svg xmlns="http://www.w3.org/2000/svg" className="size-5 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//           </svg>
//         </span>
//       </label>
//       <label className="relative mt-4 flex">
//         <input className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Repeat Password" type="password" />
//         <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
//           <svg xmlns="http://www.w3.org/2000/svg" className="size-5 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//           </svg>
//         </span>
//       </label>
//       <div className="mt-4 flex items-center space-x-2">
//         <input className="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent" type="checkbox" />
//         <p className="line-clamp-1">
//           I agree with
//           <a href="#" className="text-slate-400 hover:underline dark:text-navy-300">
//             privacy policy
//           </a>
//         </p>
//       </div>
//       <button className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
//         Sign Up
//       </button>
//       <div className="mt-4 text-center text-xs+">
//         <p className="line-clamp-1">
//           <span>Already have an account? </span>
//           <a className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent" href="pages-login-1.html">Sign In</a>
//         </p>
//       </div>
//       <div className="my-7 flex items-center space-x-3">
//         <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500" />
//         <p className="text-tiny+ uppercase">or sign up with email</p>
//         <div className="h-px flex-1 bg-slate-200 dark:bg-navy-500" />
//       </div>

//     </div>
//   </div>
// </main>
// </>

//   )
// }

// export default Signup



// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { IoEye, IoEyeOff } from "react-icons/io5";

// const Signup = () => {
//   const [formData, setFormData] = useState<{
//     name: string;
//     email: string;
//     address: string;
//     gender: string;
//     phone: string;
//     role: string;
//     amount: string;
//     class: string;
//     type: string[]; // Corrected type
//     hours: string;
//     days: string;
//     password: string;
//     confirmPassword: string;
//   }>({
//     name: "",
//     email: "",
//     address: "",
//     gender: "",
//     phone: "",
//     role: "",
//     amount: "",
//     class: "",
//     type: [], // Initialize as an empty array
//     hours: "",
//     days: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const togglePasswordVisibility = () => setShowPassword(!showPassword);
//   const toggleConfirmPasswordVisibility = () =>
//     setShowConfirmPassword(!showConfirmPassword);

 

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;

//     if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
//       const { checked } = e.target;

//       if (name === "type") {
//         setFormData((prevData) => ({
//           ...prevData,
//           type: checked
//             ? [...prevData.type, value]
//             : prevData.type.filter((item) => item !== value),
//         }));
//       }
//     } else {
//       setFormData((prevData) => ({ ...prevData, [name]: value }));
//     }
//   };

//   const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     console.log("Form Submitted:", formData);
//   };
 

//   return (
//     <>
//       <link rel="stylesheet" href="/css/base.css" />
//       <link rel="stylesheet" href="/dist/css/app.css" />
//       <main className="grid w-full grow grid-cols-1 place-items-center">
//         <div className="w-full max-w-[26rem] p-4 sm:px-5">
//           <div className="text-center">
//             <img
//               className="mx-auto size-16"
//               src="images/app-logo.svg"
//               alt="logo"
//             />
//             <div className="mt-4">
//               <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
//                 Welcome To Lineone
//               </h2>
//               <p className="text-slate-400 dark:text-navy-300">
//                 Please sign up to continue
//               </p>
//             </div>
//           </div>
//           <div className="card mt-5 rounded-lg p-5 lg:p-7">
//             {/* Role */}
//             <label className="relative flex mt-4">
//               <select
//                 name="role"
//                 className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
//                 value={formData.role}
//                 onChange={handleChange}
//               >
//                 <option value="">Choose Role</option>
//                 <option value="driver">Driver</option>
//                 <option value="staff">Staff</option>
//                 <option value="student">Student</option>
//               </select>
//             </label>

//             {/* Name */}
//             <label className="relative flex mt-4">
//               <input
//                 className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
//                 placeholder="Name"
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//             </label>

//             {/* Email */}
//             <label className="relative flex mt-4">
//               <input
//                 className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
//                 placeholder="Email"
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </label>

//             {/* Address */}
//             <label className="relative flex mt-4">
//               <input
//                 className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
//                 placeholder="Address"
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//               />
//             </label>
//             {/* Phone */}
//             <label className="relative flex mt-4">
//               <input
//                 className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
//                 placeholder="Phone"
//                 type="text"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//             </label>


//             {/* Student-Specific Fields */}
//             {formData.role === "student" && (
//               <>
//                 {/* Class */}
//                 <label className="relative flex mt-4">
//                   <select
//                     name="class"
//                     className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
//                     value={formData.class}
//                     onChange={handleChange}
//                   >
//                     <option value="">Choose Class</option>
//                     <option value="hour">Hourly</option>
//                     <option value="days">Daily</option>
//                   </select>
//                 </label>

//                 {/* Hours or Days */}
//                 {formData.class === "hour" && (
//                   <label className="relative flex mt-4">
//                     <input
//                       type="number"
//                       name="hours"
//                       placeholder="Enter hours"
//                       className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
//                       value={formData.hours}
//                       onChange={handleChange}
//                     />
//                   </label>
//                 )}
//                 {formData.class === "days" && (
//                   <label className="relative flex mt-4">
//                     <input
//                       type="number"
//                       name="days"
//                       placeholder="Enter days"
//                       className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
//                       value={formData.days}
//                       onChange={handleChange}
//                     />
//                   </label>
//                 )}

//                 <div className="relative flex flex-col mt-4">
//                   <p className="mb-2">Type:</p>
//                   {["Two Wheeler", "Four Wheeler", "Heavy"].map((type) => (
//                     <label
//                       key={type}
//                       className="flex items-center gap-2 mb-2 text-sm"
//                     >
//                       <input
//                         type="checkbox"
//                         name="type"
//                         value={type}
//                         checked={formData.type.includes(type)}
//                         onChange={handleChange}
//                         className="h-4 w-4 border-gray-300 rounded focus:ring-2 focus:ring-primary-blue"
//                       />
//                       <span>{type}</span>
//                     </label>
//                   ))}
//                 </div>

//                 {/* Gender */}
//                 <label className="relative flex mt-4">
//                   <select
//                     name="gender"
//                     className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
//                     value={formData.gender}
//                     onChange={handleChange}
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="others">Others</option>
//                   </select>
//                 </label>

//                 {/* Amount */}
//                 <label className="relative flex mt-4">
//                   <input
//                     type="text"
//                     name="amount"
//                     placeholder="Enter Amount"
//                     className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
//                     value={formData.amount}
//                     onChange={handleChange}
//                   />
//                 </label>
//               </>
//             )}

//             {/* Password */}
//             <label className="relative flex mt-4">
//               <input
//                 className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
//                 placeholder="Password"
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               <span
//                 className="absolute right-3 flex items-center justify-center text-slate-400 cursor-pointer mt-3"
//                 onClick={togglePasswordVisibility}
//               >
//                 {showPassword ? <IoEye /> : <IoEyeOff />}
//               </span>
//             </label>

//             {/* Confirm Password */}
//             <label className="relative flex mt-4">
//               <input
//                 className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
//                 placeholder="Confirm Password"
//                 type={showConfirmPassword ? "text" : "password"}
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//               />
//               <span
//                 className="absolute right-3 flex items-center justify-center text-slate-400 cursor-pointer mt-3"
//                 onClick={toggleConfirmPasswordVisibility}
//               >
//                 {showConfirmPassword ? <IoEye /> : <IoEyeOff />}
//               </span>
//             </label>

//             {/* Submit Button */}
//             <button
//               className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus"
//               onClick={handleSubmit}
//             >
//               Sign Up
//             </button>
//           </div>
//           <div className="mt-4 text-center text-xs+">
//             <p className="line-clamp-1">
//               <span>Already have an account? </span>
//               <Link
//                 href="/login"
//                 className="text-primary hover:text-primary-focus"
//               >
//                 Sign In
//               </Link>
//             </p>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// };

// export default Signup;







"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    address: string;
    gender: string;
    phone_no: string;
    role: string;
    amount: string;
    class: string;
    type: string[]; // Corrected type
    no_of_days:string;
    password: string;
    confirmPassword: string;
    save:string;
  }>({
    name: "",
    email: "",
    address: "",
    gender: "",
    phone_no: "",
    role: "",
    amount: "",
    class: "",
    type: [], // Initialize as an empty array
    no_of_days:"",
    password: "",
    confirmPassword: "",
    save:"submit",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const router = useRouter();
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

 

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      const { checked } = e.target;

      if (name === "type") {
        setFormData((prevData) => ({
          ...prevData,
          type: checked
            ? [...prevData.type, value]
            : prevData.type.filter((item) => item !== value),
        }));
      }
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  
    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
    try {
      // Show a loading state if needed
      console.log("Submitting signup data...", formData);
  
      // Send the form data to the backend
      const response = await fetch("/api/home/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          address: formData.address,
          gender: formData.gender,
          phone_no: formData.phone_no,
          role: formData.role,
          amount: formData.amount,
          class_days: formData.class,
          class_type: formData.type,
           no_of_days:formData.no_of_days,
          password: formData.password,
          confirm_password:formData.confirmPassword,
          save:"submit"
        }),
      });
  

      // Check if the request was successful
      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Signup failed");
        return;
      }
  
      



      // Handle success response
      const data = await response.json();
      console.log("Signup successful:", data);
  
      // Redirect to a login page or dashboard
      alert("Signup successful! Redirecting to login...");
      // window.location.href = "/login"; 
      router.push("/login")
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Something went wrong during signup. Please try again.");
    }
  };
  


  return (
    <>
      <link rel="stylesheet" href="/css/base.css" />
      <link rel="stylesheet" href="/dist/css/app.css" />
      <main className="grid w-full grow grid-cols-1 place-items-center">
        <div className="w-full max-w-[26rem] p-4 sm:px-5">
      
          <div className="text-center">
            <img
              className="mx-auto size-16"
              src="/images/app-logo.svg"
              alt="logo"
            />
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                Welcome To Lineone
              </h2>
              {/* <p className="text-slate-400 dark:text-navy-300">
                Please sign up to continue
             
              </p> */}
            </div>
          </div>
          <div className="card mt-5 rounded-lg p-5 lg:p-7">
            {/* Role */}
            <label className="relative flex mt-4">
              <select
                name="role"
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Choose Role</option>
                <option value="driver">Driver</option>
                <option value="staff">Staff</option>
                <option value="student">Student</option>
              </select>
            </label>

            {/* Name */}
            <label className="relative flex mt-4">
              <input
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
                placeholder="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            {/* Email */}
            <label className="relative flex mt-4">
              <input
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            {/* Address */}
            <label className="relative flex mt-4">
              <input
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
                placeholder="Address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </label>
            {/* Phone */}
            <label className="relative flex mt-4">
              <input
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
                placeholder="Phone"
                type="text"
                name="phone_no"
                value={formData.phone_no}
                onChange={handleChange}
              />
            </label>


            {/* Student-Specific Fields */}
            {formData.role === "student" && (
              <>
                {/* Class */}
                <label className="relative flex mt-4">
                  <select
                    name="class"
                    className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
                    value={formData.class}
                    onChange={handleChange}
                  >
                    <option value="">Choose Class</option>
                    <option value="hours">Hourly</option>
                    <option value="days">Daily</option>
                  </select>
                </label>

                {/* Hours or Days */}
                {formData.class === "hours" && (
                  <label className="relative flex mt-4">
                    <input
                      type="number"
                      name="no_of_days"
                      placeholder="Enter hours"
                      className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
                      value={formData.no_of_days}
                      onChange={handleChange}
                    />
                  </label>
                )}
                {formData.class === "days" && (
                  <label className="relative flex mt-4">
                    <input
                      type="number"
                      name="no_of_days"
                      placeholder="Enter days"
                      className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
                      value={formData.no_of_days}
                      onChange={handleChange}
                    />
                  </label>
                )}

                <div className="relative flex flex-col mt-4">
                  <p className="mb-2">Type:</p>
                  {["Two Wheeler", "Four Wheeler", "Heavy"].map((type) => (
                    <label
                      key={type}
                      className="flex items-center gap-2 mb-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        name="type"
                        value={type}
                        checked={formData.type.includes(type)}
                        onChange={handleChange}
                        className="h-4 w-4 border-gray-300 rounded focus:ring-2 focus:ring-primary-blue"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>

                {/* Gender */}
                <label className="relative flex mt-4">
                  <select
                    name="gender"
                    className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </label>

                {/* Amount */}
                <label className="relative flex mt-4">
                  <input
                    type="text"
                    name="amount"
                    placeholder="Enter Amount"
                    className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
                    value={formData.amount}
                    onChange={handleChange}
                  />
                </label>
              </>
            )}

            {/* Password */}
            <label className="relative flex mt-4">
              <input
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <span
                className="absolute right-3 flex items-center justify-center text-slate-400 cursor-pointer mt-3"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <IoEye /> : <IoEyeOff />}
              </span>
            </label>

            {/* Confirm Password */}
            <label className="relative flex mt-4">
              <input
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70"
                placeholder="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <span
                className="absolute right-3 flex items-center justify-center text-slate-400 cursor-pointer mt-3"
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <IoEye /> : <IoEyeOff />}
              </span>
            </label>

            {/* Submit Button */}
            <button
              className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus"
              type="submit"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </div>
          <div className="mt-4 text-center text-xs+">
            <p className="line-clamp-1">
              <span>Already have an account? </span>
              <Link
                href="/login"
                className="text-primary hover:text-primary-focus"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;