import React, { useEffect } from 'react';

function CleanupComponent() {
  /*
    Example of returning a clean-up function on useEffect.
  */

  useEffect(() => {
    console.log("Hi, I exist!")
    console.log("Child components are mounted first.")

    return (() => {
      console.log("Good bye!")
    })
  }, []);

  return (
    <div>Hello! I exist!</div>
  )

}

export default CleanupComponent;