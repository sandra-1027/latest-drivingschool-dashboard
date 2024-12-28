'use client'
import withAuth from "@/hoc/withAuth";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";



// pages/driver/dashboard.js


const DriverDashboard = () => {
  const { state, clearAuthData  } = useAuth();
const router = useRouter();

  
  return (
<div>
  <h1>Driver Dashboard</h1>
  
  </div>
)};

export default withAuth(DriverDashboard, ['driver']); // Only driver can access
