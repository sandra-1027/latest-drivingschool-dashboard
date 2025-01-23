// components/Loader.tsx
// const Loader: React.FC = () => {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <div className="spinner">
//           <style jsx>{`
//             .spinner {
//               border: 4px solid rgba(0, 0, 0, 0.1);
//               border-left-color: #4caf50;
//               border-radius: 50%;
//               width: 40px;
//               height: 40px;
//               animation: spin 1s linear infinite;
//             }
//             @keyframes spin {
//               0% {
//                 transform: rotate(0deg);
//               }
//               100% {
//                 transform: rotate(360deg);
//               }
//             }
//           `}</style>
//         </div>
//       </div>
//     );
//   };
  
//   export default Loader;
  











// components/Loader.tsx
"use client";

import React from "react";
import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 grid place-content-center bg-slate-50 dark:bg-navy-900">
      <ClipLoader color="#36d7b7" size={50} />
    </div>
  );
}
