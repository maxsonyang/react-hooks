import * as React from "react"
import { Link } from 'gatsby';
import "../styles/global.scss";
import "../styles/pages/index.scss";
import "../styles/pages/hooks.scss";

// markup
const IndexPage = () => {
  return (
    <div className="container-fluid">
      <div className="page-header">
        <h1>
          React Hooks
        </h1>
      </div>
      <div className="page-subheader">
        There are hooks here!
      </div>
      <div className="hooks-list">
        <div className="hook">
          <Link to="/useState">
            useState
          </Link>
          <div className="subheader">
            There will be a subheader here in a second.
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
