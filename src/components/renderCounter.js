import React, { useRef } from 'react';

function RenderCounter() {
  const renders = useRef(0)

  console.log("Render count: ", renders.current++)

  return (
    <div>
      I have been rendered {`${renders.current}`} {renders.current == 1 ? 'time' : 'times'}
    </div>
  )
}

export default RenderCounter;