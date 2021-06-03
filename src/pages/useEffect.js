import React, { useState, useEffect, useRef, useLayoutEffect} from 'react';
import { useForm } from "../components/useForm";
import { useFetch } from "../components/useFetch";
import { useMeasure } from "../components/useMeasure";
import CleanupComponent from "../components/useEffectCleanup";
import "../styles/pages/hooks.scss";

function UseStatePage() {

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
  }

  const [values, setValues] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })

  const [randomNumber, setRandomNumber] = useState(() => getRandomInt(100))
  const {data, loading} = useFetch(`http://numbersapi.com/${randomNumber}/trivia`)
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const [layoutInput, setLayoutInput] = useState("")
  const inputRef = useRef();
  const funFactRef = useRef();

  useEffect(() => {
    const storedCount = localStorage.getItem("count");
    if (storedCount) {
      setCount(JSON.parse(storedCount))
    }
  }, [])

  useEffect(() => {
    console.log("Only called when email is updated.")

    // Can be useful for adding event handlers.
    // const handleMouseMove = (e) => {
    //   console.log(`${e.clientX}, ${e.clientY}`);
    // }
    // window.addEventListener('mousemove', handleMouseMove);

    // Practical example of clean-up using useEffect's clean-up.
    return () => {
      // window.removeEventListener('mousemove', handleMouseMove);
    }
    
  }, [values.email])


  useEffect(() => {
    console.log("Multiple useEffects can be added, and they fire in order.")
    localStorage.setItem('count', JSON.stringify(count));
  }, [count])
  
  // useLayoutEffect(() => {
  //   // console.log(inputRef.current.getBoundingClientRect());
  //   setRect(funFactRef.current.getBoundingClientRect());
  // }, [data])

  // Same thing as above but using a custom hook.
  const rect = useMeasure(funFactRef, [data]);

  return (
    <>
    {/* <Helmet>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> 
    </Helmet> */}
      <div className="container-fluid">
        <div className="page-header">
          <h1>
            useEffect
          </h1>
          <div className="page-subheader">
            Hook that's called after each render.
            Most of these examples log something to console, so you'll want to
            open that up.
          </div>
        </div>

        {/* Basic useEffect Example */}
        <div className="hooks-content">
          <h2>
            Basic useEffect Example
          </h2>
          <div className="blurb">
            useEffect is a hook that's called after each render. You can include
            an array of variables and/or functions as a second argument so that useEffect 
            is only called when those variables are updated. Leaving it empty means useEffect
            will not be called on re-renders.
          </div>
          <form>
            <input
              name="firstName"
              placeholder="First Name"
              value={values.firstName}
              onChange={setValues}
            />
            <input
              name="lastName"
              placeholder="Last Name"
              value={values.lastName}
              onChange={setValues}
            />
            <input
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={setValues}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={setValues}
            />
          </form>
        </div>

        {/* Clean-up example. */}
        <div className="hooks-content">
          <h2>
            Clean-up/Unmount
          </h2>
          <div className="blurb">
            useEffect can also return a function that handles
            the "clean-up" logic of a component when it unmounts.
          </div>
          <button onClick={() => setShow((show) => !show)}>
            Toggle show
          </button>
          {show && <CleanupComponent />}
        </div>

        {/* API fetch example. */}
        <div className="hooks-content">
          <h2>
            API fetch example.
          </h2>
          <div className="blurb">
            useEffect can be a good spot to fetch data from APIs as well.
            API used: <a href="https://numbersapi.com/" target="_blank">Numbers API</a>
          </div>
          <div style={{display: "flex"}}>
            {loading ? 'fun fact loading...' : data }
          </div>
          <button onClick={() => {setRandomNumber(() => getRandomInt(100))}}>
            Give me another.
          </button>
        </div>

        {/* Local Storage Example */}
        <div className="hooks-content">
          <h2>
            Local Storage Example
          </h2>
          <div className="blurb">
            useEffect can also be useful for persisting data, in this case
            making a call to localStorage to save each time the count is
            updated.
          </div>
          <div>
            The count is: {`${count}`}
          </div>
          <button onClick={() => setCount((c) => c + 1)}>
            Increase it!
          </button>
        </div>

        <div className="page-header">
          <h1>
            useLayoutEffect
          </h1>
          <div className="page-subheader">
            Very similar to useEffect apparently, but has a more
            niche use case. Not really sure what that's all about yet.
            According to the docs, it "fires synchronously after all DOM
            mutations."
          </div>
        </div>

        <div className="hooks-content">
          <h2>
            Basic example of useLayoutEffect.
          </h2>
          <div className="blurb">
            Using this to get the input's rect. Note that this
            has been commented out.
          </div>
          <div>
            <input
              ref={inputRef}
              name="layoutInput"
              value={layoutInput}
              onChange={(e) => setLayoutInput(() => e.target.value)}
            />
          </div>
        </div>

        {/* Using useLayoutEffect to measure a div. */}
        <div className="hooks-content">
          <h2>
            Revisiting numbers API
          </h2>
          <div className="blurb">
            Showing how useLayoutEffect can be used in a more practical way.
          </div>
          <div>
            <div style={{display: "flex"}}>
              <div ref={funFactRef}>
                {loading ? 'fun fact loading...' : data }
              </div>
            </div>
            <div>
              Measurements of the fun fact div above.
            </div>
            <pre>
              {JSON.stringify(rect, null, 2)}
            </pre>
            <button onClick={() => {setRandomNumber(() => getRandomInt(100))}}>
              Give me another.
            </button>
          </div>
        </div>

        <div className="hooks-content">
          <h2>
            Conclusion (sort of)
          </h2>
          <div className="blurb">
            It seems the gist/pattern that you'd use this is if you want to apply
            any effects after the everything has finished rendering? It's still not
            clear to me so I'll apply an incremental approach as suggested in the docs.
          </div>
        </div>
      </div>
    </>
  )
}

export default UseStatePage;