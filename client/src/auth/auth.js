import JWT from "jsonwebtoken";

class Auth {

    constructor(){
        this.authenticated = false
        this.token = null
        this.role = "" 
    }
    verif(){
        let token = localStorage.getItem('auth');
        if(token){
        this.authenticated = true;
        this.token = token
            return true}
    }
    login(token){
        this.authenticated = true;
        this.token = token
        let role = JWT.decode(token).isrole
        return role
    }

    logout(){
        localStorage.clear();
        this.authenticated = false;
        this.token = '';
        this.role = "";
    }
isAuthenticated(){
    return this.authenticated;
}
isUser(){
    if(this.token){
       let role = JWT.decode(this.token).isrole;
       return role==="user";
    }
    return false
}
isAdmin(){
    if(this.token){
       let role = JWT.decode(this.token).isrole;
       return role==="admin";
    }
    return false
}
isTeacher(){
    if(this.token){
       let role = JWT.decode(this.token).isrole;
       return role==="teacher";
    }
    return false
}
}

export default new Auth()
