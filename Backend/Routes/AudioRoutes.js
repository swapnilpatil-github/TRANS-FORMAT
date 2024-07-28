import { Router } from 'express';
import AudioController from '../Controllers/AudioController.js'; 
const AudioRouter = Router();


AudioRouter.post('/convert', AudioController.convert);

export default AudioRouter;
