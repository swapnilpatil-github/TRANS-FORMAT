import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const AudioController = {
  convert: async (req, res) => {
    try {
      const { file, body: { format } } = req;
      const inputFilePath = file.path;

      // Generate output file name based on original file name and desired format
      const originalFileName = path.parse(file.originalname).name; // Get original filename without extension
      const outputFileName = `${originalFileName}.${format}`; // Append desired format extension
      const outputFilePath = path.join('uploads', outputFileName);

      // Execute ffmpeg command to convert the file
      exec(`ffmpeg -i ${inputFilePath} ${outputFilePath}`, async (error, stdout, stderr) => {
        if (error) {
          console.error('Error executing ffmpeg command:', error);
          console.error('ffmpeg stderr:', stderr);
          res.status(500).json({ error: 'Error converting file' });
          return;
        }

        try {
          // Read the converted file
          const fileBuffer = await fs.promises.readFile(outputFilePath);

          // Set headers for the response
          res.setHeader('Content-Disposition', `attachment; filename=${outputFileName}`);
          res.setHeader('Content-Type', `audio/${format}`);
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

export default AudioController;
