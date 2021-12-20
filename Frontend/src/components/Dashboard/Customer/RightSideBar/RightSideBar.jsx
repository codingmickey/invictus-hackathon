import React from 'react';
import NewBids from './NewBids';

const data = [
  {
    requestedQuantity: 200,
    cname: 'Kartik Traders',
    productName: 'Toy truck',
    tags: ['Kids', 'Toys', 'Toy Truck'],
    cperItem: 200,
    noOfItems: 500,
    cdetails:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  }
];

const RightSideBar = () => {
  return (
    <div>
      <NewBids data={data} />
    </div>
  );
};

export default RightSideBar;
