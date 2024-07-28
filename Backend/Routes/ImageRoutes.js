import { Router } from 'express';
import ImageController from '../Controllers/ImageController.js'; 

const ImageRouter = Router();


ImageRouter.post('/convert', ImageController.convert);

export default ImageRouter;
