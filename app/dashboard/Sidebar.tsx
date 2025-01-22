


'use client';
import React, { useState } from "react";
import { useDrawer } from "./DrawerContext";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const { state, clearAuthData } = useAuth();
  const user = state?.user;
  const [activeTab, setActiveTab] = useState("dashboard");
  const { isDrawerVisible, toggleDrawer } = useDrawer();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpens, setIsDropdownOpens] = useState(false);

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // New state for hiding the entire sidebar

  const handleToggle = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  // const handleSidebarVisibility = () => {
  //   setIsSidebarVisible((prev) => !prev); // Toggle sidebar visibility
  // };
  const handleSidebarVisibility = () => {
    setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility without 'prev'
  };
  const router = useRouter();
  const showDashboard = () => setActiveTab("dashboard");
  const showUser = () => setActiveTab("user");
  const showStaff = () => setActiveTab("staff");
  const showProfile = () => setActiveTab("profile");

  const handleLogout = () => {
    localStorage.removeItem("token");
    clearAuthData(); // Clear the context state as well
    router.push("/login");
  };
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleDropdownToggles = () => {
    setIsDropdownOpens(!isDropdownOpens);
  };
  return (
    <>
      <link rel="stylesheet" href="/css/base.css" />
      <link rel="stylesheet" href="/dist/css/app.css" />
      {isSidebarVisible && ( 
      
        <div className="sidebar print:hidden">
          {/* Main Sidebar */}
          <div className="main-sidebar">
          <div className="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800">
  {/* Application Logo */}
  <div className="flex pt-4">
    <Link href="/">
      <img
        className="size-11 transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
        // src="/images/app-logo.svg"
        src="/logo(1).png"
        alt="logo"
      />
    </Link>
  </div>
  {/* Main Sections Links */}

{/*largeScren*/}
  <div className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6 hidden sm:flex">
    {/* Dashobards */}
   
    <Link
      href="/admin"
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
      {/* </Link> */}
    </Link>
   {/* site info*/}
    <Link
  href="/admin/settings/site-info"
  data-tooltip="Site Information"
  data-placement="right"
  className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
>

  <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="size-6"
>
  <circle cx="12" cy="12" r="10"></circle>
  <path d="M2 12h20"></path>
  <path d="M12 2a15.3 15.3 0 0 1 0 20"></path>
  <path d="M12 2a15.3 15.3 0 0 0 0 20"></path>
</svg>

</Link>
 {/* Admission */}
 <Link
  href="/admin/signup/admission"
  data-tooltip="Admission"
  data-placement="right"
  className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="size-6"
>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
  <polyline points="14 2 14 8 20 8"></polyline>
  <line x1="16" y1="13" x2="8" y2="13"></line>
  <line x1="16" y1="17" x2="8" y2="17"></line>
  <line x1="10" y1="9" x2="8" y2="9"></line>
</svg>


</Link>
 {/* Master */}
 <Link
  href="/admin/settings/service-management"
  data-tooltip="Master"
  data-placement="right"
  className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
>
<svg
   className="size-7"
 
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
 
>
    <path
      fillOpacity="0.25"
      d="M21.0001 16.05V18.75C21.0001 20.1 20.1001 21 18.7501 21H6.6001C6.9691 21 7.3471 20.946 7.6981 20.829C7.7971 20.793 7.89609 20.757 7.99509 20.712C8.31009 20.586 8.61611 20.406 8.88611 20.172C8.96711 20.109 9.05711 20.028 9.13811 19.947L9.17409 19.911L15.2941 13.8H18.7501C20.1001 13.8 21.0001 14.7 21.0001 16.05Z"
      fill="currentColor"
    ></path>
    <path
      fillOpacity="0.5"
      d="M17.7324 11.361L15.2934 13.8L9.17334 19.9111C9.80333 19.2631 10.1993 18.372 10.1993 17.4V8.70601L12.6384 6.26701C13.5924 5.31301 14.8704 5.31301 15.8244 6.26701L17.7324 8.17501C18.6864 9.12901 18.6864 10.407 17.7324 11.361Z"
      fill="currentColor"
    ></path>
    <path
      d="M7.95 3H5.25C3.9 3 3 3.9 3 5.25V17.4C3 17.643 3.02699 17.886 3.07199 18.12C3.09899 18.237 3.12599 18.354 3.16199 18.471C3.20699 18.606 3.252 18.741 3.306 18.867C3.315 18.876 3.31501 18.885 3.31501 18.885C3.32401 18.885 3.32401 18.885 3.31501 18.894C3.44101 19.146 3.585 19.389 3.756 19.614C3.855 19.731 3.95401 19.839 4.05301 19.947C4.15201 20.055 4.26 20.145 4.377 20.235L4.38601 20.244C4.61101 20.415 4.854 20.559 5.106 20.685C5.115 20.676 5.11501 20.676 5.11501 20.685C5.25001 20.748 5.385 20.793 5.529 20.838C5.646 20.874 5.76301 20.901 5.88001 20.928C6.11401 20.973 6.357 21 6.6 21C6.969 21 7.347 20.946 7.698 20.829C7.797 20.793 7.89599 20.757 7.99499 20.712C8.30999 20.586 8.61601 20.406 8.88601 20.172C8.96701 20.109 9.05701 20.028 9.13801 19.947L9.17399 19.911C9.80399 19.263 10.2 18.372 10.2 17.4V5.25C10.2 3.9 9.3 3 7.95 3ZM6.6 18.75C5.853 18.75 5.25 18.147 5.25 17.4C5.25 16.653 5.853 16.05 6.6 16.05C7.347 16.05 7.95 16.653 7.95 17.4C7.95 18.147 7.347 18.75 6.6 18.75Z"
      fill="currentColor"
    ></path>
  </svg>
</Link>
{/* Accounts */}
<Link
      href="/admin/accounts/daily-accounts"
      data-tooltip="Accounts"
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

    </Link>
    {/* Reports*/}
    <Link
      href="/admin/report/payment-history"
      className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
      data-tooltip="Report"
      data-placement="right">
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
    </Link>
    
    {/* Signup */}
    <Link
      href="/admin/signup"
      data-tooltip="signup"
      data-placement="right"
      // className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
    className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
    >
      <svg
        className="size-7"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillOpacity="0.5"
          d="M14.2498 16C14.2498 17.5487 13.576 18.9487 12.4998 19.9025C11.5723 20.7425 10.3473 21.25 8.99976 21.25C6.10351 21.25 3.74976 18.8962 3.74976 16C3.74976 13.585 5.39476 11.5375 7.61726 10.9337C8.22101 12.4562 9.51601 13.6287 11.1173 14.0662C11.5548 14.1887 12.0185 14.25 12.4998 14.25C12.981 14.25 13.4448 14.1887 13.8823 14.0662C14.1185 14.6612 14.2498 15.3175 14.2498 16Z"
          fill="currentColor"
        />
        <path
          d="M17.75 9.00012C17.75 9.68262 17.6187 10.3389 17.3825 10.9339C16.7787 12.4564 15.4837 13.6289 13.8825 14.0664C13.445 14.1889 12.9813 14.2501 12.5 14.2501C12.0187 14.2501 11.555 14.1889 11.1175 14.0664C9.51625 13.6289 8.22125 12.4564 7.6175 10.9339C7.38125 10.3389 7.25 9.68262 7.25 9.00012C7.25 6.10387 9.60375 3.75012 12.5 3.75012C15.3962 3.75012 17.75 6.10387 17.75 9.00012Z"
          fill="currentColor"
        />
        <path
          fillOpacity="0.3"
          d="M21.25 16C21.25 18.8962 18.8962 21.25 16 21.25C14.6525 21.25 13.4275 20.7425 12.5 19.9025C13.5763 18.9487 14.25 17.5487 14.25 16C14.25 15.3175 14.1187 14.6612 13.8825 14.0662C15.4837 13.6287 16.7787 12.4562 17.3825 10.9337C19.605 11.5375 21.25 13.585 21.25 16Z"
          fill="currentColor"
        />
      </svg>
    </Link>
    {/* Logout */}
    <button 
    onClick={handleLogout}
      data-tooltip="Logout"
      data-placement="right"
      // className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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
  {  /*small screen*/}
  <div className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6 xl:hidden">
    {/* Dashobards */}
    <Link
      href="/admin"
      data-tooltip="Dashboards"
      data-placement="right"
    className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
    >
      <svg
       onClick={toggleDrawer}
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
      {/* </Link> */}
    </Link>
   
 
      {/* site info*/}
      <Link
  href="/admin/settings/site-info"
  data-tooltip="Site Information"
  data-placement="right"
  className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
>

  <svg
  
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="size-6"
>
  <circle cx="12" cy="12" r="10"></circle>
  <path d="M2 12h20"></path>
  <path d="M12 2a15.3 15.3 0 0 1 0 20"></path>
  <path d="M12 2a15.3 15.3 0 0 0 0 20"></path>
</svg>

</Link>
   
 {/* Admission */}
 <Link
  href="/admin/signup/admission"
  data-tooltip="Admission"
  data-placement="right"
  className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
>
<svg

  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="size-6"
>
  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
  <polyline points="14 2 14 8 20 8"></polyline>
  <line x1="16" y1="13" x2="8" y2="13"></line>
  <line x1="16" y1="17" x2="8" y2="17"></line>
  <line x1="10" y1="9" x2="8" y2="9"></line>
</svg>


</Link>
 {/* Master */}
 <Link
  href="/admin/settings/service-management"
  data-tooltip="Master"
  data-placement="right"
  className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
>
<svg
   className="size-7"
   onClick={toggleDrawer}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
 
>
    <path
      fillOpacity="0.25"
      d="M21.0001 16.05V18.75C21.0001 20.1 20.1001 21 18.7501 21H6.6001C6.9691 21 7.3471 20.946 7.6981 20.829C7.7971 20.793 7.89609 20.757 7.99509 20.712C8.31009 20.586 8.61611 20.406 8.88611 20.172C8.96711 20.109 9.05711 20.028 9.13811 19.947L9.17409 19.911L15.2941 13.8H18.7501C20.1001 13.8 21.0001 14.7 21.0001 16.05Z"
      fill="currentColor"
    ></path>
    <path
      fillOpacity="0.5"
      d="M17.7324 11.361L15.2934 13.8L9.17334 19.9111C9.80333 19.2631 10.1993 18.372 10.1993 17.4V8.70601L12.6384 6.26701C13.5924 5.31301 14.8704 5.31301 15.8244 6.26701L17.7324 8.17501C18.6864 9.12901 18.6864 10.407 17.7324 11.361Z"
      fill="currentColor"
    ></path>
    <path
      d="M7.95 3H5.25C3.9 3 3 3.9 3 5.25V17.4C3 17.643 3.02699 17.886 3.07199 18.12C3.09899 18.237 3.12599 18.354 3.16199 18.471C3.20699 18.606 3.252 18.741 3.306 18.867C3.315 18.876 3.31501 18.885 3.31501 18.885C3.32401 18.885 3.32401 18.885 3.31501 18.894C3.44101 19.146 3.585 19.389 3.756 19.614C3.855 19.731 3.95401 19.839 4.05301 19.947C4.15201 20.055 4.26 20.145 4.377 20.235L4.38601 20.244C4.61101 20.415 4.854 20.559 5.106 20.685C5.115 20.676 5.11501 20.676 5.11501 20.685C5.25001 20.748 5.385 20.793 5.529 20.838C5.646 20.874 5.76301 20.901 5.88001 20.928C6.11401 20.973 6.357 21 6.6 21C6.969 21 7.347 20.946 7.698 20.829C7.797 20.793 7.89599 20.757 7.99499 20.712C8.30999 20.586 8.61601 20.406 8.88601 20.172C8.96701 20.109 9.05701 20.028 9.13801 19.947L9.17399 19.911C9.80399 19.263 10.2 18.372 10.2 17.4V5.25C10.2 3.9 9.3 3 7.95 3ZM6.6 18.75C5.853 18.75 5.25 18.147 5.25 17.4C5.25 16.653 5.853 16.05 6.6 16.05C7.347 16.05 7.95 16.653 7.95 17.4C7.95 18.147 7.347 18.75 6.6 18.75Z"
      fill="currentColor"
    ></path>
  </svg>
</Link>
{/* Accounts */}
<Link
      href="/admin/accounts/daily-accounts"
      data-tooltip="Accounts"
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

    </Link>
    {/* Reports*/}
    <Link
      href="/admin/report/payment-history"
      className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
      data-tooltip="Report"
      data-placement="right">

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
    </Link>
    {/* Components */}
    <Link
      href="/admin/signup"
      data-tooltip="signup"
      data-placement="right"
      // className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
    className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:bg-navy-600 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
    >
      <svg
   
        className="size-7"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillOpacity="0.5"
          d="M14.2498 16C14.2498 17.5487 13.576 18.9487 12.4998 19.9025C11.5723 20.7425 10.3473 21.25 8.99976 21.25C6.10351 21.25 3.74976 18.8962 3.74976 16C3.74976 13.585 5.39476 11.5375 7.61726 10.9337C8.22101 12.4562 9.51601 13.6287 11.1173 14.0662C11.5548 14.1887 12.0185 14.25 12.4998 14.25C12.981 14.25 13.4448 14.1887 13.8823 14.0662C14.1185 14.6612 14.2498 15.3175 14.2498 16Z"
          fill="currentColor"
        />
        <path
          d="M17.75 9.00012C17.75 9.68262 17.6187 10.3389 17.3825 10.9339C16.7787 12.4564 15.4837 13.6289 13.8825 14.0664C13.445 14.1889 12.9813 14.2501 12.5 14.2501C12.0187 14.2501 11.555 14.1889 11.1175 14.0664C9.51625 13.6289 8.22125 12.4564 7.6175 10.9339C7.38125 10.3389 7.25 9.68262 7.25 9.00012C7.25 6.10387 9.60375 3.75012 12.5 3.75012C15.3962 3.75012 17.75 6.10387 17.75 9.00012Z"
          fill="currentColor"
        />
        <path
          fillOpacity="0.3"
          d="M21.25 16C21.25 18.8962 18.8962 21.25 16 21.25C14.6525 21.25 13.4275 20.7425 12.5 19.9025C13.5763 18.9487 14.25 17.5487 14.25 16C14.25 15.3175 14.1187 14.6612 13.8825 14.0662C15.4837 13.6287 16.7787 12.4562 17.3825 10.9337C19.605 11.5375 21.25 13.585 21.25 16Z"
          fill="currentColor"
        />
      </svg>
    </Link>
    <button 
    onClick={handleLogout}
      data-tooltip="Logout"
      data-placement="right"
      // className="tooltip-main-sidebar flex size-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
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

   {/* Profile */}
  {/* <div className="flex flex-col items-center space-y-3 py-3">
   
    <div id="profile-wrapper" className="flex">
      <button id="profile-ref" className="avatar size-12">
        <img
          className="rounded-full"
          src="/profile.png"
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
            <Link
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
            </Link>
           
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
  </div> */}
</div>
          </div>
          {isDrawerVisible && (
            <div className="sidebar-panel">
              <div className="flex h-full grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-navy-750">
              {/* Sidebar Panel Header */}
              <div className="flex h-18 w-full items-center justify-between pl-4 pr-1">
                <p className="text-base tracking-wider text-slate-800 dark:text-navy-100">
                    Admin
                </p>
                <button 
               onClick={toggleDrawer} 
                // onClick={handleSidebarVisibility}
               //onClick="$store.global.isSidebarExpanded = false" 
                // className="sidebar-close btn size-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden">
                className="btn size-7 rounded-full p-0 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden">
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
                className="nav-wrapper h-[calc(100%-4.5rem)] overflow-x-hidden pb-6 hidden sm:flex"
                data-simplebar
              >
                <ul className="flex flex-1 flex-col px-4 font-inter">
                  <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
                 
          
                   
                  
                  </li>
                  <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
                
                    <ul className="ac-panel">
                     
                     
                      <li>
                        <Link
                          href="/admin/signup/admission"
                          className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                          data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                          data-active-class="font-medium text-primary dark:text-accent-light"
                        >
                         
                          <div className="flex items-center space-x-2">
                            <div className="size-1.5 rounded-full border border-current opacity-40" />
                            <span>Admission</span>
                          </div>
                         
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/admin/accounts/daily-accounts"
                          className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                          data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                          data-active-class="font-medium text-primary dark:text-accent-light"
                        >
                         
                          <div className="flex items-center space-x-2">
                            <div className="size-1.5 rounded-full border border-current opacity-40" />
                            <span>Accounts</span>
                          </div>
                         
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/admin/settings/site-info"
                          className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                          data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                          data-active-class="font-medium text-primary dark:text-accent-light"
                        >
                         
                          <div className="flex items-center space-x-2">
                            <div className="size-1.5 rounded-full border border-current opacity-40" />
                            <span>Site Information</span>
                          </div>
                         
                        </Link>
                      </li>


  <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
      <button
        onClick={handleDropdownToggle} // Toggle the dropdown on button click
        className="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-600 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
      >
        <span>Master</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`size-4 text-slate-400 transition-transform ease-in-out ${isDropdownOpen ? 'rotate-90' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Toggle visibility of dropdown list */}
      <ul className={`ac-panel ${isDropdownOpen ? 'block' : 'hidden'}`}>
        <li>
          <Link href="/admin/settings/service-management" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4">
            <div className="flex items-center space-x-2">
              <div className="size-1.5 rounded-full border border-current opacity-40" />
              <span>Service</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/settings/driver-management" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4">
            <div className="flex items-center space-x-2">
              <div className="size-1.5 rounded-full border border-current opacity-40" />
              <span>Driver</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/settings/vehicle-management" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4">
            <div className="flex items-center space-x-2">
              <div className="size-1.5 rounded-full border border-current opacity-40" />
              <span>Vehicle</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/settings/branch-management" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4">
            <div className="flex items-center space-x-2">
              <div className="size-1.5 rounded-full border border-current opacity-40" />
              <span>Branch</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/settings/staff-management" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4">
            <div className="flex items-center space-x-2">
              <div className="size-1.5 rounded-full border border-current opacity-40" />
              <span>Staff</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/accounts/license-cost" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4">
            <div className="flex items-center space-x-2">
              <div className="size-1.5 rounded-full border border-current opacity-40" />
              <span>License Cost</span>
            </div>
          </Link>
        </li>
        <li>
          <Link href="/admin/accounts/license-class" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4">
            <div className="flex items-center space-x-2">
              <div className="size-1.5 rounded-full border border-current opacity-40" />
              <span>License Class</span>
            </div>
          </Link>
        </li>
      </ul>
    </li>

 <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
      <button
        onClick={handleDropdownToggles} // Toggle the dropdown on button click
        className="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-600 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
      >
         <span>Reports</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`size-4 text-slate-400 transition-transform ease-in-out ${isDropdownOpens ? 'rotate-90' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Toggle visibility of dropdown list */}
      <ul className={`ac-panel ${isDropdownOpens ? 'block' : 'hidden'}`}>
        <li>
          <Link href="/admin/report/payment-history" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4">
            <div className="flex items-center space-x-2">
              <div className="size-1.5 rounded-full border border-current opacity-40" />
              <span>Payment History</span>
            </div>
          </Link>
        </li>
      
      </ul>
    </li>

                    </ul>
                  </li>
                </ul>
              </div>


              <div
                className="nav-wrapper h-[calc(100%-4.5rem)] overflow-x-hidden pb-6 xl:hidden"
                data-simplebar
              >
                <ul className="flex flex-1 flex-col px-4 font-inter">
                  <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
                 
          
                    <ul className="ac-panel">
                      <li>
                        <Link
                          href="/admin/signup"
                          className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                          data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                          data-active-class="font-medium text-primary dark:text-accent-light"
                        >
                        
                          <div className="flex items-center space-x-2">
                            <div className="size-1.5 rounded-full border border-current opacity-40" />
                            <span onClick={toggleDrawer}>Signup</span>
                          </div>
                          
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/admin/profile"
                          className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                          data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                          data-active-class="font-medium text-primary dark:text-accent-light"
                        >
                          <div className="flex items-center space-x-2">
                            <div className="size-1.5 rounded-full border border-current opacity-40" />
                            <span  onClick={toggleDrawer}>Profile</span>
                          </div>
                          
                        </Link>
                      </li>
                    </ul>
                  
                  </li>
                  <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
                
                    <ul className="ac-panel">
                      <li>
                        <Link
                          href="/admin/student/list"
                          className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                          data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                          data-active-class="font-medium text-primary dark:text-accent-light"
                        >
                          
                          <div className="flex items-center space-x-2">
                            <div className="size-1.5 rounded-full border border-current opacity-40" />
                            <span  onClick={toggleDrawer}>Student</span>
                          </div>
                          
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/admin/driver/attendancelist"
                          className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                          data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                          data-active-class="font-medium text-primary dark:text-accent-light"
                        >
                         
                          <div className="flex items-center space-x-2">
                            <div className="size-1.5 rounded-full border border-current opacity-40" />
                            <span  onClick={toggleDrawer}>Driver</span>
                          </div>
                         
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/admin/accounts/daily-accounts"
                          className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                          data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                          data-active-class="font-medium text-primary dark:text-accent-light"
                        >
                         
                          <div className="flex items-center space-x-2">
                            <div className="size-1.5 rounded-full border border-current opacity-40" />
                            <span  onClick={toggleDrawer}>Accounts</span>
                          </div>
                         
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/admin/settings/site-info"
                          className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4"
                          data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50"
                          data-active-class="font-medium text-primary dark:text-accent-light"
                        >
                         
                          <div className="flex items-center space-x-2">
                            <div className="size-1.5 rounded-full border border-current opacity-40" />
                            <span  onClick={toggleDrawer}>Site Information</span>
                          </div>
                         
                        </Link>
                      </li>

           
  <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
    <button className="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-600 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50">
      <span>Settings</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-slate-400 transition-transform ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
    <ul className="ac-panel">
      <li>
        <Link href="/admin/settings/service-management" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
          <div className="flex items-center space-x-2">
            <div className="size-1.5 rounded-full border border-current opacity-40" />
            <span  onClick={toggleDrawer}>Service management</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/admin/settings/driver-management" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
          <div className="flex items-center space-x-2">
            <div className="size-1.5 rounded-full border border-current opacity-40" />
            <span  onClick={toggleDrawer}>Driver management</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/admin/settings/vehicle-management" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
          <div className="flex items-center space-x-2">
            <div className="size-1.5 rounded-full border border-current opacity-40" />
            <span  onClick={toggleDrawer}>Vehicle management</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/admin/settings/branch-management" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
          <div className="flex items-center space-x-2">
            <div className="size-1.5 rounded-full border border-current opacity-40" />
            <span onClick={toggleDrawer}>Branch management</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/admin/settings/staff-management" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
          <div className="flex items-center space-x-2">
            <div className="size-1.5 rounded-full border border-current opacity-40" />
            <span onClick={toggleDrawer}>Staff management</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href="/admin/accounts/license-cost" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
          <div className="flex items-center space-x-2">
            <div className="size-1.5 rounded-full border border-current opacity-40" />
            <span onClick={toggleDrawer}>License cost</span>
          </div>
        </Link>
      </li>
    </ul>
  </li>

  <li className="ac nav-parent [&.is-active_svg]:rotate-90 [&.is-active_.ac-trigger]:font-semibold [&.is-active_.ac-trigger]:text-slate-800 dark:[&.is-active_.ac-trigger]:text-navy-50">
    <button className="ac-trigger flex w-full items-center justify-between py-2 text-xs+ tracking-wide text-slate-600 outline-none transition-[color,padding-left] duration-300 ease-in-out hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50">
      <span>Reports</span>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-slate-400 transition-transform ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
    <ul className="ac-panel">
      <li>
        <Link href="/admin/report/payment-history" className="nav-link flex items-center justify-between p-2 text-xs+ tracking-wide outline-none transition-[color,padding-left] duration-300 ease-in-out hover:pl-4" data-default-class="text-slate-600 hover:text-slate-800 dark:text-navy-200 dark:hover:text-navy-50" data-active-class="font-medium text-primary dark:text-accent-light">
          <div className="flex items-center space-x-2">
            <div className="size-1.5 rounded-full border border-current opacity-40" />
            <span onClick={toggleDrawer}>Payment History</span>
          </div>
        </Link>
      </li>
     
    </ul>
  </li>


                    </ul>
                  </li>
                </ul>
              </div>
            </div>
              
            </div>
            
          )}
        </div>
      )}
    </>
  );
};

export default Sidebar;
