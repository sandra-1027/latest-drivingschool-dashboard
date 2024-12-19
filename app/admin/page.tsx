import React from "react";

const page = () => {
  return (
    <div>
      <h1 style={{ fontSize: "24px", marginTop: "20px" }}> Dashboard</h1>
    </div>
  );
};

export default page;




// 'use client'
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';

// const Admin = () => {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   if (status === 'loading') return <p>Loading...</p>;

//   if (!session) {
//     router.push('/login'); // Redirect if not logged in
//     return null;
//   }

//   return <p>Welcome to the Admin Page, {session.user.username}</p>;
// };

// export default Admin;
