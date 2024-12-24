// app/staff/page.tsx
// import { getSession } from 'next-auth/react';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// export default function StaffPage() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const checkSession = async () => {
//       const session = await getSession();
//       if (!session || session.user.role !== 'staff') {
//         router.push('/login');
//       } else {
//         setIsAuthenticated(true);
//       }
//     };
//     checkSession();
//   }, [router]);

//   if (!isAuthenticated) {
//     return <div>Loading...</div>;
//   }

//   return <h1>Welcome to the Staff Dashboard</h1>;
// }



// pages/driver/dashboard.js
import withAuth from '../../hoc/withAuth';

const DriverDashboard = () => {
  return <h1>Driver Dashboard</h1>;
};

export default withAuth(DriverDashboard, ['driver']); // Only driver can access
