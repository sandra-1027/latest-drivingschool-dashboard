



// 'use client'

// import { useEffect, useState } from 'react';
// import jwt from 'jsonwebtoken'; // Ensure jwt-decode is used for decoding without the secret key
// import { useRouter } from 'next/navigation';

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
//           router.push('/login');
//           return;
//         }

//         try {
//           // Decode token (no secret key needed for decoding, just parsing)
//           const decoded = jwt.decode(token);
          
//           // Check if token has expired
//           if (!decoded || (decoded.exp && decoded.exp * 1000 < Date.now())) {
//             localStorage.removeItem('token');
//             router.push('/login');
//             return;
//           }

//           // Check if user has the required role
//           if (allowedRoles.length && !allowedRoles.includes(decoded.role)) {
//             router.push('/unauthorized');
//             return;
//           }

//           setAuthState({ isAuthenticated: true, loading: false });
//         } catch (err) {
//           console.error("Token verification failed:", err);
//           localStorage.removeItem('token');
//           router.push('/login');
//         }
//       };

//       verifyToken();
//     }, [router]);

//     if (authState.loading) {
//       return <p>Loading...</p>; // Optional: Add a loader or spinner
//     }

//     if (!authState.isAuthenticated) {
//       return null; // Ensure no component is rendered before authentication
//     }

//     return <WrappedComponent {...props} />;
//   };
// };

// export default withAuth;




'use client';

import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken'; // Ensure you use jwt-decode for frontend decoding
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

const withAuth = (WrappedComponent, allowedRoles = []) => {
  return (props) => {
    const [authState, setAuthState] = useState({
      isAuthenticated: false,
      loading: true,
    });
    const router = useRouter();

    useEffect(() => {
      const verifyToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          console.log("No token found. Redirecting to login.");
          router.push('/login');
          return;
        }
        


        try {
          // Decode token without secret key
          // const decoded = jwt.decode(token);
          const decoded = jwtDecode(token);

          // Log decoded token for debugging
          console.log("Decoded token:", decoded);

   // Check if token is expired
if (decoded && decoded.exp) {
  const expiryTime = new Date(decoded.exp * 1000); // Convert from seconds to milliseconds
  console.log("Token expires at:", expiryTime);

  if (expiryTime < new Date()) {
    console.log("Token expired. Redirecting to login.");
    localStorage.removeItem('token');
    router.push('/login');
  }
}


          // Check if user has an allowed role
          // if (allowedRoles.length && !allowedRoles.includes(decoded.role)) {
          //   console.log("User role not authorized. Redirecting to unauthorized.");
          //   router.push('/unauthorized');
          //   return;
          // }

          setAuthState({ isAuthenticated: true, loading: false });
        } catch (error) {
          console.error("Token verification failed:", error);
          localStorage.removeItem('token');
          router.push('/login');
        }
      };

      verifyToken();
    }, [router]);






    if (authState.loading) {
      return <p>Loading...</p>; // Optional: Replace with a spinner
    }

    if (!authState.isAuthenticated) {
      return null; // Prevent rendering before authentication completes
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;







// 'use client';

// import { useEffect, useState } from 'react';
// import jwtDecode from 'jwt-decode';
// import { useRouter } from 'next/navigation';

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
//           console.log('No token found. Redirecting to login.');
//           router.push('/login');
//           return;
//         }

//         try {
//           const decoded = jwtDecode(token);

//           console.log('Decoded token:', decoded);

//           if (decoded && decoded.exp) {
//             const expiryTime = new Date(decoded.exp * 1000);
//             if (expiryTime < new Date()) {
//               console.log('Token expired. Redirecting to login.');
//               localStorage.removeItem('token');
//               router.push('/login');
//               return;
//             }
//           }

//           const userRole = decoded?.role || decoded?.user_type;

//           if (!allowedRoles.length || allowedRoles.includes(userRole)) {
//             setAuthState({ isAuthenticated: true, loading: false });
//           } else {
//             console.log('User role not authorized. Redirecting.');
//             router.push('/unauthorized');
//           }
//         } catch (error) {
//           console.error('Token verification failed:', error);
//           localStorage.removeItem('token');
//           router.push('/login');
//         }
//       };

//       verifyToken();
//     }, [router, allowedRoles]);

//     if (authState.loading) {
//       return <div>Loading...</div>;
//     }

//     return authState.isAuthenticated ? <WrappedComponent {...props} /> : null;
//   };
// };

// export default withAuth;

