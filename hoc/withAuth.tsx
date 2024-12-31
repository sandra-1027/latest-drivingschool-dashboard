








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


    // if (!authState.isAuthenticated && allowedRoles.includes('guest')) {
    //   return <WrappedComponent {...props} />;
    // }


    return <WrappedComponent {...props} />;
  };
};

export default withAuth;






