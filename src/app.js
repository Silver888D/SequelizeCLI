const yargs = require('yargs');
const {sequelize} = require('./db/connection');
const {createMovie, findMovie, updateMovie, deleteMovie} = require('./movie/functions');
const { createTv, findTv, updateTv, deleteTv } = require('./tv/functions');
const { login } = require('./user/functions');

const app = async (yargsObj)=>{
    await sequelize.sync({ alter: true });
    if (yargsObj.create){
        await login({name: yargsObj.name, password: yargsObj.password});
        await createMovie({title: yargsObj.title, actor: yargsObj.actor});
    }
    else if (yargsObj.read){
        await findMovie({title: yargsObj.title});
    }
    else if (yargsObj.update){
        await updateMovie({title: yargsObj.title, actor: yargsObj.actor, newTitle: yargsObj.newTitle, newActor: yargsObj.newActor})
    }
    else if (yargsObj.delete){
        await deleteMovie({title: yargsObj.title});
        
    }
    else if (yargsObj.createTV){
        await createTv({title: yargsObj.title, actor: yargsObj.actor});
    }
    else if (yargsObj.readTV){
        await findTv({title: yargsObj.title});
    }
    else if (yargsObj.updateTV){
        await updateTv({title: yargsObj.title, actor: yargsObj.actor, newTitle: yargsObj.newTitle, newActor: yargsObj.newActor})
    }
    else if (yargsObj.deleteTV){
        await deleteTv({title: yargsObj.title});
        
    }
    else {console.log('Incorrect command');}

};

app(yargs.argv);