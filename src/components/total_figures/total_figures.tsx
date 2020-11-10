import * as React from 'react';
import './total_figures.css';
import { Card } from 'react-bootstrap';
import search from '../../assets/search.gif';
import death from '../../assets/death.gif';
import discharged from '../../assets/discharged.gif';
import hospitalized from '../../assets/hospitalized.gif';

interface Props {
  totalFiguresData: any
}

const TotalFigures: React.FunctionComponent<Props> = ({ totalFiguresData }) => {

  return (
    <div className="totalFigures">

      <Card className="dataCards">
        <h3>Total Figures</h3>
        <Card className="dataCard" >
          <Card.Body>
          <img className="img" src={search} alt="loading..." />
            <Card.Title className="title">Total Confirmed Cases</Card.Title>
            <Card.Text className="value">
              {totalFiguresData && totalFiguresData.numOfCases}
            </Card.Text>

          </Card.Body>
        </Card>
        <br />

        <Card className="dataCard">
          <Card.Body>
          <img className="img2" src={death} alt="loading..." />
            <Card.Title className="title">Deaths</Card.Title>
            <Card.Text className="value">{totalFiguresData && totalFiguresData.numDeaths}
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card className="dataCard">
          <Card.Body>
          <img className="img" src={discharged} alt="loading..." />
            <Card.Title className="title">Recovered & Discharged</Card.Title>
            <Card.Text className="value">
              {totalFiguresData && totalFiguresData.numRecovered}

            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card className="dataCard">
          <Card.Body>
          <img className="img" src={hospitalized} alt="loading..." />
            <Card.Title className="title">Suspected & Hospitalized</Card.Title>
            <Card.Text className="value">{totalFiguresData && totalFiguresData.numHospitalized}
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card.Footer>
          <small className="text-muted">Last Updated at: {totalFiguresData && totalFiguresData.lastUpdated}</small>
        </Card.Footer>
      </Card>
    </div>
  );

};

export default TotalFigures;


