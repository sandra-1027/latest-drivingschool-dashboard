import { useAuth } from '@/app/context/AuthContext';
import { useState, useEffect } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import TextEditor from './TextEditor';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

interface Branch {
    id: number;
    branch_name: string;
    status: string;
    description: string;
    
  }

  // interface Item {
  //   id: number;
  //   status: string;
  //   // Other properties...
  // }
interface EditProps {
  showModal: boolean;
  toggleModal: () => void;
  branchData: Branch | null;
  onSave: (updatedBranch: Branch) => void;
}

const Edit = ({ showModal, toggleModal, branchData, onSave }: EditProps) => {
     const {state}=useAuth();
  const [formData, setFormData] = useState<Branch | null>(null);
const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
   
    const [imagePreview, setImagePreview] = useState<string | null>(null);
  useEffect(() => {
    if (branchData) {
      setFormData(branchData);
    }
  }, [branchData]);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => prevData ? { ...prevData, [name]: value } : null);
  // };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | string, fieldName?: string) => {
    if (typeof e === "string" && fieldName) {
      // For TextEditor
      setFormData((prevData) =>
        prevData ? { ...prevData, [fieldName]: e } : null
      );
    } else if (e.target) {
      // For standard input fields
      const { name, value } = e.target;
      setFormData((prevData) =>
        prevData ? { ...prevData, [name]: value } : null
      );
    }
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
  
    try {
      if (formData) {
        const transformedData = {
          id: formData.id,
        //   name: `${formData.first_name}`,
          type: 'branch',
          branch_name:formData.branch_name,
          description: formData.description,
          
        };
  
        console.log('Transformed Data:', transformedData);
  
        const response = await fetch(`/api/admin/settings/update_branch`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'authorizations': state?.accessToken ?? '',
            api_key: '10f052463f485938d04ac7300de7ec2b',
          },
          body: JSON.stringify(transformedData),
        });
  
        console.log('Response Status:', response.status);
        const data = await response.json();
   toast.success('Branch updated successfully!');
        console.log('Response Data:', data);
  
        if (data.success) {
          setSuccess(true);
          onSave(formData);
          toggleModal();
        } else {
          // setError(data.msg || 'Failed to update driver');
          toast.error(data.msg || 'Failed to update driver');
          console.log('Error Messages:', data.error_msgs);
        }
      }
    } catch (err :any) {
      console.error('Error during API call:', err);
      // setError('An error occurred while updating the driver.');
       toast.error(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };
  

  if (!showModal || !formData) return null;
  // if (!showModal) return null; 

  return (
    
   

    <div>
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
      role="dialog"
      onKeyDown={(e) => e.key === "Escape" && toggleModal()}
    >
      <div
        className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300"
        onClick={toggleModal}
      ></div>

      <div className="relative flex w-full max-w-3xl origin-top flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
        <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
          <h3 className="text-xl font-medium text-slate-700 dark:text-navy-100">
            Edit Branch
          </h3>
          <button
            onClick={toggleModal}
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

        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="space-y-5 p-4">
              
              <label className="block">
                <input
                  className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Branch Name"
                  name="branch_name"
                  type="text"
                  value={formData.branch_name}
                //   onChange={(e) =>
                //     setFormData({ ...formData, branch_name: e.target.value })
                //   }
                onChange={handleChange}
                />
              </label>

              <div className="mt-1.5 w-full">
                <TextEditor
                  value={formData.description}
                  onChange={(value: string) => handleChange(value, "description")}
                // onChange={handleChange}
                />
              </div>

              {/* <div className="flex justify-end"> */}
                <button
                  type="submit"
                  className="bg-primary text-white rounded p-2 w-1/5"
                  disabled={loading}
                >
                 Edit
                </button>
              {/* </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};
export default Edit;