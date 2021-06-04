import React, { useState, useCallback } from 'react';
import { Boop, NumberedBoop } from "../components/useCallbackComponent";
import "../styles/pages/hooks.scss";


function UseCallbackPage() {

  const [counter, updateCounter] = useState(0)
  const units = [1, 2, 5, 10]

  const increment = useCallback((n) => {
    updateCounter(c => c + n)
  }, [updateCounter])

  return(
    <div className="container-fluid">
      <div className="page-header">
        <h1>
          useCallback
        </h1>
        <div className="page-subheader">
          I wish I had callbacks.
        </div>
      </div>
      <div className="hooks-content">
        <h2>
          Basic example.
        </h2>
        <div className="blurb">
          Basic example where we increment a counter with useCallback.
          This implementation helps us reduce the amount of component
          renders whenever we increment the count.
        </div>
        <div>
          <div>Counter: {counter}</div>
          <Boop increment={increment} />
          {
            units.map((n) => {
              return (
                <NumberedBoop 
                  n={n} 
                  onClick={() => increment(n)} 
                  increment={increment} 
                  key={n}
                />)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default UseCallbackPage;