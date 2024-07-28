import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';


const VideoController = {
  convert: async (req, res) => {
    try {
      const { file, body: { format } } = req;
      const inputFilePath = file.path;

      // Generate output file path and name
      const originalFileName = path.parse(file.originalname).name; // Original filename without extension
      const outputFileName = `${originalFileName}.${format}`; // New filename with selected format extension
      const outputFilePath = path.join('uploads', outputFileName); // Output file path

      // Execute ffmpeg command to convert the file
      exec(`ffmpeg -i ${inputFilePath} -c:v copy -c:a copy ${outputFilePath}`, async (error, stdout, stderr) => {
        if (error) {
          console.error('Error converting file:', stderr);
          res.status(500).json({ error: 'Error converting file' });
          return;
        }

        try {
          // Read the converted file
          const fileBuffer = await fs.promises.readFile(outputFilePath);

          // Set headers for the response
          res.setHeader('Content-Disposition', `attachment; filename=${outputFileName}`);
          res.setHeader('Content-Type', `video/${format}`);
          res.send(fileBuffer);
        } catch (err) {
          console.error('Error reading converted file:', err);
          res.status(500).json({ error: 'Error reading converted file' });
        } finally {
          // Cleanup: Delete temporary files
          await fs.promises.unlink(inputFilePath);
          await fs.promises.unlink(outputFilePath);
        }
      });
    } catch (error) {
      console.error('Error converting file:', error);
      res.status(500).json({ error: 'Error converting file' });
    }
  }
};

export default VideoController;
