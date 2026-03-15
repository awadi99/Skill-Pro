export const validate = (schema)=>{
    console.log("Validation middleware running");
    return(req,res,next)=>{
        const {error} = schema.validate(req.body,{aboutEarly:false});
        if(error){
            return  res.status(400).json({
                message:error.details[0].message
            });
        }
        next();
    };
};