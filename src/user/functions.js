const User = require('./table');

exports.signIn= async(userObj)=>{
    try{
        const newUser = await User.create(userObj);
        console.log(newUser);
    }
    catch(error){console.log(error);}
};
