import * as React from "react"
import { Link } from 'gatsby';
import "../styles/global.scss";
import "../styles/pages/index.scss";
import "../styles/pages/hooks.scss";
import hookList from "../data/hook-list.yml"

const IndexPage = () => {
  function renderHooksList() {
    return hookList.map((hook) => (
      <div className="hook">
        <Link to={hook.link}>
          {hook.header}
        </Link>
        <div className="subheader">
          {hook.subheader}
        </div>
      </div>
    ))
  }

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
        {renderHooksList()}
      </div>
    </div>
  )
}

export default IndexPage
