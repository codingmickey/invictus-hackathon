import { Box, Typography } from '@mui/material';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const HomeFooter = () => {
  const d = new Date();

  return (
    <div>
      <Box className="Home__Box" mt={6} pb={4} textAlign="center">
        <TwitterIcon fontSize="large" color="primary" sx={{ mx: 2, my: 2 }} />
        <FacebookIcon fontSize="large" color="primary" sx={{ mx: 2, my: 2 }} />
        <Typography variant="body1" mb={4}>
          Copyright &copy; {d.getFullYear()}
        </Typography>
      </Box>
    </div>
  );
};

export default HomeFooter;
