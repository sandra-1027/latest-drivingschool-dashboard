



// 'use client';

// import { useEffect, useState } from 'react';
// import jwt from 'jsonwebtoken'; // Ensure you use jwt-decode for frontend decoding
// import { useRouter } from 'next/navigation';
// import { jwtDecode } from 'jwt-decode';

// const withAuth = (WrappedComponent, allowedRoles = []) => {
//   return (props) => {
//     const [authState, setAuthState] = useState({
//       isAuthenticated: false,
//       loading: true,
//     });
//     const router = useRouter();

//     useEffect(() => {
//       const verifyToken = async () => {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           console.log("No token found. Redirecting to login.");
//           router.push('/login');
//           return;
//         }
//         try {
//           // Decode token without secret key
//           // const decoded = jwt.decode(token);
//           const decoded = jwtDecode(token);

//           // Log decoded token for debugging
//           console.log("Decoded token:", decoded);

//    // Check if token is expired
// if (decoded && decoded.exp) {
//   const expiryTime = new Date(decoded.exp * 1000); // Convert from seconds to milliseconds
//   console.log("Token expires at:", expiryTime);

//   if (expiryTime < new Date()) {
//     console.log("Token expired. Redirecting to login.");
//     localStorage.removeItem('token');
//     router.push('/login');
//   }
// }
//           // Check if user has an allowed role
//           // if (allowedRoles.length && !allowedRoles.includes(decoded.role)) {
//           //   console.log("User role not authorized. Redirecting to unauthorized.");
//           //   router.push('/unauthorized');
//           //   return;
//           // }

//           setAuthState({ isAuthenticated: true, loading: false });
//         } catch (error) {
//           console.error("Token verification failed:", error);
//           localStorage.removeItem('token');
//           router.push('/login');
//         }
//       };

//       verifyToken();
//     }, [router]);
//     if (authState.loading) {
//       return <p>Loading...</p>; // Optional: Replace with a spinner
//     }

//     if (!authState.isAuthenticated) {
//       return null; // Prevent rendering before authentication completes
//     }


//     // if (!authState.isAuthenticated && allowedRoles.includes('guest')) {
//     //   return <WrappedComponent {...props} />;
//     // }


//     return <WrappedComponent {...props} />;
//   };
// };

// export default withAuth;







// 'use client';

// import { useEffect, useState } from 'react';
// import {jwtDecode} from 'jwt-decode'; // Ensure you install this package
// import { useRouter } from 'next/navigation';

// const withAuth = (WrappedComponent, allowedRoles = []) => {
//   return (props) => {
//     const [authState, setAuthState] = useState({
//       isAuthenticated: false,
//       loading: true,
//     });
//     const router = useRouter();

//     useEffect(() => {
//       const verifyToken = () => {
//         const token = localStorage.getItem('token');

//         if (!token) {
//           // If no token and the page allows guests, allow access
//           if (allowedRoles.includes("guest")) {
//             setAuthState({ isAuthenticated: false, loading: false });
//             //router.push('/admin');
//             return;
//           } else {
//             router.push('/login');
//             return;
//           }
//         }

//         try {
//           const decoded = jwtDecode(token);

//           // Check for token expiration
//           if (decoded.exp && new Date(decoded.exp * 1000) < new Date()) {
//             localStorage.removeItem('token');
//             router.push('/login');
//             return;
//           }
//           console.log("Decoded token:", decoded);

//           // Role-based redirection for guest pages (login)
//           // if (allowedRoles.includes("guest")) {
//           //   if (decoded.user_type === "admin") {
//           //     router.push('/admin');
//           //   } else if (decoded.user_type === "driver") {
//           //     router.push('/driver');
//           //   } else if (decoded.user_type === "student") {
//           //     router.push('/student');
//           //   }
//           //   return;
//           // }
// if (allowedRoles.includes("guest") && decoded.user_type) {
//   router.push(`/${decoded.user_type}`);
//   return;
// }




//           // Role-based access for other pages
//           // if (!allowedRoles.includes(decoded.user_type)) {
//           //   router.push('/unauthorized');
//           //   return;
//           // }

//           setAuthState({ isAuthenticated: true, loading: false });
//         } catch (error) {
//           console.error("Token validation failed:", error);
//           localStorage.removeItem('token');
//           router.push('/login');
//         }
//       };

//       verifyToken();
//     }, [router, allowedRoles]);

//     // if (authState.loading) {
//     //   return <p>Loading...</p>;
//     // }
//     if (authState.loading) {
//        return <p>Loading...</p>;
     
//     }
//     // Prevent rendering login page for authenticated users
//     if (authState.isAuthenticated && allowedRoles.includes("guest")) {
//       return null;
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// export default withAuth;









// withAuth.js (HOC)
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import {jwtDecode} from 'jwt-decode';
// // Define the allowed roles explicitly
// type Role = 'admin' | 'driver' | 'student';

// // Enhance type safety for WrappedComponent
// type WithAuthProps = {
//   allowedRoles?: Role[];
// };
// // const withAuth = (WrappedComponent, allowedRoles = []) => {
// //   return (props) => {
// //     const [authState, setAuthState] = useState({ isAuthenticated: false, loading: true });
// //     const router = useRouter();


// const withAuth = <P extends object>(
//   WrappedComponent: React.ComponentType<P>,
//   allowedRoles: Role[] = []
// ): React.FC<P> => {
//   return (props: P) => {
//     const [authState, setAuthState] = useState({ isAuthenticated: false, loading: true });
//     const router = useRouter();
//     useEffect(() => {
//       const verifyToken = () => {
//         const token = localStorage.getItem('token');
//         if (!token ) {
//           router.push('/login');
//           return;
//         }

//         try {
//           const decoded = jwtDecode(token);
//           // Check expiration
//           if (decoded.exp * 1000 < Date.now()) {
//             localStorage.removeItem('token');
//             router.push('/login');
//             return;
//           }

          
//           const role = localStorage.getItem('role');
//           if (allowedRoles.length && !allowedRoles.includes(role)) {
//             router.push('/unauthorized');
//             return;
//           }
//           setAuthState({ isAuthenticated: true, loading: false });
//         } catch (error) {
//           localStorage.removeItem('token');
//           localStorage.removeItem('role');
//           router.push('/login');
//         }
//       };

//       verifyToken();
//     }, [router]);

//     if (authState.loading) {
//       return <div>Loading...</div>;
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// export default withAuth;






// withAuth.tsx (HOC)
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

// Define the allowed roles explicitly
type Role = 'admin' | 'driver' | 'student';

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  allowedRoles: Role[] = []
): React.FC<P> => {
  return (props: P) => {
    const [authState, setAuthState] = useState({ isAuthenticated: false, loading: true });
    const router = useRouter();
    
    useEffect(() => {
      const verifyToken = () => {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login');
          return;
        }

        try {
          const decoded: { exp?: number } = jwtDecode(token); // Ensure `exp` is optional
          // Check expiration if `exp` exists
          if (decoded.exp && decoded.exp * 1000 < Date.now()) {
            localStorage.removeItem('token');
            router.push('/login');
            return;
          }

          const role = localStorage.getItem('role');
          if (allowedRoles.length && role && !allowedRoles.includes(role as Role)) {
            router.push('/unauthorized');
            return;
          }
          setAuthState({ isAuthenticated: true, loading: false });
        } catch (error) {
          localStorage.removeItem('token');
          localStorage.removeItem('role');
          router.push('/login');
        }
      };

      verifyToken();
    }, [router]);

    if (authState.loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
