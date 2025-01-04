
'use client'
import React, { useEffect, useState } from "react";

import Link from "next/link";

import { useRouter } from "next/navigation";

import { useDrawer } from "@/app/dashboard/DrawerContext";
import { useAuth } from "@/app/context/AuthContext";



const Sidebar = () => {
  const { state, clearAuthData  } = useAuth();
  const user = state?.user;
 
  const { isDrawerVisible } = useDrawer();
 
  // console.log(user,"get logined user")
    const router = useRouter();
 

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   clearAuthData(); // Clear the context state as well
  //   router.push('/login');
  // };

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      localStorage.removeItem('token');
      clearAuthData();
      router.push('/login');
    }
  };


  return (
    <>
      <link rel="stylesheet" href="/css/base.css" />
      <link rel="stylesheet" href="/dist/css/app.css" />
      <div className="sidebar print:hidden">
        {/* Main Sidebar */}
        <div className="main-sidebar">
          <div className="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800">
            {/* Application Logo */}
            <div className="flex pt-4">
              <a href="/">
                <img
                  className="size-11 transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
                  src="/images/app-logo.svg"
                  alt="logo"
                />
              </a>
            </div>
            {/* Main Sections Links */}
            <div className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6">
              {/* Dashobards */}
              <a
                href="/student"
                data-tooltip="Dashboards"
                data-placement="right"
              className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"

                
              
>


                <svg
                  className="size-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillOpacity=".3"
                    d="M5 14.059c0-1.01 0-1.514.222-1.945.221-.43.632-.724 1.453-1.31l4.163-2.974c.56-.4.842-.601 1.162-.601.32 0 .601.2 1.162.601l4.163 2.974c.821.586 1.232.88 1.453 1.31.222.43.222.935.222 1.945V19c0 .943 0 1.414-.293 1.707C18.414 21 17.943 21 17 21H7c-.943 0-1.414 0-1.707-.293C5 20.414 5 19.943 5 19v-4.94Z"
                  />
                  <path
                    fill="currentColor"
                    d="M3 12.387c0 .267 0 .4.084.441.084.041.19-.04.4-.204l7.288-5.669c.59-.459.885-.688 1.228-.688.343 0 .638.23 1.228.688l7.288 5.669c.21.163.316.245.4.204.084-.04.084-.174.084-.441v-.409c0-.48 0-.72-.102-.928-.101-.208-.291-.355-.67-.65l-7-5.445c-.59-.459-.885-.688-1.228-.688-.343 0-.638.23-1.228.688l-7 5.445c-.379.295-.569.442-.67.65-.102.208-.102.448-.102.928v.409Z"
                  />
                  <path
                    fill="currentColor"
                    d="M11.5 15.5h1A1.5 1.5 0 0 1 14 17v3.5h-4V17a1.5 1.5 0 0 1 1.5-1.5Z"
                  />
                  <path
                    fill="currentColor"
                    d="M17.5 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z"
                  />
                </svg>
              </a>
              {/* Apps */}
              <a
                href="/admin/student/list"
                data-tooltip="Users"
                data-placement="right"
               className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90">
                <svg
                  className="size-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 8H19V16C19 17.8856 19 18.8284 18.4142 19.4142C17.8284 20 16.8856 20 15 20H9C7.11438 20 6.17157 20 5.58579 19.4142C5 18.8284 5 17.8856 5 16V8Z"
                    fill="currentColor"
                    fillOpacity="0.3"
                  />
                  <path
                    d="M12 8L11.7608 5.84709C11.6123 4.51089 10.4672 3.5 9.12282 3.5V3.5C7.68381 3.5 6.5 4.66655 6.5 6.10555V6.10555C6.5 6.97673 6.93539 7.79026 7.66025 8.2735L9.5 9.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 8L12.2392 5.84709C12.3877 4.51089 13.5328 3.5 14.8772 3.5V3.5C16.3162 3.5 17.5 4.66655 17.5 6.10555V6.10555C17.5 6.97673 17.0646 7.79026 16.3397 8.2735L14.5 9.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                  />
                  <rect
                    x={4}
                    y={8}
                    width={16}
                    height={3}
                    rx={1}
                    fill="currentColor"
                  />
                  <path
                    d="M12 11V15"
                    stroke="currentColor"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              {/* Pages And Layouts */}
              <a
                href="/admin/driver/attendancelist"
                // className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
                data-tooltip="Staffs"
                data-placement="right"
              >
                <svg
                  className="size-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.85714 3H4.14286C3.51167 3 3 3.51167 3 4.14286V9.85714C3 10.4883 3.51167 11 4.14286 11H9.85714C10.4883 11 11 10.4883 11 9.85714V4.14286C11 3.51167 10.4883 3 9.85714 3Z"
                    fill="currentColor"
                  />
                  <path
                    d="M9.85714 12.8999H4.14286C3.51167 12.8999 3 13.4116 3 14.0428V19.757C3 20.3882 3.51167 20.8999 4.14286 20.8999H9.85714C10.4883 20.8999 11 20.3882 11 19.757V14.0428C11 13.4116 10.4883 12.8999 9.85714 12.8999Z"
                    fill="currentColor"
                    fillOpacity="0.3"
                  />
                  <path
                    d="M19.757 3H14.0428C13.4116 3 12.8999 3.51167 12.8999 4.14286V9.85714C12.8999 10.4883 13.4116 11 14.0428 11H19.757C20.3882 11 20.8999 10.4883 20.8999 9.85714V4.14286C20.8999 3.51167 20.3882 3 19.757 3Z"
                    fill="currentColor"
                    fillOpacity="0.3"
                  />
                  <path
                    d="M19.757 12.8999H14.0428C13.4116 12.8999 12.8999 13.4116 12.8999 14.0428V19.757C12.8999 20.3882 13.4116 20.8999 14.0428 20.8999H19.757C20.3882 20.8999 20.8999 20.3882 20.8999 19.757V14.0428C20.8999 13.4116 20.3882 12.8999 19.757 12.8999Z"
                    fill="currentColor"
                    fillOpacity="0.3"
                  />
                </svg>
              </a>
              {/* Forms */}
              <a
                href="/admin/profile"
                data-tooltip="Profile"
                data-placement="right"
               
              className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
              >
                <svg
  className="size-7"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle
    cx="12"
    cy="8"
    r="4"
    fill="currentColor"
  />
  <path
    d="M12 14c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4Z"
    fill="currentColor"
  />
</svg>

              </a>
              {/* Components */}
             
              <button 
              onClick={handleLogout}
                data-tooltip="Logout"
                data-placement="right"
               
                className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
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
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
              </button>
             
            </div>
            {/* Bottom Links */}
            <div className="flex flex-col items-center space-y-3 py-3">
              {/* Settings */}
              {/* <a href="forms-layout-5.html" className="flex size-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
          <svg className="size-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillOpacity="0.3" fill="currentColor" d="M2 12.947v-1.771c0-1.047.85-1.913 1.899-1.913 1.81 0 2.549-1.288 1.64-2.868a1.919 1.919 0 0 1 .699-2.607l1.729-.996c.79-.474 1.81-.192 2.279.603l.11.192c.9 1.58 2.379 1.58 3.288 0l.11-.192c.47-.795 1.49-1.077 2.279-.603l1.73.996a1.92 1.92 0 0 1 .699 2.607c-.91 1.58-.17 2.868 1.639 2.868 1.04 0 1.899.856 1.899 1.912v1.772c0 1.047-.85 1.912-1.9 1.912-1.808 0-2.548 1.288-1.638 2.869.52.915.21 2.083-.7 2.606l-1.729.997c-.79.473-1.81.191-2.279-.604l-.11-.191c-.9-1.58-2.379-1.58-3.288 0l-.11.19c-.47.796-1.49 1.078-2.279.605l-1.73-.997a1.919 1.919 0 0 1-.699-2.606c.91-1.58.17-2.869-1.639-2.869A1.911 1.911 0 0 1 2 12.947Z" />
            <path fill="currentColor" d="M11.995 15.332c1.794 0 3.248-1.464 3.248-3.27 0-1.807-1.454-3.272-3.248-3.272-1.794 0-3.248 1.465-3.248 3.271 0 1.807 1.454 3.271 3.248 3.271Z" />
          </svg>
        </a> */}
              {/* Profile */}
              <div id="profile-wrapper" className="flex">
                <button id="profile-ref" className="avatar size-12">
                  <img
                    className="rounded-full"
                    src="/images/200x200.png"
                    alt="avatar"
                  />
                  <span className="absolute right-0 size-3.5 rounded-full border-2 border-white bg-success dark:border-navy-700" />
                </button>
                <div id="profile-box" className="popper-root fixed">
                  <div className="popper-box w-64 rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-600 dark:bg-navy-700">
                    <div className="flex items-center space-x-4 rounded-t-lg bg-slate-100 py-5 px-4 dark:bg-navy-800">
                      <div className="avatar size-14">
                        <img
                          className="rounded-full"
                          src="/images/200x200.png"
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                        >
                          Driving School Pro
                        </a>
                        <p className="text-xs text-slate-400 dark:text-navy-300">
                        Admin
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col pt-2 pb-5">
                      <a
                        href="/admin/profile"
                        className="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                      >
                        <div className="flex size-8 items-center justify-center rounded-lg bg-warning text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h2 className="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light">
                            Profile
                          </h2>
                          <div className="text-xs text-slate-400 line-clamp-1 dark:text-navy-300">
                            Your profile setting
                          </div>
                        </div>
                      </a>
                     
                      <div className="mt-3 px-4">
                        <button 
                        onClick={handleLogout}
                        className="btn h-9 w-full space-x-2 bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
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
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {isDrawerVisible && (
          <div className="sidebar-panel">
            <div className="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750">
              {/* Sidebar Panel Header */}
              <div className="flex h-18 w-full items-center justify-between pl-4 pr-1">
                <p className="text-base tracking-wider text-slate-800 dark:text-navy-100">
                  Student
                </p>
                <button className="sidebar-close btn size-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              </div>
              {/* Sidebar Panel Body */}
              <div
                className="nav-wrapper h-[calc(100%-4.5rem)] overflow-x-hidden pb-6"
                data-simplebar
              >
                <ul className="flex flex-1 flex-col px-4 font-inter">
                  <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
                
                    <ul className="ac-panel">
                      
                      <li>
                        <a
                          href="/student"
                          className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                          data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                          data-active-class="font-medium text-primary dark:text-accent-light"
                        >
                          <div className="flex items-center space-x-2">
                            <div className="size-1.5 rounded-full border border-current opacity-40" />
                            <span>Profile</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
                
                    <ul className="ac-panel">
                      <li>
                        <a
                          href="/student"
                          className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                          data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                          data-active-class="font-medium text-primary dark:text-accent-light"
                        >
                          <div className="flex items-center space-x-2">
                            <div className="size-1.5 rounded-full border border-current opacity-40" />
                            <span>Student</span>
                          </div>
                        </a>
                      </li>
                     
                    
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;




