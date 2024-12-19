import React from 'react'
import MainSidebar from './MainSidebar'
import SidebarPanel from './SidebarPanel'
import MinimizedSidebar from './MinimizedSidebar'

const Sidebar2 = () => {
  return (
    <>
    <link rel="stylesheet" href="/css/base.css" />
    <link rel="stylesheet" href="/dist/css/app.css" />
    
   <div className="sidebar print:hidden">
<MainSidebar/>
     <SidebarPanel/>
{/* <MinimizedSidebar/> */}
    </div>
    </>
  )
}

export default Sidebar2
