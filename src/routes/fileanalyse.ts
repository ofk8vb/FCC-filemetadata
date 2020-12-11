import express,{Request,Response} from 'express';


const router = express.Router();

router.post('/api/fileanalyse',(req:Request,res:Response)=>{
    try{
        if(!req.files){
            res.send({
                status: false,
                message: 'No file uploaded'
            })
        }else{
            //@ts-ignore
            let upfile = req.files.upfile;
            upfile.mv('./uploads/'+upfile.name);

            res.send({
                name: upfile.name,
                type: upfile.mimetype,
                size: upfile.size
                
            })
        }
    }catch(err){
        res.status(500).send(err);
    }
    
})

export {router as FileAnalyzeRouter}