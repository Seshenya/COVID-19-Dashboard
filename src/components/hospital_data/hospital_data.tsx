import * as React from 'react';
import ReactApexCharts from 'react-apexcharts';
import './hospital_data.css';

interface Props {
    hospitalData: any;
}


const HospitalData: React.FunctionComponent<Props> = ({hospitalData }) => {
    const localArray = hospitalData.numPatients.map((hosData: { cumulative_local: any; }) => hosData.cumulative_local);
    const foreigntArray = hospitalData.numPatients.map((hosData: { cumulative_foreign: any; }) => hosData.cumulative_foreign);
    const hospitalArray = hospitalData.numPatients.map((hosData: { hospital_id: any; }) => hosData.hospital_id);

    const graphData = {
      
        series: [{
          name: 'Local Patients',
          data: localArray
        }, {
          name: 'Foreign Patients',
          data: foreigntArray
        }],
        options: {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
              show: false
            },
            zoom: {
              enabled: true
            }
          },
          responsive: [{
            breakpoint: 1,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          xaxis: {
            type: 'number',
            categories: hospitalArray,
            title: {
              text: "Hospital ID",
              offsetX: 300,
              offsetY: 5,
              style: {
                  color: "blue",
                  fontSize: '10px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  cssClass: 'apexcharts-xaxis-title',
              },
          }
          },
          legend: {
            position: 'bottom',
            offsetY: 5
          },
          fill: {
            opacity: 1
          }
        },
      
      
    };

    return (
        <div id="chart">
            <h2 className="title">Patients Treated for COVID-19 </h2>
            <ReactApexCharts options={graphData.options} series={graphData.series} type="bar" height={350} />
        </div>
    );
}

export default HospitalData;
    

    



// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);