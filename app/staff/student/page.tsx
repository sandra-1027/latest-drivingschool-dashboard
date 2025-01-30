

// "use client";

// import { useState, useRef } from "react";
// import QRCode from "qrcode";


// import { MdDateRange, MdEdit } from "react-icons/md";
// import { FaGraduationCap } from "react-icons/fa";


// const StudentProfile = () => {
//   const [profileImage, setProfileImage] = useState<string | null>(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [studentDetails, setStudentDetails] = useState({
//     name: "John Doe",
//     mobileNo: "1234567890",
//     joiningDate: "2023-09-01",
//     completedClasses: 15,
//   });
//   const [isQrModalOpen, setIsQrModalOpen] = useState(false);
//   const qrCodeRef = useRef<HTMLCanvasElement | null>(null);

//   const gender = "male";
//   const defaultAvatar = gender === "male" ? "/male.webp" : "/female.webp";

//   const fileInputRef = useRef<HTMLInputElement | null>(null);

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setProfileImage(reader.result?.toString() ?? null);
//       setIsEditing(true);
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const triggerFileInput = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const toggleQrModal = () => {
//     setIsQrModalOpen((prev) => !prev);
//   };

//   const generateQrCode = async () => {
//     if (qrCodeRef.current) {
//       const qrCodeText = `Name: ${studentDetails.name}, ID: ${studentDetails.mobileNo}`;
//       try {
//         await QRCode.toCanvas(qrCodeRef.current, qrCodeText, { width: 200 });
//       } catch (err) {
//         console.error("Error generating QR code:", err);
//       }
//     }
//   };

//   return (
//     <div className="pl-4">
//       <div className="profileContainer">
//         {/* Top Section */}
//         <div className="cardTop">
//           <span className="joiningDate">
//             <MdDateRange style={{ fontSize: "1em" }} />
//             {studentDetails.joiningDate}
//           </span>
//           <span className="completedClasses">
//             <FaGraduationCap style={{ fontSize: "1em" }} />
//             {studentDetails.completedClasses} Classes
//           </span>
//         </div>
//         {/* Profile Picture Section */}
//         <div
//           className="profilePicture"
//           style={{
//             backgroundImage: `url(${profileImage || defaultAvatar})`,
//           }}
//         />
//         {/* <button
//           onClick={isEditing ? null : triggerFileInput}
//           className="editButton"
//         > */}
//         <button
//   onClick={isEditing ? undefined : triggerFileInput} // Use undefined instead of null
//   className="editButton"
// >
//           {isEditing ? "Save" : <MdEdit style={{ color: "white" }} />}
//         </button>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageUpload}
//           ref={fileInputRef}
//           className="uploadInput"
//           style={{ display: "none" }}
//         />
//         <h3 className="studentName text-primary">{studentDetails.name}</h3>
//         <h4 className="studentId text-muted">
//           phone: {studentDetails.mobileNo}
//         </h4>
//         <canvas ref={qrCodeRef} id="qr-code-container" />
//         <button onClick={generateQrCode} className="qrButton">
//           Generate QR Code
//         </button>
//       </div>
//       {/* QR Modal */}
//       {isQrModalOpen && (
//         <div className="modalBackdrop" onClick={toggleQrModal}>
//           <div className="modalContent" onClick={(e) => e.stopPropagation()}>
//             <canvas ref={qrCodeRef}></canvas>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentProfile;











// "use client";

// import { useState, useRef } from "react";
// import QRCode from "qrcode";
// import { MdDateRange, MdEdit } from "react-icons/md";
// import { FaGraduationCap } from "react-icons/fa";

// const StudentProfile = () => {
//   const [profileImage, setProfileImage] = useState<string | null>(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [studentDetails] = useState({
//     id: "1234567890",
//     name: "John Doe",
//     mobileNo: "1234567890",
//     joiningDate: "2023-09-01",
//     completedClasses: 15,
//   });
//   const [isQrModalOpen, setIsQrModalOpen] = useState(false);
//   const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null);
//   const fileInputRef = useRef<HTMLInputElement | null>(null);

//   const gender = "male";
//   const defaultAvatar = gender === "male" ? "/male.webp" : "/female.webp";

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setProfileImage(reader.result?.toString() ?? null);
//       setIsEditing(true);
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const generateQrCode = async () => {
//     const qrData = JSON.stringify(studentDetails); // Store student details in QR
//     try {
//       const url = await QRCode.toDataURL(qrData);
//       setQrCodeUrl(url);
//       setIsQrModalOpen(true); // Open modal after generating QR
//     } catch (err) {
//       console.error("Error generating QR code:", err);
//     }
//   };

//   return (
//     <div className="pl-4">
//       <div className="profileContainer">
//         <div className="cardTop">
//           <span className="joiningDate">
//             <MdDateRange style={{ fontSize: "1em" }} />
//             {studentDetails.joiningDate}
//           </span>
//           <span className="completedClasses">
//             <FaGraduationCap style={{ fontSize: "1em" }} />
//             {studentDetails.completedClasses} Classes
//           </span>
//         </div>

//         <div
//           className="profilePicture"
//           style={{
//             backgroundImage: `url(${profileImage || defaultAvatar})`,
//           }}
//         />
//         <button
//           onClick={isEditing ? undefined : () => fileInputRef.current?.click()}
//           className="editButton"
//         >
//           {isEditing ? "Save" : <MdEdit style={{ color: "white" }} />}
//         </button>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageUpload}
//           ref={fileInputRef}
//           style={{ display: "none" }}
//         />

//         <h3 className="studentName text-primary">{studentDetails.name}</h3>
//         <h4 className="studentId text-muted">Phone: {studentDetails.mobileNo}</h4>

//         <button onClick={generateQrCode} className="qrButton">
//           Generate QR Code
//         </button>
//       </div>

//       {/* QR Modal */}
//       {isQrModalOpen && qrCodeUrl && (
//         <div className="modalBackdrop" onClick={() => setIsQrModalOpen(false)}>
//           <div className="modalContent" onClick={(e) => e.stopPropagation()}>
//             <h3>Scan this QR Code</h3>
//             <img src={qrCodeUrl} alt="Student QR Code" />
//             <button onClick={() => setIsQrModalOpen(false)}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentProfile;







"use client";
import { useState, useRef } from "react";
import QRCode from "qrcode";

const StudentProfile = () => {
  const [student] = useState({
    name: "John Doe",
    phone: "1234567890",
  });

  const qrCodeRef = useRef<HTMLCanvasElement | null>(null);

  const generateQrCode = async () => {
    if (qrCodeRef.current) {
      const qrCodeText = JSON.stringify(student);
      try {
        await QRCode.toCanvas(qrCodeRef.current, qrCodeText, { width: 200 });
      } catch (err) {
        console.error("Error generating QR code:", err);
      }
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Student Profile</h2>
      <p>Name: {student.name}</p>
      <p>Phone: {student.phone}</p>
      <canvas ref={qrCodeRef} id="qr-code-container" />
      <button onClick={generateQrCode} className="bg-blue-500 text-white p-2 mt-2">
        Generate QR Code
      </button>
    </div>
  );
};

export default StudentProfile;




