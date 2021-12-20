import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function Acceptbid() {
  const rows = [
    { id: 1, Product_Name: 'Snow', Product_Category: 'Jon', Price: 35 },
    { id: 2, Product_Name: 'Lannister', Product_Category: 'Cersei', price: 42 },
    { id: 3, Product_Name: 'Lannister', Product_Category: 'Jaime', price: 45 },
    { id: 4, Product_Name: 'Stark', Product_Category: 'Arya', price: 16 },
    { id: 5, Product_Name: 'Targaryen', Product_Category: 'Daenerys', price: null },
    { id: 6, Product_Name: 'Melisandre', Product_Category: null, price: 150 },
    { id: 7, Product_Name: 'Clifford', Product_Category: 'Ferrara', price: 44 },
    { id: 8, Product_Name: 'Frances', Product_Category: 'Rossini', price: 36 },
    { id: 9, Product_Name: 'Roxie', Product_Category: 'Harvey', price: 65 }
  ];
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Product_Category', headerName: 'Product_Category', width: 230 },
    { field: 'Product_Name', headerName: 'Product Name', width: 230 },
    {
      field: 'Quantity',
      headerName: 'Qnty',
      type: 'number',
      width: 90
    },
    {
      field: 'Price',
      headerName: 'Price',
      type: 'number',
      width: 90
    },
    {
      field: 'Location',
      headerName: 'Location',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160
    }
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h1>All the bids by Suppliers</h1>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

export default Acceptbid;
