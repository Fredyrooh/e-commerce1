import { NextFunction, Request, Response } from "express";

const checkJwt = (req: Request, res: Response, next: NextFunction) =>{
    try{

    }catch(error){
        res.status(400)
        res.send('SESSION_NO_VALID')
    }
}