import {Request, Response} from 'express';
import {User} from '../models/user.model';
import bcrypt from 'bcryptjs';
import {generateToken} from '../utils/generateToken';
import {registerSchema, loginSchema} from '../utils/validation';

// Register
export const register = async (req: Request, res: Response) => {
    try {

        const result = registerSchema.safeParse(req.body);
        if(!result.success) {
            return res.status(400).json({
                message: 'Validation failed',
                errors: result.error.issues.map(err => err.message),
            });
        }

        const {name, email, password} = result.data;

        const userExists = await User.findOne({email});
        if(userExists) {
            return res.status(400).json({message: 'User already exists'});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

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

// Login
export const login = async (req: Request, res: Response) => {
    try {

        const result = loginSchema.safeParse(req.body);
        if(!result.success) {
            return res.status(400).json({
                message: 'Validation failed',
                errors: result.error.issues.map(err => err.message),
            });
        }

        const {email, password} = result.data;

        const user = await User.findOne({email}).select('+password');

        if(user && (await bcrypt.compare(password, user.password))) {

            generateToken(res, user._id.toString());

            res.status(200).json({
                message: 'Logged in successfully',
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }
            });
        }else{
            res.status(401).json({
                message: 'Invalid email or password'
            });
        }
    }catch(error) {
        res.status(500).json({
            message: 'Server Error',
            error: (error as Error).message
        });
    }
};

// Logout
export const logout = (req: Request, res: Response) => {
    // delete cookie
    res.cookie('jwt',"",{
        httpOnly: true,
        expires: new Date(0),
    });

    res.status(200).json({
        message: "Logged out successfully"
    });
};