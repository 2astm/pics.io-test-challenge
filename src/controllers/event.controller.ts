import {Request, Response} from 'express';

export function event(req: Request, res: Response): Response {
    return res.json({message: "simple event endpoint"});
}