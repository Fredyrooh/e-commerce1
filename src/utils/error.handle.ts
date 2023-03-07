import { Request, Response } from "express";

    const handleHttp = (res: Response, error: string, errorRaw?: any)=>{
    console.log("este es el errorRaw",errorRaw);
    res.status(500).send({error})
    }


export {handleHttp}