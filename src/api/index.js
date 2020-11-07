import Axios from "axios";

export const checkUser = (email, password) => Axios.post('/api/user',{email:email,password:password})
    
