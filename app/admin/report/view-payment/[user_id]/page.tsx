
// 'use client'
// import { useAuth } from '@/app/context/AuthContext';
// import withAuth from '@/hoc/withAuth';
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react'

// type Payment = {
//   id?: string;
//   payment_status: string;
//   service_name: string;
//   amount: string;
//   added_date:string;
//   mobile:string;
//   service_id: number;
//   details: string;
// };
//  const page = ({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: { [key: string]: string | undefined } }) => {
 


//   const { state } = useAuth();

 
//   const [serviceId, setServiceId] = useState<string | undefined>(undefined);
//   const [paymentData, setpaymentData] = useState<Payment[]>([]);
//   const [filteredData, setFilteredData] = useState<Payment[]>([]);

//   const [error, setError] = useState<string | null>(null);

//   const fetchpaymenthistory = async () => {
  

//     try {

//       const response = await fetch('/api/admin/report/view_payment', {
//         method: 'POST',
//         headers: {
//            'authorizations': state?.accessToken ?? '', 
//           // 'authorizations': token ?? '',
//           'api_key': '10f052463f485938d04ac7300de7ec2b',  // Make sure the API key is correct
//         },
//         body: JSON.stringify({   }),
//       });
//       if (!response.ok) {
//         const errorData = await response.json();
//         // console.error('API error:', errorData);
//         throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || 'Unknown error'}`);
//       }
      
//       const data = await response.json();
//      console.log(data,"data")
//       if (data.success) {
//         setpaymentData(data.data || []);
//         setFilteredData(data.data || []);
//       } else {
//         // console.error("API error:", data.msg || "Unknown error");
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   };
  
//   useEffect(() => {
//     fetchpaymenthistory();
//   }, [state]);

 
//   return (
//     <div className=" w-full  pb-8">
 
        
//     <div className="flex items-center space-x-4 py-5 lg:py-6">
//     <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
//     View Payment Details
//     </h2>
//     <div className="hidden h-full py-1 sm:flex">
//       <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
//     </div>
//     <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
//       <li className="flex items-center space-x-2">
//         <a className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent" href="#">Home
//         </a>
        
//       </li>
     
//     </ul>
//   </div>



//   <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6" >
    
//   <div className="card px-4 pb-4 sm:px-5">
//   <div className="mt-5">
//   <div className="flex justify-between p-4">
//       <div>
//         <p>Billed From</p>
//        <div className="billed-from">
//   <h6>shaniba.</h6>
//   <p>alathiyur
//     <br />Tel No: 1111111111
//     <br />Email: shaniba@gmail.com</p>
// </div>

//       </div>
//       <div>
//       <p>Billed To</p>
//      <div className="billed-from">
//   <h6 className="fs-14 fw-semibold">asd</h6>
//   Tel No: 23432534
//   <br />Email: dfg@gf.ty<p />
// </div>

//       </div>
//     </div>





//         <div className="overflow-x-auto w-full">
//   <table className="is-hoverable w-full text-left">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 SL No
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Total Amount
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Pay Amount
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Due Amount
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Payment Status
//                 </th>            
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Payment Method
//                 </th> 
//                 <th className="whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Date
//                 </th> 
          
//               </tr>
//             </thead>
//             <tbody>
//             {filteredData.map((item, index) => (
//               <tr key={item.id} className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
//                 <td className="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5">
//                 {index + 1}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.date}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.name}
//                 </td>
//                 <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
//                 {item.checkinTime}
//                 </td>
//                 <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
//                 {item.checkoutTime}
//                 </td>
//                 <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
//                 <div>
//                        {item.paymentDetails.map((payment, idx) => (
//                         <div
//                           key={idx}
//                           className="flex justify-between items-center py-2"
//                         >
                        
//                           <span className="font-semibold text-gray-700">
//                             {payment.term}
//                           </span>
                         
//                           <button
//                             className={`px-4 py-2 rounded font-semibold ${
//                               payment.status === "Paid"
//                                 ? "bg-green-500 text-white"
//                                 : "bg-red-500 text-white"
//                             }`}
//                             onClick={() =>
//                               handlePaymentStatusChange(
//                                 item.id,
//                                 payment.term,
//                                 payment.status === "Paid" ? "Pending" : "Paid"
//                               )
//                             }
//                           >
//                             {payment.status}
//                           </button>
//                         </div>
//                       ))}
//                     </div>
//                 </td>
//                 <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
//                 {item.status}
//                 </td>
//               </tr>
  
//                ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//   </div>
//   </div>
//   </div>
  
//   )
// }

// export default page



'use client'
import { useAuth } from '@/app/context/AuthContext';
import withAuth from '@/hoc/withAuth';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { IoMdPrint } from 'react-icons/io';

type Payment = {
  id?: string;
  payment_status: string;
  service_name: string;
  amount: string;
  added_date:string;
  mobile:string;
  service_id: number;
  details: string;
  pay_amount:string;
  amount_total:string;
  pending_amount:string;
  payment_method:string;
  first_name:string;
 email:string;
};

      const page = ({ params }: { params: Promise<{ user_id: string }> }) => {
      const searchParams = useSearchParams();
   
  const { state } = useAuth();

  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [serviceId, setServiceId] = useState<string | undefined>(undefined);
  const [id, setId] = useState<string | undefined>(undefined);

  const [paymentData, setpaymentData] = useState<Payment[]>([]);
  const [userData, setuserData] = useState<Payment[]>([]);
  const [admissionData, setAdmissionData] = useState<Payment[]>([]);

  const [error, setError] = useState<string | null>(null);
  

  

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      setUserId(resolvedParams.user_id);
      setServiceId(searchParams.get("service_id") ?? undefined);
    };
  
    fetchParams();
  }, [params, searchParams]);
  
  useEffect(() => {
    if (userId && serviceId) {
      fetchpaymenthistory();
    }
  }, [userId, serviceId]);
  
  const fetchpaymenthistory = async () => {
    try {
      console.log("Fetching payment history with:", {
        id: userId,
        service_id: serviceId,
      });
  
      const response = await fetch('/api/admin/report/view_payment', {
        method: 'POST',
        headers: {
          'authorizations': state?.accessToken ?? '', 
          // 'authorizations': token ?? '',
          'api_key': '10f052463f485938d04ac7300de7ec2b', 
        },
        body: JSON.stringify({
          id: userId,
          service_id: serviceId,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `HTTP error! Status: ${response.status} - ${
            errorData.message || 'Unknown error'
          }`
        );
      }
  
      const data = await response.json();
      console.log(data, "data");
  
      if (data.success) {
        setpaymentData(data.data.payment_details);
        setuserData(data.data.user_details);
      } else {
        setError(data.msg || "Failed to fetch data");
      }
    } catch (error: any) {
      console.error("Fetch error:", error.message || error);
      setError(error.message || "Unknown error occurred");
    }
  };

  return (
  <div className="w-full pb-8">
 
 
    <div className="flex items-center space-x-4 py-5 lg:py-6 printnone">
    
          
       
    <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
    View Payment Details
    </h2>
    <div className="hidden h-full py-1 sm:flex">
      <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
    </div>
    <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
      <li className="flex items-center space-x-2">
        <a className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent" href="#">Home
        </a>
        
      </li>
     
    </ul>
    
  </div>



    <div  className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
   
  <div className="card px-4 pb-4 sm:px-5 mt-5">
 
  <div className="mt-5 ">
 
  <div className="flex justify-between p-4">
      <div>
        <p>Billed From</p>
       <div className="mt-4">
  <h6 className="font-bold">Neo MLM Software.</h6>
  <p>alathiyur
    <br />Tel No: 1111111111
    <br />Email: shaniba@gmail.com</p>
</div>

      </div>
      <div>
      <p>Billed To</p>
      {userData && (
     <div className="mt-4">
  <h6 className="font-bold">{userData.first_name}</h6>
  Tel No: {userData.mobile}
  <br />Email:{userData.email}<p />
</div>
  )}
      </div>

    </div>




  <div className="overflow-x-auto w-full">

  <table className="is-hoverable w-full text-left">
  <thead>
    <tr>
      <th className="whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
        SL No
      </th>
      <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
        Total Amount
      </th>
      <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
        Pay Amount
      </th>
      <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
        Due Amount
      </th>
      <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
        Payment Status
      </th>            
      <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
        Payment Method
      </th> 
      <th className="whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
        Date
      </th> 
    </tr>
  </thead>
  <tbody>
    {paymentData.map((item, index) => (
      <tr key={item.id} className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
        <td className="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5">
          {index + 1}
        </td>
        <td className="whitespace-nowrap px-4 py-3 sm:px-5">
          {item.amount_total}
        </td>
        <td className="whitespace-nowrap px-4 py-3 sm:px-5">
          {item.pay_amount}
        </td>
        <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
          {item.pending_amount}
        </td>
        <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
          {item.payment_status}
        </td>
        <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
          {item.payment_method}
        </td>
        <td className="whitespace-normal max-w-xs px-4 py-3 sm:px-5">
          {item.added_date}
        </td>
      </tr>
    ))}

    <tr>
      <td colSpan={2} className="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5">
        <strong>Total Payed Amount:</strong>
      </td>
      <td className="whitespace-nowrap px-4 py-3 sm:px-5 font-semibold">

     ₹  {paymentData.reduce((total, item) => total + (Number(item.pay_amount) || 0), 0)}
      </td>
      <td colSpan={4} className="whitespace-nowrap px-4 py-3 sm:px-5"></td>
    </tr>
  </tbody>
</table>

</div>

  
      </div>

      <div className="mt-3 flex justify-end">
 <button onClick={() => window.print()} className="printnone inline-flex items-center space-x-2 px-4 py-2 bg-[#dc3545] text-white rounded-md">
  <span>Print</span>
  <IoMdPrint />
</button>
  </div>
  </div>
   
  </div>
  </div>
  
  )
}

export default page
