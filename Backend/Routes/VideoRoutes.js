import { Router } from 'express';
import VideoController from '../Controllers/VideoController.js'; 

const VideoRouter = Router();


VideoRouter.post('/convert', VideoController.convert);

export default VideoRouter;
