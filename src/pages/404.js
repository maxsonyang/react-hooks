import * as React from "react";
import { Link } from "gatsby";

// markup
const NotFoundPage = () => {
  return (
    <div>
      This is not the page you're looking for.
      <Link to="/">You're right, I should go home.</Link>
    </div>
  )
}

export default NotFoundPage;
