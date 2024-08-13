import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';


const VideoController = {
  convert: async (req, res) => {
    try {
      const { file, body: { format } } = req;
      const inputFilePath = file.path;

      
      const originalFileName = path.parse(file.originalname).name; 
      const outputFileName = `${originalFileName}.${format}`; 
      const outputFilePath = path.join('uploads', outputFileName); 

      exec(`ffmpeg -i ${inputFilePath} -c:v copy -c:a copy ${outputFilePath}`, async (error, stdout, stderr) => {
        if (error) {
          // console.error('Error converting file:', stderr);
          res.status(500).json({ error: 'Error converting file' });
          return;
        }

        try {
         
          const fileBuffer = await fs.promises.readFile(outputFilePath);

         
          res.setHeader('Content-Disposition', `attachment; filename=${outputFileName}`);
          res.setHeader('Content-Type', `video/${format}`);
          res.send(fileBuffer);
        } catch (err) {
          // console.error('Error reading converted file:', err);
          res.status(500).json({ error: 'Error reading converted file' });
        } finally {
        
          await fs.promises.unlink(inputFilePath);
          await fs.promises.unlink(outputFilePath);
        }
      });
    } catch (error) {
      // console.error('Error converting file:', error);
      res.status(500).json({ error: 'Error converting file' });
    }
  }
};

export default VideoController;
