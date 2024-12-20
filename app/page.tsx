import Image from "next/image";


import { DrawerProvider } from "./dashboard/DrawerContext";
import DashboardLayout from "./dashboard/DashboardLayout";


export default function Home() {
  return (
    <div >
      
  <DashboardLayout/>
 
    </div>
  );
}
