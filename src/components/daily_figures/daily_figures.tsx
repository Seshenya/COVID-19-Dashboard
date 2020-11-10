import * as React from 'react';
import './daily_figures.css';
import { Card } from 'react-bootstrap';
import search from '../../assets/search.gif';
import death from '../../assets/death.gif';
import discharged from '../../assets/discharged.gif';

interface Props {
  dailyFiguresData: any
}

const DailyFigures: React.FunctionComponent<Props> = ({ dailyFiguresData }) => {

  return (
    <div className="dailyFigures">
      
      <Card className="dataCards">
      <h3>Daily Figures</h3>
        <Card className="dataCard1" >
          <Card.Body>
          <img className="img" src={search} alt="loading..." />
            <Card.Title className="title">New Cases</Card.Title>
            <Card.Text className="value">
              {dailyFiguresData && dailyFiguresData.numOfCasesDaily}
            </Card.Text>
            
          </Card.Body>
        </Card>
        <br />

        <Card className="dataCard1">
          <Card.Body>
          <img className="img2" src={death} alt="loading..." />
            <Card.Title className="title">Deaths</Card.Title>
            <Card.Text className="value">{dailyFiguresData && dailyFiguresData.numDeathsDaily}
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card className="dataCard1">
          <Card.Body>
          <img className="img" src={discharged} alt="loading..." />
            <Card.Title className="title">Recovered & Discharged</Card.Title>
            <Card.Text className="value">
              0
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        
        <Card.Footer>
          <small className="text-muted">Last Updated at: {dailyFiguresData && dailyFiguresData.lastUpdated}</small>
        </Card.Footer>
      </Card>
    </div>
  );

};

export default DailyFigures;


