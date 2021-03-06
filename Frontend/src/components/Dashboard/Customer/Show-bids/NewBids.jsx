import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ResponsiveDialog from './ResponsiveDialog';

export default function BasicCard({ data }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {data[0].productName}
        </Typography>
        <Typography variant="body1" sx={{ mb: 0.5 }} color="text.secondary">
          Cost per unit: &#x20B9; {data[0].cperItem}
        </Typography>

        <Typography variant="body2">{data[0].cdetails.substr(0, 60) + ' ...'}</Typography>
      </CardContent>
      <CardActions>
        <ResponsiveDialog data={data} />
      </CardActions>
    </Card>
  );
}
