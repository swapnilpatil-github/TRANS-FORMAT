import sharp from 'sharp';
import fs from 'fs';

const ImageController = {
  convert: async (req, res) => {
    try {
      const { file, body: { format } } = req;

      const convertedImageBuffer = await sharp(file.path).toFormat(format).toBuffer();

      res.set('Content-Type', `image/${format}`);
      res.set('Content-Disposition', `attachment; filename=converted.${format}`);

      res.send(convertedImageBuffer);

      
      await fs.promises.unlink(file.path);
    } catch (error) {
      // console.error('Error converting image:', error);

      if (!res.headersSent) {
        res.status(500).json({ error: 'Error converting image' });
      }
    }
  }
};

export default ImageController;
