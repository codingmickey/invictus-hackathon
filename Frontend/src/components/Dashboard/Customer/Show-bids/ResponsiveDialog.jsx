import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Chip, Typography } from '@mui/material';

export default function ResponsiveDialog({ data }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Show more
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title">
        <DialogTitle sx={{ pb: 1 }} variant="h4" id="responsive-dialog-title">
          {data[0].productName}
          <Typography sx={{ mt: 1 }} variant="body1">
            Deal by:{' '}
          </Typography>
          <Typography variant="h6">{data[0].cname}</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 0.5 }}>
            Cost per unit: &#x20B9; {data[0].cperItem}
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5 }}>
            Quantity: {data[0].noOfItems}
          </Typography>
          <Typography sx={{ mb: 0.8 }} gutterBottom>
            Tags:
            {data[0].tags.map((tag, i) => (
              <Chip label={tag} color="secondary" sx={{ mx: 0.3 }} />
            ))}
          </Typography>

          <Typography gutterBottom>{data[0].cdetails}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
