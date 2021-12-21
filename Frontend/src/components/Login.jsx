import React, { useEffect, useState } from 'react';
import { Button, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import axios from 'axios';

import GoogleButton from 'react-google-button';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useHistory } from 'react-router-dom';

import { ReactComponent as Logo } from '../images/Logo.svg';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
    name: '',
    mobileNumber: '',
    role: ''
  });
  let navigate = useHistory();

  useEffect(() => {
    let reqOptions = {
      url: 'martopia/user/verify',
      method: 'GET'
    };
    axios.request(reqOptions).then(function (response) {
      console.log(response.data.msg);
      if (response.status === 201 && response.data.msg === 'Access Granted') {
        console.log('HI THERE');
        navigate.push('/dashboard');
      }
    });
  });

  // Handle change of any state
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // Password Modifier
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Grid>
      <Grid lg={4} md={8} xs={11} sx={{ mx: 'auto' }}>
        <h2 style={{ color: 'black', marginTop: 0, paddingTop: '0.83em', textAlign: 'center' }}>
          <Link to="/">
            <IconButton edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
              <Logo
                style={{
                  height: '5rem',
                  width: '5rem',
                  backgroundColor: 'white',
                  borderRadius: '50%'
                }}
              />
            </IconButton>
            <Typography variant="h2" sx={{ fontFamily: 'Poppins', fontWeight: 900 }}>
              Martopia
            </Typography>
          </Link>
        </h2>
        <hr />
        <Typography variant="h4" sx={{ mt: 4 }}>
          Sign in to your account{' '}
        </Typography>

        <form action="/martopia/user/login" method="post">
          {/* <FormControl sx={{ m: 1 }} variant="outlined" action="/login" method="post"> */}
          {/* Email */}
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange('email')}
            required
            fullWidth
            autoFocus="true"
            sx={{ my: '1rem', mt: '2rem' }}
          />

          {/* Password */}
          <TextField
            label="Password"
            type={values.showPassword ? 'text' : 'password'}
            name="password"
            value={values.password}
            onChange={handleChange('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            required
            sx={{ my: '1rem' }}
            fullWidth
            aria-describedby="outlined-password-helper-text"
          />

          {/* Log in buttons */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ mt: 2, fontSize: '1.15rem' }}>
            Log In
          </Button>
          <Typography variant="h5" align="center" my={2}>
            Or
          </Typography>
          <Grid align="center">
            <GoogleButton
              label="Continue with Google"
              fullWidth
              style={{ width: '100%', fontFamily: 'Poppins', fontSize: '1.15rem' }}
              onClick={() => {
                window.location.href = 'http://localhost:3001/martopia/user/auth/google';
              }}
            />
          </Grid>
          <h4 style={{ textAlign: 'center' }}>
            Don&apos;t have an account? <a href="/register">Sign Up</a>.
          </h4>
          {/* </FormControl> */}
        </form>
      </Grid>
    </Grid>
  );
}

export default Login;
