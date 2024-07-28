import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ImageRouter from './Routes/ImageRoutes.js'; // Adjust the path based on your actual folder structure
import AudioRouter from './Routes/AudioRoutes.js';
import VideoRouter from './Routes/VideoRoutes.js';

import multer from 'multer';
import path from 'path';


import session from 'express-session';
import passport from './config/passport.js'; // Adjust the path if necessary
import authRoutes from './Routes/authRoutes.js'; // Adjust the path if necessary




const app = express();
const PORT = 5000;

// Increase payload size limit
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));


// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());







app.use(cors());

// Authentication routes
app.use('/auth', authRoutes);


// Register routes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    // Corrected the filename generation
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Multer instance
const upload = multer({ storage: storage });
app.use('/image',upload.single('file'),ImageRouter)
app.use('/video',upload.single('file'),VideoRouter)

app.use('/audio',upload.single('file'),AudioRouter)


app.listen(PORT, () => {
  console.log(`App is running successfully on port ${PORT}`);
});
