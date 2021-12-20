import { Box, Typography } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  const d = new Date();

  return (
    <div>
      <Box className="Home__Box" textAlign="center">
        <TwitterIcon fontSize="large" color="primary" sx={{ mx: 2, my: 2 }} />
        <FacebookIcon fontSize="large" color="primary" sx={{ mx: 2, my: 2 }} />
        <p className="footer-text">
          Made with <span className="footer-heart">❤</span> by Kartik Jolapara
        </p>
        <Typography variant="body1" mb={4}>
          Copyright &copy; {d.getFullYear()}
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
