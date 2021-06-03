import React, { useState, useRef } from 'react';
import RenderCounter from "../components/renderCounter";
import { BuggyFetch, SafeBuggyFetch } from "../components/useFetch";
import "../styles/pages/hooks.scss";

function UseRefPage() {

  const [name, setName] = useState("");
  const nameRef = useRef();
  const [showCounter, setShowCounter] = useState(true);
  const [showBuggyFetch ,setShowBuggyFetch] = useState(false);
  const [showSafeBuggyFetch , setShowSafeBuggyFetch] = useState(true);

  return (
    <div className="container-fluid">
      <div className="page-header">
        <h1>
          useRef + useLayoutEffect
        </h1>
        <div className="page-subheader">
          Provides a reference to, well, anything it seems.
        </div>
      </div>

      {/* Basic example. */}
      <div className="hooks-content">
        <h2>
          Basic useRef Example.
        </h2>
        <div className="blurb">
          An input field that has a reference associated with it.
        </div>
        <div>
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameRef}
          />
          <button onClick={() => {
            nameRef.current.focus();
          }}>
            Click
          </button>
        </div>
      </div>

      {/* Render counter */}
      <div className="hooks-content">
        <h2>
          Basic useRef Example.
        </h2>
        <div className="blurb">
          Reference that shows the amount of times its been rendered without
          triggering a re-render itself.
        </div>
        <button onClick={() => setShowCounter((showCounter) => !showCounter)}>
          Toggle Show Counter.
        </button>
        <div>
          {showCounter && <RenderCounter />}
        </div>
      </div>

      {/* Slow fetch example */}
      <div className="hooks-content">
        <h2>
          Buggy Slow Fetch
        </h2>
        <div className="blurb">
          A buggy fetch to demonstrate a use case of useRef. Unmounting
          the component before the data has finished fetching will cause a
          memory leak. Keep your console open, and you might need to refresh
          to see this.
        </div>
        <button onClick={() => setShowBuggyFetch((showBuggy) => !showBuggy)}>
          Toggle Show Buggy Fetch
        </button>
        <div>
          {showBuggyFetch && <BuggyFetch />}
        </div>
      </div>

      {/* Safe Buggy */}
      <div className="hooks-content">
        <h2>
          Safe Buggy Slow Fetch
        </h2>
        <div className="blurb">
          Addresses the above issue with useRef. We add a flag that indicates
          whether or not the component is current. In conjunction with useEffect,
          we provide a clean-up function that sets this flag to false if the component
          is about to unmount, preventing the error from earlier from happening.
        </div>
        <button onClick={() => setShowSafeBuggyFetch((showBuggy) => !showBuggy)}>
          Toggle Show Buggy Fetch
        </button>
        <div>
          {showSafeBuggyFetch && <SafeBuggyFetch />}
        </div>
      </div>
    </div>
  )
}

export default UseRefPage;