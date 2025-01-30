



// import React, { useEffect } from "react";
// import { Html5QrcodeScanner } from "html5-qrcode";
// import "./driver.css";

// type ScannerProps = {
//   onScan: (data: string) => void;
//   onClose: () => void;
// };

// const Scanner: React.FC<ScannerProps> = ({ onScan, onClose }) => {
//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner(
//       "reader",
//       { fps: 10, qrbox: { width: 250, height: 250 } },
//       false
//     );

//     scanner.render(
//       (decodedText) => {
//         onScan(decodedText);
//         scanner.clear().catch((err) =>
//           console.error("Error stopping scanner:", err)
//         ); // Handle potential errors while stopping the scanner
//       },
//       (error) => {
//         console.error("QR Scanner Error:", error);
//       }
//     );

//     // Ensure cleanup is synchronous
//     return () => {
//       scanner.clear().catch((err) =>
//         console.error("Error during cleanup:", err)
//       );
//     };
//   }, [onScan]);

//   return (
//     <div className="scanner-overlay">
//       <div className="scanner-modal dark:bg-navy-800">
//         <h2 className="scanner-title">Scan QR Code</h2>
//         <div id="reader" className="scanner-frame" />
//         <button
//           className="mt-6 rounded bg-primary px-4 py-2 text-white transition hover:bg-primary-focus dark:bg-accent dark:hover:bg-accent-focus"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Scanner;













// import React, { useEffect } from "react";
// import { Html5QrcodeScanner } from "html5-qrcode";

// type ScannerProps = {
//   onScan: (student: any) => void;
//   onClose: () => void;
// };

// const Scanner: React.FC<ScannerProps> = ({ onScan, onClose }) => {
//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });

//     scanner.render(
//       (decodedText) => {
//         try {
//           const student = JSON.parse(decodedText); // Convert back to object
//           onScan(student);
//         } catch (error) {
//           console.error("Invalid QR code format");
//         }
//         scanner.clear().catch(console.error);
//       },
//       (error) => console.error("QR Scanner Error:", error)
//     );

//     return () => scanner.clear().catch(console.error);
//   }, [onScan]);

//   return (
//     <div className="scanner-overlay">
//       <div className="scanner-modal">
//         <h2 className="scanner-title">Scan QR Code</h2>
//         <div id="reader" className="scanner-frame" />
//         <button onClick={onClose} className="mt-6 bg-red-500 text-white px-4 py-2 rounded">
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Scanner;













// import React, { useEffect, useState } from "react";
// import { Html5QrcodeScanner } from "html5-qrcode";

// type Student = {
//   id: string;
//   name: string;
//   mobileNo: string;
//   joiningDate?: string;
//   scannedAt: string; // Timestamp when scanned
// };

// const Scanner = () => {
//   const [scannedStudents, setScannedStudents] = useState<Student[]>([]);
//   const [isScanning, setIsScanning] = useState(true);

//   useEffect(() => {
//     if (!isScanning) return;

//     const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });

//     scanner.render(
//       (decodedText) => {
//         try {
//           const scannedData = JSON.parse(decodedText);
//           const newStudent: Student = {
//             ...scannedData,
//             scannedAt: new Date().toLocaleString(), // Add timestamp
//           };

//           // Prevent duplicate scanning
//           setScannedStudents((prev) => {
//             const isDuplicate = prev.some((s) => s.id === newStudent.id);
//             return isDuplicate ? prev : [...prev, newStudent];
//           });

//           scanner.clear().catch(console.error);
//         } catch (error) {
//           console.error("Invalid QR Code format", error);
//         }
//       },
//       (error) => console.warn("QR Scanner Error:", error)
//     );

//     return () => scanner.clear().catch(console.error);
//   }, [isScanning]);

//   return (
//     <div className="scanner-container">
//       {isScanning ? (
//         <div>
//           <h2>Scan QR Code</h2>
//           <div id="reader" className="scanner-frame" />
//           <button className="bg-red-500 text-white px-4 py-2 mt-4" onClick={() => setIsScanning(false)}>
//             Stop Scanning
//           </button>
//         </div>
//       ) : (
//         <button className="bg-blue-500 text-white px-4 py-2" onClick={() => setIsScanning(true)}>
//           Start Scanner
//         </button>
//       )}

//       {/* Scanned Students Table */}
//       {scannedStudents.length > 0 && (
//         <div className="mt-6">
//           <h3 className="text-lg font-semibold">Scanned Students</h3>
//           <table className="w-full border border-gray-300 mt-2">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border px-4 py-2">Name</th>
//                 <th className="border px-4 py-2">Mobile No.</th>
//                 <th className="border px-4 py-2">Scanned At</th>
//               </tr>
//             </thead>
//             <tbody>
//               {scannedStudents.map((student) => (
//                 <tr key={student.id}>
//                   <td className="border px-4 py-2">{student.name}</td>
//                   <td className="border px-4 py-2">{student.mobileNo}</td>
//                   <td className="border px-4 py-2">{student.scannedAt}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Scanner;












"use client";
import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Scanner = () => {
  const [students, setStudents] = useState<{ id: number; name: string; phone: string }[]>([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const res = await fetch("/api/students");
    const data = await res.json();
    setStudents(data);
  };

  const handleScan = async (decodedText: string) => {
    try {
      const studentData = JSON.parse(decodedText);
      await fetch("/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData),
      });

      fetchStudents();
    } catch (error) {
      console.error("Invalid QR code:", error);
    }
  };

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: { width: 250, height: 250 } });

    scanner.render(
      (decodedText) => handleScan(decodedText),
      (error) => console.error("QR Scanner Error:", error)
    );

    return () => scanner.clear().catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Scan Student QR Code</h2>
      <div id="reader" className="border border-gray-300 p-2" />
      <h3 className="text-lg font-bold mt-4">Scanned Students</h3>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name} - {student.phone}</li>
        ))}
      </ul>
    </div>
  );
};

export default Scanner;
