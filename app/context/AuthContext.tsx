

// 'use client'
// import { createContext, useContext, useReducer, useEffect } from "react";

// const AuthContext = createContext(null);

// const initialState = {
//   user: null,
//   accessToken: null,
//   refreshToken: null,
// };

// const authReducer = (state, action) => {
//   switch (action.type) {
//     case "SET_USER":
//       return {
//         ...state,
//         user: action.payload.user,
//         accessToken: action.payload.accessToken,
//         refreshToken: action.payload.refreshToken,
//       };
//     case "CLEAR_USER":
//       return initialState;
//     default:
//       return state;
//   }
// };

// export const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   // Restore auth data from localStorage
//   useEffect(() => {
//     const storedAuthData = localStorage.getItem("authData");
//     if (storedAuthData) {
//       const parsedAuthData = JSON.parse(storedAuthData);
//       dispatch({
//         type: "SET_USER",
//         payload: {
//           user: parsedAuthData.user,
//           accessToken: parsedAuthData.accessToken,
//           refreshToken: parsedAuthData.refreshToken,
//         },
//       });
//     }
//   }, []);

//   const setAuthData = (data) => {
//     dispatch({
//       type: "SET_USER",
//       payload: {
//         user: data.user,
//         accessToken: data.accessToken,
//         refreshToken: data.refreshToken,
//       },
//     });

//     // Save data to localStorage
//     localStorage.setItem(
//       "authData",
//       JSON.stringify({
//         user: data.user,
//         accessToken: data.accessToken,
//         refreshToken: data.refreshToken,
//       })
//     );
// //     console.log("Setting token in localStorage:", data.accessToken);
// // localStorage.setItem('token', data.accessToken);


//   };

//   const clearAuthData = () => {
//     dispatch({ type: "CLEAR_USER" });
//     localStorage.removeItem("authData"); // Clear from localStorage
//   };
//   const isAuthenticated = () => {
//     const token = localStorage.getItem("token");
//     return !!token; // Returns true if token exists
//   };
//   return (
//     <AuthContext.Provider value={{ state, setAuthData, clearAuthData ,isAuthenticated}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);







// 'use client'
// import { createContext, useContext, useReducer, useEffect } from "react";

// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// interface AuthState {
//   user: User | null;
//   accessToken: string | null;
//   refreshToken: string | null;
// }

// interface AuthAction {
//   type: "SET_USER" | "CLEAR_USER";
//   payload?: {
//     user: User;
//     accessToken: string;
//     refreshToken: string;
//   };
// }

// const initialState: AuthState = {
//   user: null,
//   accessToken: null,
//   refreshToken: null,
// };

// const authReducer = (state: AuthState, action: AuthAction): AuthState => {
//   switch (action.type) {
//     case "SET_USER":
//       return {
//         ...state,
//         user: action.payload?.user ?? null,
//         accessToken: action.payload?.accessToken ?? null,
//         refreshToken: action.payload?.refreshToken ?? null,
//       };
//     case "CLEAR_USER":
//       return initialState;
//     default:
//       return state;
//   }
// };

// const AuthContext = createContext<{
//   state: AuthState;
//   setAuthData: (data: { user: User; accessToken: string; refreshToken: string }) => void;
//   clearAuthData: () => void;
//   isAuthenticated: () => boolean;
// } | null>(null);

// export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   useEffect(() => {
//     const storedAuthData = localStorage.getItem("authData");
//     if (storedAuthData) {
//       const parsedAuthData = JSON.parse(storedAuthData);
//       dispatch({
//         type: "SET_USER",
//         payload: {
//           user: parsedAuthData.user,
//           accessToken: parsedAuthData.accessToken,
//           refreshToken: parsedAuthData.refreshToken,
//         },
//       });
//     }
//   }, []);

//   const setAuthData = (data: { user: User; accessToken: string; refreshToken: string }) => {
//     dispatch({
//       type: "SET_USER",
//       payload: {
//         user: data.user,
//         accessToken: data.accessToken,
//         refreshToken: data.refreshToken,
//       },
//     });

//     localStorage.setItem(
//       "authData",
//       JSON.stringify({
//         user: data.user,
//         accessToken: data.accessToken,
//         refreshToken: data.refreshToken,
//       })
//     );
//   };

//   const clearAuthData = () => {
//     dispatch({ type: "CLEAR_USER" });
//     localStorage.removeItem("authData");
//   };

//   const isAuthenticated = () => {
//     const token = localStorage.getItem("token");
//     return !!token;
//   };

//   return (
//     <AuthContext.Provider value={{ state, setAuthData, clearAuthData, isAuthenticated }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);








import { createContext, useContext, useReducer, useEffect, ReactNode } from "react";

type User = { name: string; email: string }; // Adjust as per your actual user object structure

interface AuthState {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
}

interface AuthContextProps {
  state: AuthState;
  setAuthData: (data: { user: User; accessToken: string; refreshToken: string }) => void;
  clearAuthData: () => void;
  isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authReducer = (state: AuthState, action: any): AuthState => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    case "CLEAR_USER":
      return initialState;
    default:
      return state;
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const storedAuthData = localStorage.getItem("authData");
    if (storedAuthData) {
      const parsedAuthData = JSON.parse(storedAuthData);
      dispatch({
        type: "SET_USER",
        payload: {
          user: parsedAuthData.user,
          accessToken: parsedAuthData.accessToken,
          refreshToken: parsedAuthData.refreshToken,
        },
      });
    }
  }, []);

  const setAuthData = (data: { user: User; accessToken: string; refreshToken: string }) => {
    dispatch({
      type: "SET_USER",
      payload: data,
    });
    localStorage.setItem("authData", JSON.stringify(data));
  };

  const clearAuthData = () => {
    dispatch({ type: "CLEAR_USER" });
    localStorage.removeItem("authData");
  };

  const isAuthenticated = () => {
    return !!localStorage.getItem("token");
  };

  return (
    <AuthContext.Provider value={{ state, setAuthData, clearAuthData, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};




