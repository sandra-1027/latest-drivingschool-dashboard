




// 'use client';

// import { useState, useRef, useEffect } from "react";
// import QRCode from "qrcode";
// import { MdDateRange, MdEdit } from "react-icons/md";
// import { FaGraduationCap } from "react-icons/fa";

// export default function StudentProfile() {
//   const [cardNumber, setCardNumber] = useState('');
//   const [nameOnCard, setNameOnCard] = useState('');
//   const [expirationDate, setExpirationDate] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [cardLogoSrc, setCardLogoSrc] = useState<string | null>(null);
//   const [profileImage, setProfileImage] = useState<string | null>(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [studentDetails] = useState({
//     name: "John Doe",
//     mobileNo: "1234567890",
//     joiningDate: "2023-09-01",
//     completedClasses: 15,
//   });

//   const qrCodeRef = useRef<HTMLCanvasElement | null>(null);
//   const fileInputRef = useRef<HTMLInputElement | null>(null);

//   const gender = "male";
//   const defaultAvatar = gender === "male" ? "/male.webp" : "/female.webp";

//   useEffect(() => {
//     const generateQrCode = async () => {
//       if (qrCodeRef.current) {
//         const qrCodeText = `Name: ${studentDetails.name}, ID: ${studentDetails.mobileNo}`;
//         try {
//           await QRCode.toCanvas(qrCodeRef.current, qrCodeText, { width: 200 });
//         } catch (err) {
//           console.error("Error generating QR code:", err);
//         }
//       }
//     };

//     generateQrCode(); // ✅ Auto-generate QR code on component mount
//   }, [studentDetails]);

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
//   return (
//     <main className="main-content w-full px-[var(--margin-x)] pb-8">
//     <div className="grid place-items-center">
//       <div className="card mt-20 w-full max-w-xl p-4 sm:p-5">
//         {/* <div className="relative mx-auto -mt-20 h-40 w-72 rounded-lg text-white shadow-xl transition-transform hover:scale-110 lg:h-48 lg:w-80"> */}
//           {/* <div className=" w-full h-full rounded-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"> */}
//                   {/* Profile Picture */}
//          <div className="relative mx-auto w-32 h-32 mb-4 -mt-20 transition-transform hover:scale-110">
//           <div
//             className="w-full h-full rounded-full bg-cover bg-center border-4 border-white shadow-lg"
//             style={{
//               backgroundImage: `url(${profileImage || defaultAvatar})`,
//             }}
//           />
//           <button
//             onClick={isEditing ? undefined : triggerFileInput}
//             className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 hover:bg-blue-600 transition-colors"
//           >
//             {isEditing ? "Save" : <MdEdit className="text-white" size={16} />}
//           </button>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             ref={fileInputRef}
//             className="hidden"
//           />
//         </div>
//           {/* </div> */}
         
            

//         {/* </div> */}
//         <div className="flex items-center justify-between py-4">
//           <p className="text-xl font-semibold text-primary dark:text-accent-light">Name</p>
//           {/* <div className="badge rounded-full border border-primary text-primary dark:border-accent-light dark:text-accent-light">
//             Primary
//           </div> */}
//         </div>
//         <div className="space-y-4">
         
//                  {/* QR Code */}
//          <div className="flex flex-col items-center">
//            <canvas ref={qrCodeRef} className="mb-4" />
//          </div>
         
//         </div>
//       </div>
//     </div>
//     </main>
//   );
// }














'use client';

import { useState, useRef, useEffect } from "react";
import QRCode from "qrcode";
import { MdDateRange, MdEdit } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";

export default function StudentProfile() {
  const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardLogoSrc, setCardLogoSrc] = useState<string | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [studentDetails] = useState(
  //   {
  //   name: "John Doe",
  //   mobileNo: "1234567890",
  //   joiningDate: "2023-09-01",
  //   completedClasses: 15,
  // }
  {
    name: "John Doe",
    phone: "1234567890",
    status: "Joined",
    totalclass: "30 Days",
    completedClasses: 10,
    classType: "Days"
  }
);

  const qrCodeRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const gender = "male";
  const defaultAvatar = gender === "male" ? "/male.webp" : "/female.webp";

 
  useEffect(() => {
    const generateQrCode = async () => {
      if (qrCodeRef.current) {
        const studentData = {
          name: studentDetails.name,
          phone: studentDetails.phone,
          status: studentDetails.status,  // Use actual status
          totalclass: studentDetails.totalclass,
          completedClasses: studentDetails.completedClasses,
          classType: studentDetails.classType,
        };
  
        try {
          await QRCode.toCanvas(qrCodeRef.current, JSON.stringify(studentData), {
            width: 200,
          });
          console.log("Generated QR Code Data:", studentData);
        } catch (err) {
          console.error("Error generating QR code:", err);
        }
      }
    };
  
    generateQrCode();
  }, [studentDetails]); // Dependency ensures QR updates if studentDetails change
  

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
  return (
    <main className="main-content w-full px-[var(--margin-x)] pb-8">
    <div className="grid place-items-center">
      <div className="card mt-20 w-full max-w-xl p-4 sm:p-5">
        {/* <div className="relative mx-auto -mt-20 h-40 w-72 rounded-lg text-white shadow-xl transition-transform hover:scale-110 lg:h-48 lg:w-80"> */}
          {/* <div className=" w-full h-full rounded-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"> */}
                  {/* Profile Picture */}
         <div className="relative mx-auto w-32 h-32 mb-4 -mt-20 transition-transform hover:scale-110">
          <div
            className="w-full h-full rounded-full bg-cover bg-center border-4 border-white shadow-lg"
            style={{
              backgroundImage: `url(${profileImage || defaultAvatar})`,
            }}
          />
          <button
            onClick={isEditing ? undefined : triggerFileInput}
            className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 hover:bg-blue-600 transition-colors"
          >
            {isEditing ? "Save" : <MdEdit className="text-white" size={16} />}
          </button>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={fileInputRef}
            className="hidden"
          />
        </div>
          {/* </div> */}
         
            

        {/* </div> */}
       
        <div className="flex items-center justify-between py-4">
 
          <p className="text-xl font-semibold text-primary dark:text-accent-light">Name</p>
        
        </div>
        
        <div className="space-y-4">
         
                 {/* QR Code */}
         <div className="flex flex-col items-center">
           <canvas ref={qrCodeRef} className="mb-4" />
         </div>
         
        </div>
      </div>
    </div>
    </main>
  );
}