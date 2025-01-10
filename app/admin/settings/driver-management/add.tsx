

// import React, { useState } from 'react';

// type CreateProps = {
//   showmodal: boolean;
//   togglemodal: () => void;
// }

// const Add: React.FC<CreateProps> = ({ showmodal, togglemodal }) => {
//   const [accountType, setAccountType] = useState('expense');
//   const [expenseType, setExpenseType] = useState('');
//   const [amount, setAmount] = useState('');

//   if (!showmodal) return null;

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log({ accountType, expenseType, amount });
//     setExpenseType('');
//     setAmount('');
//   };

//   return (
//     <div>
//       <div
//         className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
//         role="dialog"
//         onKeyDown={(e) => e.key === "Escape" && togglemodal()}
//       >
//         <div
//           className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300"
//           onClick={togglemodal}
//         ></div>

//         <div className="relative flex w-full max-w-3xl origin-top flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
//           <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
//             <h3 className="text-xl font-medium text-slate-700 dark:text-navy-100">
//             Add Driver
//             </h3>
//             <button
//               onClick={togglemodal}
//               className="btn -mr-1.5 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="size-4.5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>

//           <form onSubmit={handleSubmit} className="p-4">
            

//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//   <label className="block">
//     <span>Driver name </span>
//     <span className="relative mt-1.5 flex">
//       <input className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Enter name" type="text" />
//     </span>
//   </label>
//   <label className="block">
//     <span>Mobile </span>
//     <span className="relative mt-1.5 flex">
//       <input className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Enter full name" type="text" />
// </span>
//   </label>
//   <label className="block">
//     <span>Email Address </span>
//     <span className="relative mt-1.5 flex">
//       <input className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Enter email address" type="text" />
// </span>
//   </label>
//   <label className="block">
//     <span>Phone Number</span>
//     <span className="relative mt-1.5 flex">
//       <input className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" placeholder="Enter phone number" type="text" />
// </span>
//   </label>
// </div>

//             <button
//               type="submit"
//               className="bg-primary text-white rounded p-2 w-1/5 mt-4"
//             >
//               Add
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Add;












import React, {  useState } from 'react';

type CreateProps = {
  showmodal: boolean;
  togglemodal: () => void;
}

const Add: React.FC<CreateProps> = ({ showmodal, togglemodal }) => {
  const [accountType, setAccountType] = useState('expense');
  const [expenseType, setExpenseType] = useState('');
  const [amount, setAmount] = useState('');
  const [driverName, setDriverName] = useState('');
  const [mobile, setMobile] = useState('');
  const [place, setPlace] = useState('');
  const [drivingLicenceNo, setdrivingLicenceNo] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  if (!showmodal) return null;
 
  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if (!driverName || !mobile || !place || !drivingLicenceNo) {
      setError('All fields are required');
      return;
    }
    if (!/^\d+$/.test(mobile)) {
      setError("Mobile number must be numeric.");
      return;
    }
    setError("");
    setLoading(true);
    setSuccess(false);
    console.log({ accountType, expenseType, amount });
    setExpenseType('');
    setAmount('');


    const formData = {
      driver_name: driverName,
      mobile,
      place,
      driving_licence_no: drivingLicenceNo,
    };

    try {
      // Replace with your backend endpoint
      const response = await fetch('/api/admin/settings/add_driver', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'An error occurred');
      }

      const result = await response.json();
      setSuccess(true);
      console.log('Driver added successfully:', result);

      // Clear form fields
      setDriverName('');
      setMobile('');
      setPlace('');
      setdrivingLicenceNo('');
      setTimeout(() => togglemodal(), 2000);
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
        role="dialog"
        onKeyDown={(e) => e.key === "Escape" && togglemodal()}
      >
        <div
          className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300"
          onClick={togglemodal}
        ></div>

        <div className="relative flex w-full max-w-3xl origin-top flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
          <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
            <h3 className="text-xl font-medium text-slate-700 dark:text-navy-100">
            Add Driver
            </h3>
            <button
              onClick={togglemodal}
              className="btn -mr-1.5 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-4">
            

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
  <label className="block">
    <span>Driver name </span>
    <span className="relative mt-1.5 flex">
      <input 
      className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" 
      placeholder="Enter name" 
      type="text" 
      value={driverName}
     onChange={(e) => setDriverName(e.target.value)}
      />
    </span>
  </label>
  <label className="block">
    <span>Mobile </span>
    <span className="relative mt-1.5 flex">
      <input 
      className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" 
      placeholder="Enter Mobile No" 
      type="text" 
      value={mobile}
      onChange={(e) => setMobile(e.target.value)}
      />
</span>
  </label>
  <label className="block">
    <span>Place </span>
    <span className="relative mt-1.5 flex">
      <input 
      className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" 
      placeholder="Enter Place" 
      type="text" 
      value={place}
      onChange={(e) => setPlace(e.target.value)}
      />
</span>
  </label>
  <label className="block">
    <span>Driving Licence No</span>
    <span className="relative mt-1.5 flex">
      <input 
      className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" 
      placeholder="Enter Driving Licence No" 
      type="text" 
      value={drivingLicenceNo}
      onChange={(e) => setdrivingLicenceNo(e.target.value)}
      />
</span>
  </label>
</div>


{loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">Driver added successfully!</p>}


            <button
              type="submit"
              className="bg-primary text-white rounded p-2 w-1/5 mt-4"
            >
              {loading ? 'Adding...' : 'Add'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add;











