






import { createContext, useContext, useReducer, useEffect } from "react";

const AuthContext = createContext(null);

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const authReducer = (state, action) => {
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

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Restore auth data from localStorage
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

  const setAuthData = (data) => {
    dispatch({
      type: "SET_USER",
      payload: {
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      },
    });

    // Save data to localStorage
    localStorage.setItem(
      "authData",
      JSON.stringify({
        user: data.user,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      })
    );
//     console.log("Setting token in localStorage:", data.accessToken);
// localStorage.setItem('token', data.accessToken);


  };

  const clearAuthData = () => {
    dispatch({ type: "CLEAR_USER" });
    localStorage.removeItem("authData"); // Clear from localStorage
  };

  return (
    <AuthContext.Provider value={{ state, setAuthData, clearAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
















