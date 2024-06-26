import { Router } from 'express';
import VideoController from '../Controllers/VideoController.js'; // Adjust the path based on your actual folder structure

const VideoRouter = Router();


VideoRouter.post('/convert', VideoController.convert);

export default VideoRouter;
