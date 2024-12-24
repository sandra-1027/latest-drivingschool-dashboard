// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import jwt from 'jsonwebtoken';

// const secretKey = 'your-secret-key';

// const withAuth = (WrappedComponent, requiredRole = null) => {
//   return (props) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     const [user, setUser] = useState(null);
//     const router = useRouter();

//     useEffect(() => {
//       const token = localStorage.getItem('token');

//       if (!token) {
//         router.push('/login');
//         return;
//       }

//       try {
//         const decoded = jwt.verify(token, secretKey);

//         if (requiredRole && decoded.role !== requiredRole) {
//           router.push('/unauthorized'); // Redirect if role doesn't match
//           return;
//         }

//         setUser(decoded);
//         setIsAuthenticated(true);
//       } catch (err) {
//         localStorage.removeItem('token');
//         router.push('/login');
//       }
//     }, []);

//     if (!isAuthenticated) {
//       return <p>Loading...</p>;
//     }

//     return <WrappedComponent {...props} user={user} />;
//   };
// };

// export default withAuth;






import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/navigation';

const secretKey = 'your-secret-key';

const withAuth = (WrappedComponent, allowedRoles = []) => {
  return (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem('token');

      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const decoded = jwt.verify(token, secretKey);

        if (allowedRoles.length && !allowedRoles.includes(decoded.role)) {
          router.push('/unauthorized');
          return;
        }

        setIsAuthenticated(true);
      } catch (err) {
        localStorage.removeItem('token');
        router.push('/login');
      }
    }, []);

    if (!isAuthenticated) {
      return <p>Loading...</p>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
