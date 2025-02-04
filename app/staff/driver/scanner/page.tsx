

// "use client";
// import { useState, useEffect } from "react";
// import { Html5QrcodeScanner } from "html5-qrcode";

// const Scanner = () => {
//   const [students, setStudents] = useState<{ id: number; name: string; phone: string }[]>([]);

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     const res = await fetch("/api/students");
//     const data = await res.json();
//     setStudents(data);
//   };

//   const handleScan = async (decodedText: string) => {
//     try {
//       const studentData = JSON.parse(decodedText);
//       await fetch("/api/students", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(studentData),
//       });

//       fetchStudents();
//     } catch (error) {
//       console.error("Invalid QR code:", error);
//     }
//   };

//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: { width: 250, height: 250 } });

//     scanner.render(
//       (decodedText) => handleScan(decodedText),
//       (error) => console.error("QR Scanner Error:", error)
//     );

//     return () => scanner.clear().catch(console.error);
//   }, []);

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold">Scan Student QR Code</h2>
//       <div id="reader" className="border border-gray-300 p-2" />
//       <h3 className="text-lg font-bold mt-4">Scanned Students</h3>
//       <ul>
//         {students.map((student) => (
//           <li key={student.id}>{student.name} - {student.phone}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Scanner;




















"use client";
import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Scanner = () => {
  const [students, setStudents] = useState<{ name: string; phone: string }[]>([]);

  // Load students from localStorage AFTER the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedStudents = localStorage.getItem("students");
      if (savedStudents) {
        setStudents(JSON.parse(savedStudents));
      }
    }
  }, []);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: { width: 250, height: 250 } });

    scanner.render(
      (decodedText) => handleScan(decodedText),
      (error) => console.error("QR Scanner Error:", error)
    );

    return () => scanner.clear().catch(console.error);
  }, []);

  const handleScan = (decodedText: string) => {
    try {
      const studentData = JSON.parse(decodedText);
      const updatedStudents = [...students, studentData];
      setStudents(updatedStudents);

      // Save to localStorage (only on the client)
      if (typeof window !== "undefined") {
        localStorage.setItem("students", JSON.stringify(updatedStudents));
      }
    } catch (error) {
      console.error("Invalid QR code:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Scan Student QR Code</h2>
      <div id="reader" className="border border-gray-300 p-2" />
      <h3 className="text-lg font-bold mt-4">Scanned Students</h3>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.name} - {student.phone}</li>
        ))}
      </ul>
    </div>
  );
};

export default Scanner;


