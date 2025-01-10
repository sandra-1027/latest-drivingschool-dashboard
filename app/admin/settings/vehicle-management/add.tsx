

import React, { useState } from 'react';

type CreateProps = {
  showmodal: boolean;
  togglemodal: () => void;
}

const Add: React.FC<CreateProps> = ({ showmodal, togglemodal }) => {
  const [accountType, setAccountType] = useState('expense');
  const [expenseType, setExpenseType] = useState('');
  const [amount, setAmount] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Use optional chaining in case files is null
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };


  if (!showmodal) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ accountType, expenseType, amount });
    setExpenseType('');
    setAmount('');
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
            

            <div className="flex mb-4">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Vehicle No:"
                className="w-1/2  border rounded p-2 mr-2"
              />
              <input
                type="date"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Mobile"
                className="w-1/2  border rounded p-2"
              />
            </div>
            <div className="flex mb-4">
            <input
                type="date"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Mobile"
                className="w-1/2  border rounded p-2 mr-2"
              />
              <input
                type="date"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Mobile"
                className="w-1/2  border rounded p-2"
              />
            </div>
            <div className="flex mb-4">
              <div className='w-1/2'>
            <input
                type="date"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Mobile"
                className="w-full border rounded p-2 bg-white mr-2"
               
              />
              </div>
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

            <button
              type="submit"
              className="bg-primary text-white rounded p-2 w-1/5"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add;