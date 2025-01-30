


// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// export default function ChartPage({ data }: { data: any }) {

//   console.log('Data:', data);
//  if (!data || !data.income || !data.expense || !data.profit || !data.months) {
//   console.error("Invalid data received:", data);
//   return <div>Error: Invalid chart data.</div>;
// }

//   const incomeData = data.income.replace(/'/g, '').split(',').map(Number);
//   const expenseData = data.expense.replace(/'/g, '').split(',').map(Number);
//   const profitData = data.profit.replace(/'/g, '').split(',').map(Number);
//   const months = data.months.replace(/'/g, '').split(',');

//  const chartData = {
//     labels:months,
//     datasets: [
//       {
//         label: "Income",
//         data: incomeData, 
//         backgroundColor: "#007bff",
//       },
//       {
//         label: "Expense",
//         data: expenseData,  
//         backgroundColor: "#dc3545",
//       },
//       {
//         label: "Profit",
//         data: profitData,
//         backgroundColor: "#ffc107",
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: { 
//         position: 'top' ,
//         align: 'start',
//         labels: {
//           font: {
//             size: 14, // Increase the font size of the legend labels (Income, Expense, Profit)
//           },
//           padding: 20, 
//         },
//       },
   
//     },
//     scales: {
//       x: { stacked: false },
//       y: { 
//         stacked: false,
//         ticks: {
//           stepSize: 50,
//           min: 50,
//           max: 200,
//         },
//       },
//     },
//   };

//   return (
//     <div className="card-body">
//       <Bar data={chartData} options={options} height={100}/>
//     </div>
//   );
// };

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

type ChartPageProps = {
  data: {
    income: string;
    expense: string;
    profit: string;
    months: string;
  };
};

export default function ChartPage({ data }: ChartPageProps) {
  console.log('Data:', data);
  if (!data || !data.income || !data.expense || !data.profit || !data.months) {
    console.error("Invalid data received:", data);
    return <div>Error: Invalid chart data.</div>;
  }

  const incomeData = data.income.replace(/'/g, '').split(',').map(Number);
  const expenseData = data.expense.replace(/'/g, '').split(',').map(Number);
  const profitData = data.profit.replace(/'/g, '').split(',').map(Number);
  const months = data.months.replace(/'/g, '').split(',');

  const chartData = {
    labels: months,
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
      legend: {
        position: 'top' as const, // Ensure 'top' is treated as a literal type
        align: 'start' as const,   // Change align to 'start', 'center', or 'end'
        labels: {
          font: {
            size: 14,
          },
          padding: 20,
        },
      },
    },
    scales: {
      x: {
        type: 'category',
        stacked: false,
      },
      y: {
        type: 'linear',
        stacked: false,
        min: 50,
        max: 200,
        ticks: {
          stepSize: 50,
        },
      },
    },
  };
  
  

  return (
    <div className="card-body">
      <Bar data={chartData} options={options} height={100} />
    </div>
  );
};


