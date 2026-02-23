import jwt from 'jsonwebtoken';
import {Request, Response, NextFunction} from 'express';
import {User} from '../models/user.model';

interface AuthRequest extends Request {
    user?: any;
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
    let token;

    // 1. read token from cookie
    token = req.cookies.jwt;

    if(token){
        try {
            // 2. check cookie
            const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string);

            // 3. get user data without pass
            req.user = await User.findById(decoded.userId).select('-password');

            next();
        }catch(error) {
            res.status(401).json({
                message: 'Not authorized, token failed'
            });
        }
    }else {
        res.status(401).json({
            message: 'Not authorized, no token'
        });
    }
};