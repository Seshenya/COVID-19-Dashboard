import * as React from 'react';
import TotalFigures from '../components/total_figures/total_figures';
import DailyFigures from '../components/daily_figures/daily_figures'
import getData from '../services';
import PcrTests from '../components/pcr_tests/pcr_tests';
import HospitalData from '../components/hospital_data/hospital_data'

  interface Props { 
  }

  const MainContainer: React.FunctionComponent<Props> = () => {
    const [totalFiguresData, setTotalFiguresData] = React.useState<any>();
    const [dailyFiguresData, setDailyFiguresData] = React.useState<any>();
    const [pcrTestData, setPcrTestData] = React.useState<any>();
    const [hospitalData, sethospitalData] = React.useState<any>();
    
  
    const fetchData = async (): Promise<void> => {
      const all_data = await getData();      
      if(all_data)  {
        setTotalFiguresData({numDeaths: all_data.data.local_deaths, numOfCases: all_data.data.local_total_cases, numRecovered: all_data.data.local_recovered, numHospitalized: all_data.data.local_total_number_of_individuals_in_hospitals, lastUpdated: all_data.data.update_date_time }); 
        setDailyFiguresData({numDeathsDaily: all_data.data.local_new_deaths, numOfCasesDaily: all_data.data.local_new_cases, numRecoveredDaily: all_data.data.local_recovered,lastUpdated: all_data.data.update_date_time });
        setPcrTestData({numPcrDaily: all_data.data.daily_pcr_testing_data,lastUpdated: all_data.data.update_date_time }); 
        sethospitalData({numPatients: all_data.data.hospital_data,lastUpdated: all_data.data.update_date_time });
      }
      
      
      
    };  
  
    React.useEffect(() => {
      fetchData()
    }, []);
  
    if(totalFiguresData && dailyFiguresData && pcrTestData && hospitalData){
      return (
        <div className="MainContainer">
          <div className="cards1">
            <TotalFigures totalFiguresData={totalFiguresData} />
            <DailyFigures dailyFiguresData={dailyFiguresData} />
          </div>
          <div className="cards2">
          <div className="cards3">
          <PcrTests  pcrTestData={pcrTestData}/>
          </div>
          <div className="cards3">
          <HospitalData hospitalData={hospitalData}/>
          </div>
          </div>
          
        </div>
      );
    } else {
      return (<></>);
    }
  

  
  };
  
  export default MainContainer;
  

