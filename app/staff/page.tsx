'use client'
import withAuth from "@/hoc/withAuth";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";



// pages/driver/dashboard.js


const StaffPage = () => {
  const { state, clearAuthData  } = useAuth();
const router = useRouter();

  
  return (
<div>
  <h1>Staff Dashboard</h1>
  
  </div>
)};

export default withAuth(StaffPage, ['staff']); // Only driver can access
