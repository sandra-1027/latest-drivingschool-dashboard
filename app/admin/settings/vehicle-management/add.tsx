import { useAuth } from "@/app/context/AuthContext";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type CreateProps = {
  showmodal: boolean;
  togglemodal: () => void;
};

const Add: React.FC<CreateProps> = ({ showmodal, togglemodal }) => {
  const { state } = useAuth();

  const [vehicle_no, setVehicle_No] = useState("");
  const [tax_expiry_date, setTax_expiry_date] = useState("");
  const [rc_expiry_date, setRc_expiry_date] = useState("");
  const [pucc_expiry_date, setPucc_expiry_date] = useState("");
  const [insurance_expiry_date, setInsurance_expiry_date] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
 const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!vehicle_no) {
      setError("Driver name is required.");
      return;
    }



    const formData = new FormData();
    formData.append("vehicle_no", vehicle_no);
    formData.append("tax_expiry_date", tax_expiry_date);
    formData.append("rc_expiry_date", rc_expiry_date);
    formData.append("pucc_expiry_date", pucc_expiry_date);
    formData.append("insurance_expiry_date", insurance_expiry_date);

    if (selectedFile) {
      formData.append("userfile", selectedFile);
    }

    try {
      setLoading(true);

      const response = await fetch("/api/admin/settings/add_vehicle", {
        method: "POST",
        headers: {
          authorizations: state?.accessToken ?? "",
          api_key: "10f052463f485938d04ac7300de7ec2b",
        },
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Vehicle added successfully:", data);
        // alert('Vehicle added successfully!');
        toast.success("Vehicle added successfully!");
        setTimeout(() => togglemodal(), 2000);
        // resetForm();
      } else {
        const errorData = await response.json();
        console.error("Error adding vehicle:", errorData);
        alert(`Error: ${errorData.msg || "Failed to add vehicle"}`);
      }
    } catch (error: any) {
      console.error("Error:", error);
      // alert('Something went wrong. Please try again.');
      toast.error(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Handle image file change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Remove image file
  const handleRemoveImage = () => {
    setSelectedFile(null);
    setImagePreview("");
  };
  const triggerFileInput = () => {
    const fileInput = document.getElementById("imageInput") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
      fileInput.click();
    }
  };

  // const resetForm = () => {
  //   setVehicle_No("");
  //   setTax_expiry_date("");
  //   setRc_expiry_date("");
  //   setPucc_expiry_date("");
  //   setInsurance_expiry_date("");
  //   setSelectedFile(null);
  //   setImagePreview("");
  // };

  // if (!showmodal) return null;

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

// const handleDateChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
//   const selectedDate = e.target.value;
//   if (selectedDate < today) {
//     alert("Please select a future date.");
//     return;
//   }

//   // Update the correct state based on the field
//   switch (field) {
//     case "tax":
//       setTax_expiry_date(selectedDate);
//       break;
//     case "rc":
//       setRc_expiry_date(selectedDate);
//       break;
//     case "pucc":
//       setPucc_expiry_date(selectedDate);
//       break;
//     case "insurance":
//       setInsurance_expiry_date(selectedDate);
//       break;
//     default:
//       break;
//   }
// };



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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span>Vehicle Number</span>
                <input
                  type="text"
                  value={vehicle_no}
                  onChange={(e) => setVehicle_No(e.target.value)}
                  placeholder="Vehicle No:"
                  className="mt-2 form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  required
                />
              </label>
              <label className="block">
                <span>Tax Expiry Date</span>
                <input
                  type="date"
                  value={tax_expiry_date}
                  onChange={(e) => setTax_expiry_date(e.target.value)}
                  // onChange={handleDateChange("tax")}
                  min={today}
                  className="mt-2 form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  required
                />
              </label>
              <label className="block">
                <span>RC Expiry Date</span>
                <input
                  type="date"
                  value={rc_expiry_date}
                  onChange={(e) => setRc_expiry_date(e.target.value)}
                  // onChange={handleDateChange("rc")}
                  min={today}
                  className="mt-2 form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  required
                />
              </label>
              <label className="block">
                <span>PUCC Expiry Date</span>
                <input
                  type="date"
                  value={pucc_expiry_date}
                  onChange={(e) => setPucc_expiry_date(e.target.value)}
                  // onChange={handleDateChange("pucc")}
                  min={today}
                  className="mt-2 form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  required
                />
              </label>
              <label className="block">
                <span>Insurance Expiry Date</span>
                <input
                  type="date"
                  value={insurance_expiry_date}
                  onChange={(e) => setInsurance_expiry_date(e.target.value)}
                  // onChange={handleDateChange("insurance")}
                  min={today}
                  className="mt-2 form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  required
                />
              </label>

              <div className="block">
                <span>RC Document</span>
                <div className="mt-2">
                  <div
                    className={`w-32 h-32 border rounded ${
                      imagePreview
                        ? "flex justify-center items-center"
                        : "bg-transparant"
                    }`}
                  >
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Selected"
                        className="w-32 h-32 object-cover border rounded"
                      />
                    ) : (
                      <span className="text-gray-500"></span>
                    )}
                  </div>
                  {!imagePreview ? (
                    <label
                      htmlFor="imageInput"
                      className="mt-2 flex items-center justify-center cursor-pointer bg-blue-500 text-white rounded px-4 py-2"
                    >
                      Select Image
                      <input
                        id="imageInput"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden w-1/2"
                      />
                    </label>
                  ) : (
                    <div className="mt-2 flex space-x-2">
                      <label
                        className="bg-blue-500 text-white p-2 rounded cursor-pointer"
                        htmlFor="imageUpload"
                      >
                        Change Image
                      </label>
                      <input
                        id="imageUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden outline-dark border-[1px] border-dark font-bold py-2 px-4 rounded"
                        // className="hidden"
                      />
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="outline-dark border-[1px] border-dark font-bold py-2 px-4 rounded"
                      >
                        Remove Image
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm mt-2">{error}</div>
            )}


            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="bg-primary text-white rounded p-2 w-1/5"
                disabled={loading}
              >
                 {loading ? 'Adding...' : 'Add'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
