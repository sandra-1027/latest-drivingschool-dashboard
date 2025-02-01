


import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


  export default function Chart({ data }: { data: any }) {
  console.log('Data:', data);

//  if (!data || !data.income || !data.expense || !data.profit || !data.months) {
//   console.error("Invalid data received:", data);
//   return <div>Error: Invalid chart data.</div>;
// }


  const incomeData = data.income;
  const expenseData = data.expense;
  const profitData = data.profit;
  const months = data.months;



  const chartData = {
    // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels:months,
    datasets: [
      {
        label: "Income",
        data: incomeData, 
        backgroundColor: "#007bff",
      },
      {
        label: "Expense",
        data: expenseData,  
        backgroundColor: "#dc3545",
      },
      {
        label: "Profit",
        data: profitData,
        backgroundColor: "#ffc107",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" ,
        align: "start",
        labels: {
          font: {
            size: 14, // Increase the font size of the legend labels (Income, Expense, Profit)
          },
          padding: 20, 
        },
      },
      // title: { display: true, 
      //   text: "Accounts Overview",
      //   font: {
      //     size: 20, // Increase the font size (you can adjust this value)
    
      //   },
      //   align: "start",
      // },

    },
    scales: {
      x: { stacked: false },
      y: { 
        stacked: false,
        ticks: {
          stepSize: 50,
          min: 50,
          max: 200,
        },
      },
    },
  };

  return (
    <div className="card-body">
       {/* <div className="total-revenue">
         <div><label><span className="bg-primary" /> Income</label></div>
        <div><label><span className="bg-danger" /> Expense</label></div>
         <div><label><span className="bg-warning" /> Profit</label></div>
       </div> */}


{/* <h6 className="text-xl font-semibold text-slate-700 dark:text-navy-100">Accounts Overview</h6> */}

      <Bar data={chartData} options={options} height={100}/>


      {/* {chartData ? (
 
 <Bar data={chartData} options={options} height={100}/> 
) : (
 <div className="p-4 w-full flex items-center justify-center">
   <p className="text-gray-500 dark:text-gray-300 text-lg">
     No details found
   </p>
 </div>
)} */}

    </div>
  );
};














