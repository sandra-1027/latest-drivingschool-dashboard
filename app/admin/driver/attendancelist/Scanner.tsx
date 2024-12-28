




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
//         scanner.clear(); // Stop scanning after success
//       },
//       (error) => {
//         console.error("QR Scanner Error:", error);
//       }
//     );

//     return () => scanner.clear();
//   }, [onScan]);

//   return (
//     <div className="scanner-overlay">
//       <div className="scanner-modal dark:bg-navy-800">
//         <h2 className="scanner-title">
    
//           Scan QR Code</h2>
//         <div id="reader" className="scanner-frame" />
//         <button 
//         // className="close-button"
//          className="mt-6 rounded bg-primary px-4 py-2 text-white transition hover:bg-primary-focus dark:bg-accent dark:hover:bg-accent-focus"
//          onClick={onClose}>
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
        scanner.clear().catch((err) =>
          console.error("Error stopping scanner:", err)
        ); // Handle potential errors while stopping the scanner
      },
      (error) => {
        console.error("QR Scanner Error:", error);
      }
    );

    // Ensure cleanup is synchronous
    return () => {
      scanner.clear().catch((err) =>
        console.error("Error during cleanup:", err)
      );
    };
  }, [onScan]);

  return (
    <div className="scanner-overlay">
      <div className="scanner-modal dark:bg-navy-800">
        <h2 className="scanner-title">Scan QR Code</h2>
        <div id="reader" className="scanner-frame" />
        <button
          className="mt-6 rounded bg-primary px-4 py-2 text-white transition hover:bg-primary-focus dark:bg-accent dark:hover:bg-accent-focus"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Scanner;












// import React, { useEffect } from "react";
// import { Html5QrcodeScanner } from "html5-qrcode";

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
//         scanner.clear(); // Stop scanning after success
//       },
//       (error) => {
//         console.error("QR Scanner Error:", error);
//       }
//     );

//     return () => scanner.clear();
//   }, [onScan]);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 bg-opacity-75">
//       <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-navy-800">
//         <h2 className="mb-4 text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
//           Scan QR Code
//         </h2>
//         <div
//           id="reader"
//           className="w-64 h-64 border-2 border-dashed border-slate-300 dark:border-navy-600"
//         />
//         <button
//           onClick={onClose}
//           className="mt-6 rounded bg-primary px-4 py-2 text-white transition hover:bg-primary-focus dark:bg-accent dark:hover:bg-accent-focus"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Scanner;



