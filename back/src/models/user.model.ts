import mongoose, {Schema} from "mongoose";

export interface IUser {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

const userSchema = new Schema<IUser> ({
    name: {
        type: String,
        required: [true, 'Please add your name'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true, 
        lowercase: true,
        match: [/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/, 'Please add a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minLength: 6,
        select: false
    }
},{
    timestamps: true
});

export const User = mongoose.model<IUser>('User', userSchema);