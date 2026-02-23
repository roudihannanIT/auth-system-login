import {Request, Response} from 'express';
import {User} from '../models/user.model';
import bcrypt from 'bcryptjs';

export const register = async (req: Request, res: Response) => {
    try {
        const {name, email, password} = req.body;

        // 1. if user already exists
        const userExists = await User.findOne({email});
        if(userExists) {
            return res.status(400).json({message: 'User already exists'});
        }

        // 2. hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // 3. create user and save
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    }catch(error) {
        res.status(500).json({
            message: 'Server Error',
            error: (error as Error).message
        });
    }
};

