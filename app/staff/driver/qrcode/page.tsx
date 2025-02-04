// "use client";
// import { useState, useRef } from "react";
// import QRCode from "qrcode";

// const Qrcode = () => {
//   const [student] = useState({
//     name: "John Doe",
//     phone: "1234567890",
//   });

//   const qrCodeRef = useRef<HTMLCanvasElement | null>(null);

//   const generateQrCode = async () => {
//     if (qrCodeRef.current) {
//       const qrCodeText = JSON.stringify(student);
//       try {
//         await QRCode.toCanvas(qrCodeRef.current, qrCodeText, { width: 200 });
//       } catch (err) {
//         console.error("Error generating QR code:", err);
//       }
//     }
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-bold">Student Profile</h2>
//       <p>Name: {student.name}</p>
//       <p>Phone: {student.phone}</p>
//       <canvas ref={qrCodeRef} id="qr-code-container" />
//       <button onClick={generateQrCode} className="bg-blue-500 text-white p-2 mt-2">
//         Generate QR Code
//       </button>
//     </div>
//   );
// };

// export default Qrcode;















"use client";
import { useState, useRef } from "react";
import QRCode from "qrcode";

const Qrcode = () => {
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

export default Qrcode;
