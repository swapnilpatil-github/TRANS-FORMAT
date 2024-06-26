import { Router } from 'express';
import ImageController from '../Controllers/ImageController.js'; // Adjust the path based on your actual folder structure

const ImageRouter = Router();


ImageRouter.post('/convert', ImageController.convert);

export default ImageRouter;
