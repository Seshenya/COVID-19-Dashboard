import * as React from 'react';
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import './pcr_tests.css';

interface Props {
    pcrTestData: any;
}

const PcrTests: React.FunctionComponent<Props> = ({pcrTestData }) => {
    const dateArray = pcrTestData.numPcrDaily.map((pcr: { date: any; }) => pcr.date);
    const countArray = pcrTestData.numPcrDaily.map((pcr: { count: any; }) => pcr.count);

   const graphData =  { 
    dataLine: {
      labels: dateArray,
      datasets: [
        {
          label: "No of PCR Tests",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "transparent",
          borderColor: "rgb(102, 0, 204)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(204, 0,102 )",
          pointBackgroundColor: "rgb(204, 229, 255)",
          pointBorderWidth: 0,
          pointHoverRadius: 1,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 1,
          pointRadius: 1,
          pointHitRadius: 10,
          data: countArray
        }
      ]
    }
  }
   
   
  return (
    <MDBContainer>
    <h2 className="title">Daily PCR Tests</h2>
    <Line data={graphData.dataLine} options={{ responsive: true }} />
  </MDBContainer>
  );

};

export default PcrTests;


