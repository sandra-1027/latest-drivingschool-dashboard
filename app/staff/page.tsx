
import withAuth from "@/hoc/withAuth";



// pages/driver/dashboard.js


const DriverDashboard = () => {
  return <h1>Driver Dashboard</h1>;
};

export default withAuth(DriverDashboard, ['driver']); // Only driver can access
