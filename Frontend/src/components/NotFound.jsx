import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function NotFound() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="notFound">
      <h1>404 Error</h1>
      <p> {location.pathname} not found! 🥲</p>
      <h3>
        Try accessing a different page, go to <Link to="/">homepage</Link>
      </h3>
    </div>
  );
}

export default NotFound;
