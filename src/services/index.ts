import axios from 'axios';

const getData = async (): Promise<any> => {
  const data = await axios('https://hpb.health.gov.lk/api/get-current-statistical');
  return data.data;
}

export default getData;
