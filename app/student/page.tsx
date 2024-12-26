import withAuth from "@/hoc/withAuth";



const StudentDashboard = () => {
  return <h1>Student Dashboard</h1>;
};

export default withAuth(StudentDashboard, ['student']); // Only student can access


