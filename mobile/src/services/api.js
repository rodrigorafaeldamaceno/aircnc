import axios from 'axios';
import { IP, PORT } from '../config/ip'


const api = axios.create({
  baseURL: `http://${IP}:${PORT}`,
});

export default api;