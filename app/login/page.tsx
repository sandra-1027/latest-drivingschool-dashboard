
'use client'

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(""); 


  const [loading, setLoading] = useState(false); // Loading state

  const { state, setAuthData, isAuthenticated } = useAuth(); // Destructure state and setAuthData
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (token) {
      // User is already authenticated, redirect based on role
      const rolePaths = {
        admin: "/admin",
        driver: "/driver",
        student: "/student",
      };
      router.push(rolePaths[role as keyof typeof rolePaths] || "/unauthorized");
    }
  }, [router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
// console.log(username,"username")
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
       
        body: JSON.stringify({ username:username, password }),
      
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Invalid credentials.");
      }
      const data = await response.json();
      console.log(data,"data")
      const {token, user_type: role } = data?.data || {};

      if (!role || !token) {
        throw new Error("Role or token missing in the response.");
      }

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      // Store user data in context (optional)
      if (setAuthData) {
        setAuthData({
          user: data,
          accessToken: token,
          refreshToken: data.refreshToken, // Use the actual field name if available
        });
      }
      const rolePaths = {
        admin: "/admin",
        driver: "/driver",
        student: "/student",
      };

    await router.push(rolePaths[role as keyof typeof rolePaths] || "/unauthorized");
    }catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Something went wrong.");
      } else {
        setError("Something went wrong.");
      }
    }


   
    
    

    
  };

  return (
        <div>
      <link rel="stylesheet" href="/css/base.css" />
      <link rel="stylesheet" href="/dist/css/app.css" />
      <main className="grid w-full grow grid-cols-1 place-items-center">
        <div className="w-full max-w-[26rem] p-4 sm:px-5">
          <div className="text-center">
            <img
              className="mx-auto size-16"
              src="/images/app-logo.svg"
              alt="logo"
            />
            <div className="mt-4">
              <h2 className="text-2xl font-semibold text-slate-600 dark:text-navy-100">
                Welcome Back
              </h2>
              <p className="text-slate-400 dark:text-navy-300">
                Please sign in to continue
              </p>
            </div>
          </div>
          <div className="card mt-5 rounded-lg p-5 lg:p-7">
          <form onSubmit={handleLogin}>
            <label className="block">
              <span>Username:</span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 transition-colors duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
              </span>
            </label>
            <label className="mt-4 block">
              <span>Password:</span>
              <span className="relative mt-1.5 flex">
                <input
                  className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Enter Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update state
                  required
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 transition-colors duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
              </span>
            </label>
            <div className="mt-4 flex items-center justify-between space-x-2">
              <label className="inline-flex items-center space-x-2">
                <input
                  className="form-checkbox is-basic size-5 rounded border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                  type="checkbox"
                />
                <span className="line-clamp-1">Remember me</span>
              </label>
              <a
                href="#"
                className="text-xs text-slate-400 transition-colors line-clamp-1 hover:text-slate-800 focus:text-slate-800 dark:text-navy-300 dark:hover:text-navy-100 dark:focus:text-navy-100"
              >
                Forgot Password?
              </a>
            </div>
            <button   type="submit" className="btn mt-5 w-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
            {loading ? "Signing In..." : "Sign In"}
            </button>
           
            </form>
          {error && <p className="mt-3 text-red-500">{error}</p>} 
          </div>
        </div>
      </main>
    
    </div>
  );
};

export default Login;
