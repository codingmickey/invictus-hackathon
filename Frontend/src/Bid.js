import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';

const Input = styled('input')({
    display: 'none',
  });

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Product_Category', headerName: 'Product_Category', width: 230 },
  { field: 'Product_Name', headerName: 'Product Name', width: 230 },
  {
    field: 'Quantity',
    headerName: 'Qnty',
    type: 'number',
    width: 90,
  },
  {
    field: 'Price',
    headerName: 'Price',
    type: 'number',
    width: 90,
  },
  {
    field: 'Location',
    headerName: 'Location',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, Product_Name: 'Snow', Product_Category: 'Jon', Price: 35 },
  { id: 2, Product_Name: 'Lannister', Product_Category: 'Cersei', price: 42 },
  { id: 3, Product_Name: 'Lannister', Product_Category: 'Jaime', price: 45 },
  { id: 4, Product_Name: 'Stark', Product_Category: 'Arya', price: 16 },
  { id: 5, Product_Name: 'Targaryen', Product_Category: 'Daenerys', price: null },
  { id: 6, Product_Name: 'Melisandre', Product_Category: null, price: 150 },
  { id: 7, Product_Name: 'Clifford', Product_Category: 'Ferrara', price: 44 },
  { id: 8, Product_Name: 'Frances', Product_Category: 'Rossini', price: 36 },
  { id: 9, Product_Name: 'Roxie', Product_Category: 'Harvey', price: 65 },
];

export default function Bid() {
   
  return (
    <div style={{ height: 400, width: '100%' }}>
        <h1>All the Bids by Suppliers</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <h1 style={{padding:"2%"}}>Make your Bid</h1>
      <h2 style={{padding:"2%"}}>Product Name</h2>
      <p style={{padding:"5%"}}>Product description :Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen</p>
      <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Product Name"
          sx={{margin:"2%" , width: 300}}
        />
         <TextField
          disabled
          id="outlined-disabled"
          label="Quantity Required"
          defaultValue="Quantity Required"
          sx={{margin:"2%" , width: 300}}
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Client's Desired Price"
          defaultValue="Client's Desired Price"
          sx={{margin:"2%" , width: 300}}
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Location"
          defaultValue="Location"
          sx={{margin:"2%" , width: 300}}
        />
        <TextField
        required
        id="outlined-required"
        label="Your Price"
        defaultValue=""
        type="number"
        sx={{margin:"2%" , width: 300}}
        />
        <TextField
        required
        id="outlined-required"
        label="Product Description"
        placeholder="Additional Details or features about your Product"
        sx={{margin:"2%" , width:"50%"}}
      /> 
       <Stack direction="row" alignItems="center" spacing={2}>
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button sx={{margin:"10%" , width: 300}} variant="contained" component="span">
          Upload the product image
        </Button>
      </label>
      <label htmlFor="icon-button-file">
        <Input accept="image/*" id="icon-button-file" type="file" />
        <IconButton sx={{margin:"10%" , width: 300}} color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>     
<label for="Delivery Estimate" margin="2">Delivery Estimate</label>
<input type="date" id="DD" name="DL"></input>
    </Stack>
    <Button variant="contained" endIcon={<SendIcon />} sx={{margin:"2%"}} size="large" type="submit">
        Submit Bid
      </Button>
    </div>
  );
}
