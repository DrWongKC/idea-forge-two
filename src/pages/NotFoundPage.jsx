import React from 'react'
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>We're sorry but this page does not exist!</p>
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default NotFoundPage
