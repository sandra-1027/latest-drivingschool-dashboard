// import "webrtc-adapter";
// import React from "react";
// import { QrReader } from "react-qr-reader";
// import "./driver.css";

// // Define the prop types
// type ScannerProps = {
//   onScan: (data: string) => void; // Function that handles scanned QR code data
//   onClose: () => void; // Function to handle closing the scanner
// };

// const Scanner: React.FC<ScannerProps> = ({ onScan, onClose }) => {
//   return (
//     <div className="scanner-overlay">
//       <div className="scanner-modal">
//         <h2 className="scanner-title">Scan QR Code</h2>
//         <div className="scanner-frame" style={{ width: "100%" }}>
//           <QrReader
//             constraints={{ facingMode: "environment" }} // Specify the camera to use
//             onResult={(result, error) => {
//               if (result) {
//                 // Use getText() to retrieve the QR code content
//                 onScan(result.getText());
//               }
//               if (error) {
//                 console.error(error);
//               }
//             }}
//           />
//         </div>
//         <button className="close-button" onClick={onClose}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Scanner;




import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "./driver.css";
type ScannerProps = {
  onScan: (data: string) => void;
  onClose: () => void;
};

const Scanner: React.FC<ScannerProps> = ({ onScan, onClose }) => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );

    scanner.render(
      (decodedText) => {
        onScan(decodedText);
        scanner.clear(); // Stop scanning after success
      },
      (error) => {
        console.error("QR Scanner Error:", error);
      }
    );

    return () => scanner.clear();
  }, [onScan]);

  return (
    <div className="scanner-overlay">
      <div className="scanner-modal">
        <h2 className="scanner-title">Scan QR Code</h2>
        <div id="reader" className="scanner-frame" />
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Scanner;
