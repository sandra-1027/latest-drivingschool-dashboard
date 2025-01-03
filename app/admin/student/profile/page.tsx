// "use client";
// import { QRCodeCanvas } from "qrcode.react";
// import { useState, useRef } from "react";
// import "./profile.css";
// import { MdDateRange, MdEdit } from "react-icons/md";

// import { FaGraduationCap } from "react-icons/fa";

// const StudentProfile = () => {
//   const [profileImage, setProfileImage] = useState<string | null>(null);
//   const [isEditing, setIsEditing] = useState(false); // To track if the user is editing
//   const [studentDetails, setStudentDetails] = useState({
//     name: "John Doe",
//     mobileNo: "1234567890",
//     joiningDate: "2023-09-01",
//     completedClasses: 15,
//   });
//   const [isQrModalOpen, setIsQrModalOpen] = useState(false);
//   const gender = "male";
//   const defaultAvatar = gender === "male" ? "/male.webp" : "/female.webp";

//   // const fileInputRef = useRef(null);
//   const fileInputRef = useRef<HTMLInputElement | null>(null);

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setProfileImage(reader.result?.toString() ?? null); // Safely set the state
//       setIsEditing(true); // Set editing to true when an image is uploaded
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const triggerFileInput = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click(); // Only call if ref is not null
//     }
//   };

//   const toggleQrModal = () => {
//     setIsQrModalOpen((prev) => !prev);
//   };

//   // Handle saving the profile image to the backend
//   const saveProfileImage = async () => {
//     if (!profileImage) {
//       alert("Please upload a profile image.");
//       return;
//     }

//     // Convert base64 to Blob
//     const byteString = atob(profileImage.split(",")[1]);
//     const arrayBuffer = new ArrayBuffer(byteString.length);
//     const uintArray = new Uint8Array(arrayBuffer);

//     for (let i = 0; i < byteString.length; i++) {
//       uintArray[i] = byteString.charCodeAt(i);
//     }

//     const file = new Blob([arrayBuffer], { type: "image/jpeg" });
//     const formData = new FormData();
//     formData.append("profileImage", file, "profile-image.jpg");

//     try {
//       const response = await fetch("/api/save-profile-image", {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         alert("Profile image saved successfully!");
//         setIsEditing(false); // Switch back to Edit mode after saving
//       } else {
//         alert("Failed to save profile image.");
//       }
//     } catch (error) {
//       console.error("Error uploading image:", error);
//       alert("Error saving profile image.");
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
//         {/* Toggle button between Edit and Save */}
//         <button
//           onClick={isEditing ? saveProfileImage : triggerFileInput}
//           className="editButton"
//         >
//           {isEditing ? (
//             "Save"
//           ) : (
//             <>
//               <MdEdit style={{ color: "white" }} /> Edit
//             </>
//           )}
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
//         <QRCodeCanvas
//           value={`Name: ${studentDetails.name}, ID: ${studentDetails.mobileNo}`}
//           className="qrCode"
//           onClick={toggleQrModal}
//         />
//       </div>
//       {/* QR Modal */}
//       {isQrModalOpen && (
//         <div className="modalBackdrop" onClick={toggleQrModal}>
//           <div className="modalContent" onClick={(e) => e.stopPropagation()}>
//             <QRCodeCanvas
//               value={`Name: ${studentDetails.name}, ID: ${studentDetails.mobileNo}`}
//               style={{ width: "100%", height: "100%" }}
//             />
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

import "./profile.css";
import { MdDateRange, MdEdit } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";


const StudentProfile = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [studentDetails, setStudentDetails] = useState({
    name: "John Doe",
    mobileNo: "1234567890",
    joiningDate: "2023-09-01",
    completedClasses: 15,
  });
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const qrCodeRef = useRef<HTMLCanvasElement | null>(null);

  const gender = "male";
  const defaultAvatar = gender === "male" ? "/male.webp" : "/female.webp";

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImage(reader.result?.toString() ?? null);
      setIsEditing(true);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const toggleQrModal = () => {
    setIsQrModalOpen((prev) => !prev);
  };

  const generateQrCode = async () => {
    if (qrCodeRef.current) {
      const qrCodeText = `Name: ${studentDetails.name}, ID: ${studentDetails.mobileNo}`;
      try {
        await QRCode.toCanvas(qrCodeRef.current, qrCodeText, { width: 200 });
      } catch (err) {
        console.error("Error generating QR code:", err);
      }
    }
  };

  return (
    <div className="pl-4">
      <div className="profileContainer">
        {/* Top Section */}
        <div className="cardTop">
          <span className="joiningDate">
            <MdDateRange style={{ fontSize: "1em" }} />
            {studentDetails.joiningDate}
          </span>
          <span className="completedClasses">
            <FaGraduationCap style={{ fontSize: "1em" }} />
            {studentDetails.completedClasses} Classes
          </span>
        </div>
        {/* Profile Picture Section */}
        <div
          className="profilePicture"
          style={{
            backgroundImage: `url(${profileImage || defaultAvatar})`,
          }}
        />
        {/* <button
          onClick={isEditing ? null : triggerFileInput}
          className="editButton"
        > */}
        <button
  onClick={isEditing ? undefined : triggerFileInput} // Use undefined instead of null
  className="editButton"
>
          {isEditing ? "Save" : <MdEdit style={{ color: "white" }} />}
        </button>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
          className="uploadInput"
          style={{ display: "none" }}
        />
        <h3 className="studentName text-primary">{studentDetails.name}</h3>
        <h4 className="studentId text-muted">
          phone: {studentDetails.mobileNo}
        </h4>
        <canvas ref={qrCodeRef} id="qr-code-container" />
        <button onClick={generateQrCode} className="qrButton">
          Generate QR Code
        </button>
      </div>
      {/* QR Modal */}
      {isQrModalOpen && (
        <div className="modalBackdrop" onClick={toggleQrModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <canvas ref={qrCodeRef}></canvas>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentProfile;

