import axios from 'axios';

const host = 'https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp/';

const http = axios.create({
  baseURL: host,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getData = async () => {
  const res = await http.get(host);

  return res.data;
};

export default getData;
