import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { logout } = useAuth0();
  const [selectedAge, setSelectedAge] = useState("15-25");
  const [selectedGender, setSelectedGender] = useState("Male");

  const data = [
    {
      Day: "4/10/2022",
      Age: "15-25",
      Gender: "Male",
      A: 324,
      B: 901,
      C: 566,
      D: 589,
      E: 298,
      F: 590,
    },
    {
      Day: "4/10/2022",
      Age: "25",
      Gender: "Male",
      A: 180,
      B: 976,
      C: 102,
      D: 598,
      E: 780,
      F: 264,
    },
    {
      Day: "4/10/2022",
      Age: "15-25",
      Gender: "Female",
      A: 287,
      B: 860,
      C: 430,
      D: 620,
      E: 250,
      F: 580,
    },
    {
      Day: "4/10/2022",
      Age: "25",
      Gender: "Female",
      A: 190,
      B: 960,
      C: 120,
      D: 560,
      E: 740,
      F: 250,
    },
    {
      Day: "5/10/2022",
      Age: "15-25",
      Gender: "Male",
      A: 310,
      B: 880,
      C: 550,
      D: 600,
      E: 300,
      F: 560,
    },
    {
      Day: "5/10/2022",
      Age: "25",
      Gender: "Male",
      A: 200,
      B: 950,
      C: 100,
      D: 590,
      E: 770,
      F: 270,
    },
    {
      Day: "5/10/2022",
      Age: "15-25",
      Gender: "Female",
      A: 270,
      B: 830,
      C: 400,
      D: 630,
      E: 260,
      F: 570,
    },
    {
      Day: "5/10/2022",
      Age: "25",
      Gender: "Female",
      A: 195,
      B: 945,
      C: 115,
      D: 570,
      E: 750,
      F: 255,
    },
    {
      Day: "6/10/2022",
      Age: "15-25",
      Gender: "Male",
      A: 330,
      B: 890,
      C: 540,
      D: 610,
      E: 310,
      F: 580,
    },
    {
      Day: "6/10/2022",
      Age: "25",
      Gender: "Male",
      A: 210,
      B: 940,
      C: 110,
      D: 580,
      E: 760,
      F: 280,
    },
    {
      Day: "6/10/2022",
      Age: "15-25",
      Gender: "Female",
      A: 260,
      B: 810,
      C: 420,
      D: 640,
      E: 270,
      F: 590,
    },
    {
      Day: "6/10/2022",
      Age: "25",
      Gender: "Female",
      A: 185,
      B: 935,
      C: 125,
      D: 550,
      E: 740,
      F: 260,
    },
    {
      Day: "7/10/2022",
      Age: "15-25",
      Gender: "Male",
      A: 340,
      B: 920,
      C: 530,
      D: 620,
      E: 320,
      F: 600,
    },
    {
      Day: "7/10/2022",
      Age: "25",
      Gender: "Male",
      A: 220,
      B: 930,
      C: 120,
      D: 570,
      E: 750,
      F: 290,
    },
    {
      Day: "7/10/2022",
      Age: "15-25",
      Gender: "Female",
      A: 250,
      B: 800,
      C: 430,
      D: 650,
      E: 280,
      F: 600,
    },
    {
      Day: "7/10/2022",
      Age: "25",
      Gender: "Female",
      A: 175,
      B: 925,
      C: 135,
      D: 540,
      E: 730,
      F: 270,
    },
    {
      Day: "8/10/2022",
      Age: "15-25",
      Gender: "Male",
      A: 350,
      B: 910,
      C: 520,
      D: 630,
      E: 330,
      F: 610,
    },
    {
      Day: "8/10/2022",
      Age: "25",
      Gender: "Male",
      A: 230,
      B: 920,
      C: 130,
      D: 560,
      E: 740,
      F: 300,
    },
    {
      Day: "8/10/2022",
      Age: "15-25",
      Gender: "Female",
      A: 240,
      B: 790,
      C: 440,
      D: 660,
      E: 290,
      F: 610,
    },
    {
      Day: "8/10/2022",
      Age: "25",
      Gender: "Female",
      A: 165,
      B: 915,
      C: 145,
      D: 530,
      E: 720,
      F: 280,
    },
  ];

  // Filter based on selected age and gender
  const filteredData = data.filter(
    (entry) => entry.Age === selectedAge && entry.Gender === selectedGender
  );

  // Prepare chart data
  const chartData = {
    labels: filteredData.map((entry) => entry.Day),
    datasets: [
      {
        label: "A",
        data: filteredData.map((entry) => entry.A),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
      {
        label: "B",
        data: filteredData.map((entry) => entry.B),
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
      },
      {
        label: "C",
        data: filteredData.map((entry) => entry.C),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "D",
        data: filteredData.map((entry) => entry.D),
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
      {
        label: "E",
        data: filteredData.map((entry) => entry.E),
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        fill: true,
      },
      {
        label: "F",
        data: filteredData.map((entry) => entry.F),
        borderColor: "rgba(255, 205, 86, 1)",
        backgroundColor: "rgba(255, 205, 86, 0.2)",
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      x: { title: { display: true, text: "Date" } },
      y: { title: { display: true, text: "Values" } },
    },
  };

  return (
    <div className="bg-slate-900 h-screen  p-5">
      <div className="h-[100px] flex items-center justify-center">
        <h1 className="text-white font-bold text-3xl text-center">
          Dashboard Visualization
        </h1>
      </div>
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
      <div className="flex justify-center gap-5 my-5">
        <select
          className="px-4 py-2 rounded-md border-2 border-slate-700 text-white bg-slate-800"
          onChange={(e) => setSelectedAge(e.target.value)}
          value={selectedAge}
        >
          <option value="15-25">15-25</option>
          <option value="25">25</option>
        </select>
        <select
          className="px-4 py-2 rounded-md border-2 border-slate-700 text-white bg-slate-800"
          onChange={(e) => setSelectedGender(e.target.value)}
          value={selectedGender}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <br /><br />
      <div className="bg-slate-800 w-[100%] md:m-auto  md:w-[50%] p-5 rounded-lg shadow-md ">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default Dashboard;
