import sharp from 'sharp';
import fs from 'fs';

const ImageController = {
  convert: async (req, res) => {
    try {
      const { file, body: { format } } = req;

      // Process the image conversion using Sharp
      const convertedImageBuffer = await sharp(file.path).toFormat(format).toBuffer();

      // Set response headers
      res.set('Content-Type', `image/${format}`);
      res.set('Content-Disposition', `attachment; filename=converted.${format}`);

      // Send converted image as response
      res.send(convertedImageBuffer);

      //clean up
      fs.unlinkSync(file.path);
    } catch (error) {
      console.error('Error converting image:', error);
      res.status(500).json({ error: 'Error converting image' });
    }
  }
};

export default ImageController;



