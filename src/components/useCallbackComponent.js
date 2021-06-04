import React, { useRef } from "react";
import { useCountRenders } from "../components/countRenders";

export const Boop = React.memo(({ increment }) => {
  /*
    Side note:
      React.memo causes the component to re-render only on
      prop changes. Default behavior is to re-render every time
      the parent re-renders.
  */

  useCountRenders();

  return (
    <button onClick={() => increment(2)}>
      boop.
    </button>
  )
});

export const NumberedBoop = React.memo(({ n, increment }) => {

  useCountRenders();

  return (
    <button onClick={() => increment(n)}>
      {n}
    </button>
  )

}) 