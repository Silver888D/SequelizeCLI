const Tv = require('./table');

exports.createTv= async(tvObj)=>{
    try{
        const newTv = await Tv.create(tvObj);
        console.log(newTv);
    }
    catch(error){console.log(error);}
};

exports.findTv = async(tvObj)=>{
    try{
        const TvFind = await Tv.findAll({where:{title: tvObj.title}});
        console.log(TvFind);
    }
    catch(error){console.log(error);}
};

exports.updateTv = async(tvObj)=>{
    try{
        
        await Tv.update({title: tvObj.newTitle, actor: tvObj.newActor},
            {where:{title: tvObj.title, actor: tvObj.actor}});
        
    }
    catch(error){console.log(error);}
};

exports.deleteTv= async(tvObj)=>{
    try{
        await Tv.destroy({where:{title: tvObj.title}});
    }
    catch(error){console.log(error);}
};