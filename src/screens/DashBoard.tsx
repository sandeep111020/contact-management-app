import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

export const data2 = [
  ["Year", "Sales"],
  ['1/22/20', 557],
   ['1/23/20', 657],
   ['1/24/20', 944],
   ['1/25/20', 1437]
];


export const options = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};

 const Dashboard=()=> {
  const [data,setData] = useState();
  const fetchUserData = () => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then(response => {
        return response.json()
      })
      .then(item => {

        
        const updated =  {"Date": "Cases", ...item.cases};

        const cases=Object.entries(updated);
        console.log('arr',updated);
        setData(cases);
      })
  }

  useEffect(() => {
    fetchUserData()
  }, [])
  
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
export default Dashboard;