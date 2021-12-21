import * as React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

const Input = styled('input')({
  display: 'none'
});

export default function MakeBid() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <Link to="/dashboard">
        <Button variant="contained" sx={{ ml: 2, mb: 2 }}>
          back to dashboard
        </Button>
      </Link>
      <h1 style={{ padding: '2%' }}>Make your Bid</h1>
      <h2 style={{ padding: '2%' }}>Product Name</h2>
      <p style={{ padding: '5%' }}>
        Product description :Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehen
      </p>
      <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Product Name"
        sx={{ margin: '2%', width: 300 }}
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Quantity Required"
        defaultValue="Quantity Required"
        sx={{ margin: '2%', width: 300 }}
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Client's Desired Price"
        defaultValue="Client's Desired Price"
        sx={{ margin: '2%', width: 300 }}
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Location"
        defaultValue="Location"
        sx={{ margin: '2%', width: 300 }}
      />
      <TextField
        required
        id="outlined-required"
        label="Your Price"
        defaultValue=""
        type="number"
        sx={{ margin: '2%', width: 300 }}
      />
      <TextField
        required
        id="outlined-required"
        label="Product Description"
        placeholder="Additional Details or features about your Product"
        sx={{ margin: '2%', width: '50%' }}
      />
      <Stack direction="row" alignItems="center" spacing={2}>
        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" />
          <Button sx={{ margin: '10%', width: 300 }} variant="contained" component="span">
            Upload the product image
          </Button>
        </label>
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton
            sx={{ margin: '10%', width: 300 }}
            color="primary"
            aria-label="upload picture"
            component="span">
            <PhotoCamera />
          </IconButton>
        </label>
        <label htmlFor="Delivery Estimate" margin="2">
          Delivery Estimate
        </label>
        <input type="date" id="DD" name="DL"></input>
      </Stack>
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        sx={{ margin: '2%' }}
        size="large"
        type="submit">
        Submit Bid
      </Button>
    </div>
  );
}
