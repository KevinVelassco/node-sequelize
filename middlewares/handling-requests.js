function handlingRequests(body){
    return (req, res, next)=>{
        try{
            Object.keys(req.body).forEach(property => {
                if(!body.includes(property)) 
                    throw new Error("erroneous data is found when consuming the api, verify the documentation");
              });
              next();
        } catch(err){
            next(err);
        }       
    };
} 

module.exports = {
    handlingRequests 
}