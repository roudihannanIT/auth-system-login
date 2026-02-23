import { Router } from "express";
import {register, login, logout} from '../controllers/auth.controller';
import {protect} from '../middlewares/auth.middleware'

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

router.get('/profile', protect, (req: any, res) => {
    res.json(req.user);
});

export default router;