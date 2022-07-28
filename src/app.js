const yargs = require('yargs');
const {sequelize} = require('./db/connection');
const {createMovie, findMovie, updateMovie, deleteMovie} = require('./movie/functions');

const app = async (yargsObj)=>{
    await sequelize.sync({ alter: true });
    if (yargsObj.create){
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
    else {console.log('Incorrect command');}

};

app(yargs.argv);