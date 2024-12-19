import React from 'react'

const Loader = () => {
  return (
    <>
         {/* App Preloader */}
 <div className="app-preloader fixed z-50 grid h-full w-full place-content-center bg-slate-50 dark:bg-navy-900">
        <div className="app-preloader-inner relative inline-block size-48" />
       </div>  
    </>
  )
}

export default Loader
