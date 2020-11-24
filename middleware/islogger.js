const jwt = require("jsonwebtoken")
module.exports = {
  isadmin: function(req,res,next){
    if (!req.headers.authorization) {
      return res.status(403).json({ error: 'user no conncté' });
    }  
  
    var decoded = jwt.verify(req.headers.authorization, process.env.SECRET_KEY).isrole
  if(decoded ==! 'admin')
  {
  return res.status(403).json({ error: 'user no autoriser' });
  }

   
        next();
      
    
  
  },
  isuser: function(req,res,next){
    if (!req.headers.authorization) {
      return res.status(403).json({ error: 'user no conncté' });
    }  
  
    var decoded = jwt.verify(req.headers.authorization, process.env.SECRET_KEY).isrole
  if(decoded ==! 'user')
  {
  return res.status(403).json({ error: 'user no autoriser' });
  }

   
        next();
      
    
  
  },


   islogger :function(req, res, next) {

    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'user no conncté' });
      } 
      next();
}





};