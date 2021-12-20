import { Button, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as MySvg } from '../../images/home_body--illustration.svg';

const HomeBody = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={2} justifyContent="space-around">
          <Grid item sm={12} md={7}>
            <Typography component="h3" variant="h3" color="primary" mb={3} px={11} pt={15}>
              <strong>The store where your demand meets the supply</strong>
            </Typography>
            <Typography variant="h5" mb={3} px={11}>
              The store where your demand meets the supplyThe store where your demand meets the
              supply
            </Typography>
            <Stack direction="row" spacing={4} px={11} pt={10}>
              <Link to="/register">
                <Button variant="contained" sx={{ fontSize: '18px', padding: '10px 35px' }}>
                  Register
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outlined" sx={{ fontSize: '18px', padding: '10px 35px' }}>
                  Login
                </Button>
              </Link>
            </Stack>
          </Grid>
          <Grid justifyContent="spaceAround" item sm={8} md={5} mt={10} pr={3}>
            <MySvg width="100%" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomeBody;
