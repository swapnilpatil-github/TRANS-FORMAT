import { Router } from 'express';
import AudioController from '../Controllers/AudioController.js'; // Adjust the path based on your actual folder structure

const AudioRouter = Router();


AudioRouter.post('/convert', AudioController.convert);

export default AudioRouter;
