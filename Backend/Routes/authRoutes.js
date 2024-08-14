import express from 'express';
import passport from 'passport';
import cors from 'cors';

const router = express.Router();

app.use(cors());

// Route for initiating Google OAuth authentication
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

// Route for handling Google OAuth callback
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect to home page or desired route
    res.redirect(`https://trans-format.vercel.app/home`);
  });

// Route for logging out
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');  // Redirect to the login page or home page
});

export default router;
