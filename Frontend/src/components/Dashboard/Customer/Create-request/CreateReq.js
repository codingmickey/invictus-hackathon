// import React from 'react';
// import TextField from '@mui/material/TextField'
// import { useState } from 'react';
// import { MenuItem } from '@mui/material';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useForm } from 'react-hook-form';
import '../../../../containers/Card.css';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const Input = styled('input')({
  display: 'none'
});

export default function CreateReq() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState('');
  const onSubmit = (data) => setResult(JSON.stringify(data));
  // return (
  //     <form onSubmit={handleSubmit(onSubmit)}>
  //       <Headers />
  //       <input {...register("firstName")} placeholder="First name" />
  //       <input {...register("lastName")} placeholder="Last name" />
  //       <select {...register("category")}>
  //         <option value="">Select...</option>
  //         <option value="A">Category A</option>
  //         <option value="B">Category B</option>
  //       </select>
  //       <p>{result}</p>
  //       <input type="submit" />
  //     </form>
  //   );

  return (
    <div>
      <h1 style={{ margin: '0 0 0 2%' }}>Create a Request</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <Card variant="outlined" className="createResCard" sx={{ minWidth: 800 }} > */}
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={products}
          sx={{ width: 300, padding: '2%' }}
          renderInput={(params) => <TextField {...params} label="Product Category" />}
        />
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          defaultValue=""
          sx={{ margin: '2%', width: 300 }}
        />
        <TextField
          required
          id="outlined-required"
          label="Product Description"
          placeholder="Additional Details"
          sx={{ margin: '2%', width: '50%' }}
        />
        <TextField
          required
          id="outlined-required"
          label="Desired Price per Unit"
          defaultValue=""
          type="number"
          placeholder="Enter a no"
          sx={{ margin: '2%', width: 300 }}
        />
        <TextField
          required
          id="outlined-required"
          label="Quantity"
          placeholder="Enter a no"
          type="number"
          sx={{ margin: '2%', width: 300 }}
        />
        <TextField
          required
          id="outlined-required"
          label="Enter your city"
          type="text"
          defaultValue=" "
          sx={{ margin: '2%', width: 300 }}
        />
        <Stack direction="row" alignItems="center" spacing={2}>
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" />
            <Button sx={{ margin: '10%', width: 300 }} variant="contained" component="span">
              Upload an Image
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
            Expected Delivery
          </label>
          <input type="date" id="DD" name="DL"></input>
        </Stack>

        <div>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            sx={{ margin: '2%' }}
            size="large"
            type="submit">
            Send Request
          </Button>
        </div>
        {/* </Card> */}
      </form>
    </div>
  );
}
const products = [
  {
    value: ' Drugs & Pharmaceuticals',
    label: ' Drugs & Pharmaceuticals'
  },
  {
    value: ' Hospital & Diagnostics',
    label: ' Hospital & Diagnostics'
  },
  {
    value: 'BTC',
    label: ' Food & Beverages'
  },
  {
    value: 'Industrial Plants & Machinery',
    label: 'Industrial Plants & Machinery'
  },
  {
    value: 'Industrial Supplies',
    label: 'Industrial Supplies'
  },
  {
    value: 'Building & Construction',
    label: 'Building & Construction'
  },
  {
    value: 'Apparel & Garments',
    label: 'Apparel & Garments'
  },
  {
    value: 'Electronics & Electrical',
    label: 'Electronics & Electrical'
  },
  {
    value: 'Chemicals, Dyes & Solvents',
    label: 'Chemicals, Dyes & Solvents'
  },
  { label: 'Home Textile & Furnishing' },
  { label: 'Cosmetics & Personal Care' },
  { label: 'Books & Stationery' },
  { label: 'Textiles, Yarn & Fabrics' },
  { label: 'Kitchen Utensils & Appliances' },
  { label: 'Handicrafts & Decoratives' },
  { label: 'Hand & Machine Tools' },
  { label: 'Metals, Alloys & Minerals' },
  { label: 'Sports Goods, Toys & Games' },
  { label: 'Security Systems & Services' },
  { label: 'Herbal & Ayurvedic Product' },
  { label: 'Fashion Accessories & Gear' },
  { label: 'Computer & IT Solutions' },
  { label: 'Gems, Jewelry & Astrology' },
  { label: 'Cosmetics & Personal Care' },
  { label: 'Home Textile & Furnishing' }
];
