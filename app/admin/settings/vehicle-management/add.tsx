

import { useAuth } from '@/app/context/AuthContext';
import React, { useState } from 'react';

type CreateProps = {
  showmodal: boolean;
  togglemodal: () => void;
}

const Add: React.FC<CreateProps> = ({ showmodal, togglemodal }) => {
  const {state}=useAuth();
  // const [accountType, setAccountType] = useState('expense');
  // const [expenseType, setExpenseType] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
// const [amount, setAmount] = useState('');
  const [vehicle_no, setVehicle_No] = useState('');
  const[tax_expiry_date,setTax_expiry_date]= useState('');
  const[rc_document,setRc_document]= useState([]);
  const[insurance_expiry_date,setInsurance_expiry_date]= useState('');
  const[pucc_expiry_date,setPucc_expiry_date]= useState('');
  const[rc_expiry_date,setRc_expiry_date]= useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Use optional chaining in case files is null
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };


  if (!showmodal) return null;

 


//  const handleSubmit = async(e: React.FormEvent) => {
//     e.preventDefault();
//     if (!vehicle_no || !tax_expiry_date || !rc_expiry_date) {
//       setError('All fields are required');
//       return;
//     }
//     // if (!/^\d+$/.test(mobile)) {
//     //   setError("Mobile number must be numeric.");
//     //   return;
//     // }
//     setError("");
//     setLoading(true);
//     setSuccess(false);
//     console.log({ accountType, expenseType, amount });
//     setExpenseType('');
//     setAmount('');


//     const formData = {
//       vehicle_no,
//       tax_expiry_date,
//       rc_expiry_date,
//       pucc_expiry_date,
//       insurance_expiry_date,
//       rc_document,
//     };

//     try {
      
//       const response = await fetch('api/admin/settings/add_vehicle', {
//         method: 'POST',
//         headers: {
//            'authorizations': state?.accessToken ?? '', 
//           'api_key': '10f052463f485938d04ac7300de7ec2b',  // Make sure the API key is correct
//         },
//         body: JSON.stringify(formData),
//       });
//       if (!response.ok) {
//         const errorData = await response.json();
//         // console.error('API error:', errorData);
//         throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || 'Unknown error'}`);
//       }
      
//   const result = await response.json();
//       setSuccess(true);
//       console.log('Driver added successfully:', result);

//       // Clear form fields
//       setVehicle_No('');
//       setTax_expiry_date('');
//       setRc_expiry_date('');
//       setPucc_expiry_date('');
//       setInsurance_expiry_date('');
//       setRc_document([]);
//       setTimeout(() => togglemodal(), 2000);
//     } catch (err: any) {
//       setError(err.message || 'An error occurred');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!vehicle_no || !tax_expiry_date || !rc_expiry_date) {
    setError('All fields are required');
    return;
  }

  setError('');
  setLoading(true);
  setSuccess(false);

  const formData = new FormData();
  formData.append('vehicle_no', vehicle_no);
  formData.append('tax_expiry_date', tax_expiry_date);
  formData.append('rc_expiry_date', rc_expiry_date);
  formData.append('pucc_expiry_date', pucc_expiry_date);
  formData.append('insurance_expiry_date', insurance_expiry_date);
  if (image) formData.append('rc_document', image);

  try {
    const response = await fetch('/api/admin/settings/add_vehicle', {
      method: 'POST',
      headers: {
        'authorizations': state?.accessToken ?? '',
        'api_key': '10f052463f485938d04ac7300de7ec2b',
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'An error occurred');
    }

    const result = await response.json();
    setSuccess(true);
    console.log('Vehicle added successfully:', result);

    // Clear the form
    setVehicle_No('');
    setTax_expiry_date('');
    setRc_expiry_date('');
    setPucc_expiry_date('');
    setInsurance_expiry_date('');
    setImage(null);
    setImagePreview('');
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
            Add Vehicle
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
            

            {/* <div className="flex mb-4"> */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
            <span>Vehicle Number</span>
            <span className="relative mt-1.5 flex">
              <input
                type="text"
                value={vehicle_no}
                onChange={(e) => setVehicle_No(e.target.value)}
                placeholder="Vehicle No:"
                // className="w-1/2  border rounded p-2 mr-2"
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" 
              />
              </span>
              </label>
              <label className="block">
            <span>Tax Expiry Date </span>
            <span className="relative mt-1.5 flex">
              <input
                type="date"
                value={tax_expiry_date}
                onChange={(e) => setTax_expiry_date(e.target.value)}
                placeholder="Mobile"
                // className="w-1/2  border rounded p-2"
                 className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              />
              </span>
              </label>
            {/* </div> */}
            {/* <div className="flex mb-4"> */}
            
            <label className="block">
            <span>RC Expiry Date </span>
            <span className="relative mt-1.5 flex">
            <input
                type="date"
                value={rc_expiry_date}
                onChange={(e) => setRc_expiry_date(e.target.value)}
                placeholder="Mobile"
                // className="w-1/2  border rounded p-2 mr-2"
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
             
              />
              </span>
              </label>
              <label className="block">
            <span>PUCC Expiry Date</span>
            <span className="relative mt-1.5 flex">
              <input
                type="date"
                value={pucc_expiry_date}
                onChange={(e) => setPucc_expiry_date(e.target.value)}
                placeholder="Mobile"
                // className="w-1/2  border rounded p-2"
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              />
              </span>
              </label>
            {/* </div>
            <div className="flex mb-4"> */}
              {/* <div className='w-1/2'> */}
              <label className="block">
            <span>Insurence Expiry Date</span>
            <span className="relative mt-1.5 flex">
            <input
                type="date"
                value={insurance_expiry_date}
                onChange={(e) => setInsurance_expiry_date(e.target.value)}
                placeholder="Mobile"
                // className="w-full border rounded p-2 bg-white mr-2"
                 className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
               
              />
              </span>
              </label>
              {/* </div> */}
              <div className='ml-2'>
              
       {imagePreview && (
        <div className="mb-2">
          <img
            src={imagePreview}
            alt="Selected"
            className="w-32 h-32 object-cover border rounded"
          />
        </div>
      )}
      <label className="flex items-center justify-center border rounded p-2 cursor-pointer bg-blue-500 text-white">
        Select Image
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden" // Hide the default file input
        />
      </label>
      </div>

            </div>
            <div className='mt-4'>
            <button
              type="submit"
              className="bg-primary text-white rounded p-2 w-1/5"
            >
              Add
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add;