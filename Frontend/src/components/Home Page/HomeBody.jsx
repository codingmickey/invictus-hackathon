import { Button, Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import { ReactComponent as MySvg } from '../../images/home_body--illustration.svg';
import { ReactComponent as MyWave } from '../../images/home_body--wave.svg';

const HomeBody = () => {
  return (
    <div>
      <Box>
        <Grid container spacing={2}>
          <Grid item sm={12} lg={7}>
            <Typography variant="h3" color="primary" mb={3} px={11} pt={15}>
              <strong>The store where your demand meets the supply</strong>
            </Typography>
            <Typography variant="h5" mb={3} px={11}>
              The store where your demand meets the supplyThe store where your demand meets the
              supply
            </Typography>
            <Stack direction="row" spacing={4} px={11} pt={10}>
              <Button variant="contained" sx={{ fontSize: '18px', padding: '10px 35px' }}>
                Register
              </Button>
              <Button variant="outlined" sx={{ fontSize: '18px', padding: '10px 35px' }}>
                Login
              </Button>
            </Stack>
          </Grid>
          <Grid textAlign="center" item sm={12} lg={5} mt={10}>
            <MySvg width="600" />
          </Grid>
        </Grid>
      </Box>
      <Box textAlign="center">
        <Box className="Home__Box Home__Box--blue Home__Box-lg" mt={6}></Box>
        <MyWave className="Home__MyWave" />
        <Box className="Home__Box__Card Home__Card-1" p={4} py={4}>
          <Typography variant="h4">Tell us what you need</Typography>
        </Box>
        <Box className="Home__Box__Card Home__Card-2" p={4} py={4}>
          <Typography variant="h4">Receive FREE Quotes from sellers</Typography>
        </Box>
        <Box className="Home__Box__Card Home__Card-3" p={4} py={4}>
          <Typography variant="h4">Seal the Deal</Typography>
        </Box>
        <Box className="Home__Box Home__Box-sm" mt={6}></Box>
        <Box
          className="Home__Box Home__Box--blue Home__Box-md"
          mt={6}
          sx={{
            backgroundColor: 'secondary.main'
          }}></Box>
      </Box>
    </div>
  );
};

export default HomeBody;
