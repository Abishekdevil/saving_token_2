const jwt= require('jsonwebtoken')

const SECRET_KEY='coders';

const payload={
  ID:1,
  Name:'Rocky'
};

const token=jwt.sign(payload,SECRET_KEY,{expiresIn:'20s'});
console.log("JWT generated : ",token);

setTimeout(()=>{
  try{
    const decode=jwt.verify(token,SECRET_KEY);
    console.log("Token is valid")
  }
  catch(err){
    if(err.name==='TokenExpiredError'){
      console.error('Token has expired')
    }else{
      console.error('Invalid Token',err.message)
    }
  }
},25000)