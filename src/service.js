import axios from "axios";

const url= 'http://localhost:8080/api/todos';

export const createuser=(user)=>axios.post(url+'http://localhost:3000/api/todos',user);