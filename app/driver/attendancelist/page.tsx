// "use client";
// import { useEffect, useState } from "react";
// import Scanner from "./Scanner";
// // import "./driver.css";

// import { MdQrCodeScanner } from "react-icons/md";
// import withAuth from "@/hoc/withAuth";

// const DriverView = () => {
//   const [students, setStudents] = useState([
//     {
//       id: 1,
//       phone: "1122309488",
//       name: "John Doe",
//       status: "Joined",
//       driver: "John",
//       totalclass: "30 Days",
//       completedClasses: 20,
//       classType: "Days",
//     },
//     {
//       id: 2,
//       phone: "122348887",
//       name: "Jane Smith",
//       status: "Not Joined",
//       driver: "Adam",
//       totalclass: "45 Hours",
//       completedClasses: 10,
//       classType: "Hours",
//     },
//     {
//       id: 3,
//       phone: "122348887",
//       name: "Sujatha",
//       status: "Not Joined",
//       driver: "Adam",
//       totalclass: "50 Days",
//       completedClasses: 10,
//       classType: "Days",
//     },
//     {
//       id: 4,
//       phone: "122348887",
//       name: "Jane Smith",
//       status: "Not Joined",
//       driver: "John",
//       totalclass: "50 Hours",
//       completedClasses: 10,
//       classType: "Hours",
//     },
//   ]);

//   const [isScannerOpen, setIsScannerOpen] = useState(false);
//   const [filterDriver, setFilterDriver] = useState("all");
 
//   // const handleScan = (data: string | null) => {
//   //   if (data) {
//   //     setStudents((prev) => [
//   //       ...prev,
//   //       {
//   //         id: prev.length + 1,
//   //         phone: "Unknown",
//   //         name: data,
//   //         status: "Joined",
//   //         driver: "New Driver",
//   //         totalclass: "0 Days",
//   //         completedClasses: 0,
//   //         classType: "Days",
//   //       },
//   //     ]);
//   //     setIsScannerOpen(false);
//   //   }
//   // };
//   //   const handleScan = (decodedText: string) => {
//   //   try {
//   //     const studentData = JSON.parse(decodedText);
//   //     const updatedStudents = [...students, studentData];
//   //     setStudents(updatedStudents);

//   //     if (typeof window !== "undefined") {
//   //       localStorage.setItem("students", JSON.stringify(updatedStudents));
//   //     }
//   //   } catch (error) {
//   //     console.error("Invalid QR code:", error);
//   //   }
//   // };
//   const handleScan = (studentData: any) => {
//     if (studentData) {
//       setStudents((prev) => {
//         const updatedStudents = [...prev, studentData];
  
//         if (typeof window !== "undefined") {
//           localStorage.setItem("students", JSON.stringify(updatedStudents));
//         }
  
//         return updatedStudents;
//       });
//     }
//   };
  


//   const handleStatusChange = (id: number, newStatus: string) => {
//     setStudents((prev) =>
//       prev.map((student) =>
//         student.id === id ? { ...student, status: newStatus } : student
//       )
//     );
//   };

//   // Filter the table data based on the selected driver
//   const filteredStudents =
//     filterDriver === "all"
//       ? students
//       : students.filter((student) => student.driver === filterDriver);

//   return (
   

//     <div className=" w-full  pb-8">
 
        
//     <div className="flex items-center space-x-4 py-5 lg:py-6">
//     <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
//     Attendance
//     </h2>
//     <div className="hidden h-full py-1 sm:flex">
//       <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
//     </div>
//     <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
//       <li className="flex items-center space-x-2">
//         <a className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent" href="#">Driver
//         </a>
//         <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </li>
//       <li>Attendance</li>
//     </ul>
//   </div>
//      {/* Driver Filter */}
//       <div className="flex justify-end mb-4 ">
//         <select
//           value={filterDriver}
//           onChange={(e) => setFilterDriver(e.target.value)}
//           className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 "
//         >
//           <option value="all">All Drivers</option>
//           {/* Dynamically populate driver options */}
//           {[...new Set(students.map((student) => student.driver))].map(
//             (driver) => (
//               <option key={driver} value={driver}>
//                 {driver}
//               </option>
//             )
//           )}
//         </select>
//       </div>
//  {/* Scanner Button */}
//     <div className="flex justify-between items-center p-4 space-x-4">
//          <button
//           onClick={() => setIsScannerOpen(true)}
//           style={{
//             display: "flex",
//             textAlign: "center",
//             justifyContent: "center",
//           }}
//         >
//           <MdQrCodeScanner style={{ fontSize: "30px", color: "#4f46e5" }} />{" "}
//           Scan here
//         </button>
//       </div>
//       {isScannerOpen && (
//         <Scanner onScan={handleScan} onClose={() => setIsScannerOpen(false)} />
//       )}
//   <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6" >
//   <div className="card px-4 pb-4 sm:px-5">
//   <div className="mt-5">
//         {/* <div className="is-scrollbar-hidden min-w-full overflow-x-auto"> */}
//         <div className="overflow-x-auto w-full">
//   <table className="is-hoverable w-full text-left">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 SL No
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Phone
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Driver Name
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Student Name
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Total Classes (Days/Hours)
//                 </th>            
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Completed Classes
//                 </th> 
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Pending Classes
//                 </th> 
//                 <th className="whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Status
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//             {filteredStudents.map((item, index) => {
//                const totalClasses = parseInt(item.totalclass);
//                            const pendingClasses = totalClasses - item.completedClasses;
//                            return (
//               <tr key={item.id} className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
             
//                 <td className="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5">
//                 {index + 1}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.phone}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.driver}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.name}
//                 </td>
//                 <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
//                 {`${totalClasses} ${item.classType}`}
//                 </td>
//                 <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
//                 {`${item.completedClasses} ${item.classType}`}
//                 </td>
//                 <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
//                 {`${pendingClasses} ${item.classType}`} 
//                 </td>
               
//                 <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
               
//                                    {item.status === "Not Joined" ? (
//                         <button
//                           className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
//                           onClick={() => handleStatusChange(item.id, "Joined")}
//                         >
//                           Drive
//                         </button>
//                       ) : (
//                         <button
//                           className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
//                           onClick={() =>
//                             handleStatusChange(item.id, "Not Joined")
//                           }
//                         >
//                           Stop
//                         </button>
//                       )}
//     </td>
//               </tr>
//    );
//   })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//   </div>
//   </div>
//   </div>
//   );
// };

// export default DriverView;
// export default withAuth(DriverView, ['admin']);














"use client";
import { useEffect, useState } from "react";
import Scanner from "./Scanner";
import { MdQrCodeScanner } from "react-icons/md";
import withAuth from "@/hoc/withAuth";


type Student = {
  id: number;
  phone: string;
  name: string;
  status: string;
  totalclass: string;
  completedClasses: number;
  classType: string;
};


const DriverView = () => {
  const [students, setStudents] = useState<Student[]>([]);

  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [filterDriver, setFilterDriver] = useState("all");

  // Load students from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedStudents = localStorage.getItem("students");
      if (storedStudents) {
        setStudents(JSON.parse(storedStudents));
      }
    }
  }, []);

  // Handle QR Scan
  // const handleScan = (decodedText: string) => {
  //   try {
  //     const studentData = JSON.parse(decodedText);

  //     if (!studentData.name || !studentData.phone || !studentData.driver) {
  //       console.error("Invalid student data format.");
  //       return;
  //     }

  //     // Add student with default values if missing
  //     const newStudent = {
  //       id: students.length + 1,
  //       phone: studentData.phone || "Unknown",
  //       name: studentData.name || "Unknown",
  //       status: studentData.status || "Not Joined",
  //       totalclass: studentData.totalclass || "0 Days",
  //       completedClasses: studentData.completedClasses || 0,
  //       classType: studentData.classType || "Days",
  //     };

  //     const updatedStudents = [...students, newStudent];
  //     setStudents(updatedStudents);

  //     if (typeof window !== "undefined") {
  //       localStorage.setItem("students", JSON.stringify(updatedStudents));
  //     }
  //   } catch (error) {
  //     console.error("Invalid QR code:", error);
  //   }
  // };

  const handleScan = (decodedText: string) => {
    try {
      const studentData = JSON.parse(decodedText);
      const updatedStudents = [...students, studentData];
      setStudents(updatedStudents);

      if (typeof window !== "undefined") {
        localStorage.setItem("students", JSON.stringify(updatedStudents));
      }
    } catch (error) {
      console.error("Invalid QR code:", error);
    }
  };




  const handleStatusChange = (id: number, newStatus: string) => {
    const updatedStudents = students.map((student) =>
      student.id === id ? { ...student, status: newStatus } : student
    );
    setStudents(updatedStudents);

    if (typeof window !== "undefined") {
      localStorage.setItem("students", JSON.stringify(updatedStudents));
    }
  };



  return (
    <div className="w-full pb-8">
     
      <div className="flex justify-between items-center p-4 space-x-4">
        <button
          onClick={() => setIsScannerOpen(true)}
          style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <MdQrCodeScanner style={{ fontSize: "30px", color: "#4f46e5" }} /> Scan here
        </button>
      </div>

      {isScannerOpen && <Scanner onScan={handleScan} onClose={() => setIsScannerOpen(false)} />}

      <div className="overflow-x-auto w-full">
        {/* <table className="is-hoverable w-full text-left">
          <thead>
            <tr>
              <th>SL No</th>
              <th>Phone</th>
              <th>Driver Name</th>
              <th>Student Name</th>
              <th>Total Classes</th>
              <th>Completed Classes</th>
              <th>Pending Classes</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((item, index) => {
              const totalClasses = parseInt(item.totalclass);
              const pendingClasses = totalClasses - item.completedClasses;
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.phone}</td>
                  <td>{item.driver}</td>
                  <td>{item.name}</td>
                  <td>{`${totalClasses} ${item.classType}`}</td>
                  <td>{`${item.completedClasses} ${item.classType}`}</td>
                  <td>{`${pendingClasses} ${item.classType}`}</td>
                  <td>
                    {item.status === "Not Joined" ? (
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
                        onClick={() => handleStatusChange(item.id, "Joined")}
                      >
                        Drive
                      </button>
                    ) : (
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                        onClick={() => handleStatusChange(item.id, "Not Joined")}
                      >
                        Stop
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table> */}




<table className="is-hoverable w-full text-left">
             <thead>
               <tr>
                 <th className="whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                 SL No
                 </th>
                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                 Phone
                 </th>
                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                 Driver Name
                 </th>
                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                 Student Name
                 </th>
                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                 Total Classes (Days/Hours)
                 </th>            
                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                 Completed Classes
                 </th> 
                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                 Pending Classes
                 </th> 
                 <th className="whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                 Status
                 </th>
               </tr>
             </thead>
             <tbody>
            {students.map((item, index) => {
               const totalClasses = parseInt(item.totalclass);
                           const pendingClasses = totalClasses - item.completedClasses;
                           return (
              <tr key={item.id} className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
             
                <td className="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5">
                {index + 1}
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {item.phone}
                </td>
                <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                {item.name}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {`${totalClasses} ${item.classType}`}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {`${item.completedClasses} ${item.classType}`}
                </td>
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                {`${pendingClasses} ${item.classType}`} 
                </td>
               
                <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
               
                                   {item.status === "Not Joined" ? (
                        <button
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
                          onClick={() => handleStatusChange(item.id, "Joined")}
                        >
                          Drive
                        </button>
                      ) : (
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                          onClick={() =>
                            handleStatusChange(item.id, "Not Joined")
                          }
                        >
                          Stop
                        </button>
                      )}
    </td>
              </tr>
   );
  })}
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default DriverView;

















// "use client";
// import { useState, useEffect } from "react";
// import { Html5QrcodeScanner } from "html5-qrcode";

// const Scanner = () => {
//   const [students, setStudents] = useState<{ name: string; phone: string }[]>([]);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const savedStudents = localStorage.getItem("students");
//       if (savedStudents) {
//         setStudents(JSON.parse(savedStudents));
//       }
//     }
//   }, []);

//   useEffect(() => {
//     // const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: { width: 250, height: 250 } });
//     const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: { width: 250, height: 250 } }, false);

//     scanner.render(
//       (decodedText) => handleScan(decodedText),
//       (error) => console.error("QR Scanner Error:", error)
//     );

//     return () => {
//       scanner.clear().then(() => console.log("Scanner stopped")).catch(console.error);
//     };
//   }, []);

//   const handleScan = (decodedText: string) => {
//     try {
//       const studentData = JSON.parse(decodedText);
//       const updatedStudents = [...students, studentData];
//       setStudents(updatedStudents);

//       if (typeof window !== "undefined") {
//         localStorage.setItem("students", JSON.stringify(updatedStudents));
//       }
//     } catch (error) {
//       console.error("Invalid QR code:", error);
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold">Scan Student QR Code</h2>
//       <div id="reader" className="border border-gray-300 p-2" />
//       <h3 className="text-lg font-bold mt-4">Scanned Students</h3>
//       <ul>
//         {students.map((student, index) => (
//           <li key={index}>{student.name} - {student.phone}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Scanner;