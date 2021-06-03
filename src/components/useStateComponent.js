import React, { useState } from 'react';

// Expensive State --

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

// --

// Main component --
function UseStateComponent() {

  const [counter, updateCounter] = useState(10);

  return (
    <div>
      Howdy doody
    </div>
  )
}

// --

export default UseStateComponent;