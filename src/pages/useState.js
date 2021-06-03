import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import FormExample from "../components/useForm";
import "../styles/pages/hooks.scss";

function pretendThisIsExpensive() {
  // Pretend this is computationally expensive.
  return 10;
}

function ExpensiveStateExample() {
  /*
    In the event that you have an expensive initial state,
    you can reduce the number of calls using useState.
  */

  // This ensures that the function is only called on the initial render
  // and not subsequent ones.
  const [expensiveState, updateExpensiveState] = useState(() => pretendThisIsExpensive())
  
  return (
    <div>{expensiveState}</div>
  )
}

function UseStatePage() {

  const [counter, updateCounter] = useState(0)
  const [updaterCounter, setUpdaterCounter] = useState(0)
  const [{a, b}, setAB] = useState({ a: 0, b: 0})

  return (
    <>
      <Helmet>
        <title>
          {`${counter} clicks!`}
        </title>
      </Helmet>
      <div className="container-fluid">
        <div className="page-header">
          <h1>
            useState
          </h1>
          <div className="page-subheader">
            I'll think of something for a subheader here.
          </div>
        </div>
        
        {/* Basic useState Example */}
        <div className="hooks-content">
          <h2>
            Basic useState
          </h2>
          <div className="blurb">
            The most basic of ways you can implement useState
          </div>
          <div>{`You've clicked the counter ${counter} times`}</div>
          <button onClick={() => updateCounter(counter + 1)}>
            Click me!!!!
          </button>
        </div>

        {/* Updater Function Flavor of useStat */}
        <div className="hooks-content">
          <h2>
            With Updater Function
          </h2>
          <div className="blurb">
            Updater function can be useful for avoiding race conditions.
            Since state updates are asynchronous, directly referencing the value
            could result in receiving an outdated value.
          </div>
          <div>{`Yet another counter: ${updaterCounter} clicks`}</div>
          <button onClick={() => setUpdaterCounter((currentCount) => currentCount + 1)}>
            Update this counter
          </button>
        </div>
        
        {/* setState with objects. */}
        <div className="hooks-content">
          <h2>
            Object Example
          </h2>
          <div className="blurb">
            Updating a state with an object. Calling setState and modifying one of the
            attributes without preserving the others will cause the others to be deleted.
            When using '...' syntax, the original state must come first before any updates,
            as the original values are overriden subsequently. Alternatively, you can
            break these up into individual states.
          </div>
          <div>{`A has: ${a} clicks`}</div>
          <div>{`B has: ${b} clicks`}</div>
          <button onClick={() => setAB((currentState) => ({
            ...currentState,
            a: a + 1,
          }))}>
            Update A only.
          </button>
          <button onClick={() => setAB((currentState) => ({
            ...currentState,
            b: b + 1,
          }))}>
            Update B only.
          </button>
        </div>

        {/* Form Example */}
        <div className="hooks-content">
          <h2>
            Forms Example
          </h2>
          <div className="blurb">
            A form as an example of a very common use case, as well as a generalized
            state updater. This approach allows us to decouple state from the actual
            UI, so we can plug this into other components.
          </div>
          <FormExample />
        </div>
      </div>
    </>
  )
}

export default UseStatePage;