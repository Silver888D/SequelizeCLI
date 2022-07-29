const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./table');


let signIn= async(userObj)=>{
    let salt = bcrypt.genSaltSync(1);
    bcrypt.hash(userObj.password, salt).then(
        (hash)=>{
            const newUser = User.create({
                name: userObj.name, password: hash
            });
            newUser.save().then(
                ()=>{
                    console.log('User added');
                }).catch(
                    (error)=>{console.log(error);}
                    )})}


// let checkUser = async(userObj)=>{
//     try{let currentUser = User.findOne({where:{name: userObj.name, password: userObj.password}});
//     if (currentUser) resolve(true);
//     resolve(false);}
//     catch(error){console.log(error);}}


//     let userExist = await checkUser(userObj);
//     if(userExist){resolve('User exists')}
//     else{


exports.login= async(userObj)=>{
    User.findOne({name: userObj.name}).then(
        (user)=>{if(!user){signIn(userObj)}
        bcrypt.compare(userObj.password, user.password).then(
            (valid)=>{
                if(!valid){
                    return console.log({error: new Error('Incorrect Pasword!')});}
                    const token = jwt.sign({userId: user.id},'RANDOM_TOKEN_SECRET',{expiresIn: '24h'});
                    console.log({userId: user.id, token: token});}
                    ).catch((error)=>{console.log(error);});
    })};