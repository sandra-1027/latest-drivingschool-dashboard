'use client'
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Welcome to Dashboard, {session?.user?.email}!</h1>
    </div>
  );
};

export default Dashboard;
