import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import ImageRouter from './Routes/ImageRoutes.js'; 
import AudioRouter from './Routes/AudioRoutes.js';
import VideoRouter from './Routes/VideoRoutes.js';

import multer from 'multer';
import path from 'path';


import session from 'express-session';
import passport from './config/passport.js'; 
import authRoutes from './Routes/authRoutes.js'; 


const app = express();
const PORT = process.env.PORT || 5000;

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

app.use('/auth', authRoutes);



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    
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
