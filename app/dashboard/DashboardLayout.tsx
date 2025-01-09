"use client";

import React, { Children, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

// const Sidebar = dynamic(() => import("./Sidebar"), { ssr: false });
// const Topbar = dynamic(() => import("./Topbar"), { ssr: false });

import Head from "next/head";
import { DrawerProvider, useDrawer } from "./DrawerContext";
import MobileSearchbar from "./MobileSearchbar";
import RightSidebar from "./RightSidebar";


import dynamic from "next/dynamic";



// const DashboardLayout = ({ children }) => {
export default function DashboardLayout({children,}:{children:React.ReactNode;}){
  
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useEffect(() => {
  //   const darkMode = localStorage.getItem("dark-mode");
  //   setIsDarkMode(darkMode === "dark");
  //   console.log('Dark mode toggled', !isDarkMode);
  // }, []);

 
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/images/favicon.png" />
        <link rel="stylesheet" href="/dist/css/app.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      
   
      {/* <DrawerProvider> */}
     
        <div
          id="root" 
  className={` min-h-screen flex grow bg-slate-50 dark:bg-navy-900  is-header-blur`}
        >
          {/* App Preloader */}
 <div className="app-preloader fixed z-50 grid h-full w-full place-content-center bg-slate-50 dark:bg-navy-900">
        <div className="app-preloader-inner relative inline-block size-48" />
       </div> 
          <Sidebar/>
          <Topbar/>
          <MobileSearchbar/>
          <RightSidebar/>
        
          <main className="main-content w-full px-[var(--margin-x)] pb-8">
            <div  className="flex items-center space-x-4 py-5 lg:py-6">
              {children}
            </div>
          </main>
       
        </div>
       
        
      {/* </DrawerProvider> */}
      <script src="/dist/js/app.js" defer></script>
      <script src="/dist/js/main.js" defer></script>
      </>
  );
};

// export default DashboardLayout;










// "use client";

// import React, { Children, useEffect, useState } from "react";
// import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";
// import Head from "next/head";
// import { DrawerProvider } from "./DrawerContext";
// import MobileSearchbar from "./MobileSearchbar";
// import RightSidebar from "./RightSidebar";
// import MainContent from "./MainContent";
// import Loader from "./Loader";
// import Sidebar2 from "./sidebar2/page";

// const DashboardLayout = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const darkMode = localStorage.getItem("dark-mode");
//     setIsDarkMode(darkMode === "dark");
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>Dashboard</title>
//         <link rel="icon" href="/images/favicon.png" />
//         <link rel="stylesheet" href="/dist/css/app.css" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
//           rel="stylesheet"
//         />
//       </Head>
//       {/* <DrawerProvider> */}
 
//         <div
//           id="root" className={` min-h-screen flex grow bg-slate-50 dark:bg-navy-900  is-header-blur`}
//         >
//           {/* App Preloader */}
// {/* <div className="app-preloader fixed z-50 grid h-full w-full place-content-center bg-slate-50 dark:bg-navy-900">
//         <div className="app-preloader-inner relative inline-block size-48" />
//        </div> */}
//           <Sidebar2/>
//           <Topbar />
//           <MobileSearchbar/>
//           <RightSidebar/>
//           <main className="main-content w-full px-[var(--margin-x)] pb-8">
//             <div className="flex items-center space-x-4 py-5 lg:py-6">
//               {children}
//             </div>
//           </main>
//         </div>
//       {/* </DrawerProvider> */}
//       <script src="/dist/js/app.js" defer></script>
//     </>
//   );
// };

// export default DashboardLayout;









// "use client";

// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// import Topbar from "./Topbar";
// import Head from "next/head";
// import MobileSearchbar from "./MobileSearchbar";
// import RightSidebar from "./RightSidebar";

// export default function DashboardLayout({ children }) {
//   const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Start with the sidebar hidden

//   const toggleSidebar = () => {
//     setIsSidebarVisible((prev) => !prev);
//   };

//   return (
//     <>
//       <Head>
//         <title>Dashboard</title>
//         <link rel="icon" href="/images/favicon.png" />
//         <link rel="stylesheet" href="/dist/css/app.css" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap"
//           rel="stylesheet"
//         />
//       </Head>

//       <div id="root" className={`min-h-screen flex grow bg-slate-50 dark:bg-navy-900 is-header-blur`}>
//         <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
//         <Topbar toggleSidebar={toggleSidebar} />
//         <MobileSearchbar />
//         <RightSidebar />

//         <main className="main-content w-full px-[var(--margin-x)] pb-8">
//           <div className="flex items-center space-x-4 py-5 lg:py-6">
//             {children}
//           </div>
//         </main>
//       </div>
//       <script src="/dist/js/app.js" defer></script>
//     </>
//   );
// }

