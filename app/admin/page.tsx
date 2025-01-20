// 'use client'
// import React from "react";
// import { useAuth } from "../context/AuthContext";

// const page = () => {
//   // const {state, setAuthData } = useAuth(); 
//   // const user = state?.user;
//   return (
//     <div>
//       <h1 style={{ fontSize: "24px", marginTop: "20px" }}> Dashboard</h1>
// {/* {user.username} */}
//     </div>
//   );
// };

// export default page;







// 'use client'

// import { getSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// export default function AdminPage() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const checkSession = async () => {
//       const session = await getSession();
//       if (!session || session.user.role !== 'admin') {
//         router.push('/login'); // Redirect to login if not admin
//       } else {
//         setIsAuthenticated(true);
//       }
//     };
//     checkSession();
//   }, [router]);

//   if (!isAuthenticated) {
//     return <div>Loading...</div>;
//   }

//   return <h1>Welcome to the Admin Dashboard</h1>;
// }


'use client'
import withAuth from "@/hoc/withAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";



const AdminPage = () => {
 
  
  return <div style={{ fontSize: "24px", marginTop: "20px" }}>Welcome to the Admin Dashboard</div>;
};

// Wrap the AdminPage component with withAuth, specifying "admin" role
export default withAuth(AdminPage, ['admin']);


