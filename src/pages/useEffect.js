import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from "../components/useForm";
import { useFetch } from "../components/useFetch";
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
  const [randomNumber, setRandomNumber] = useState(12)

  const {data, loading} = useFetch(`http://numbersapi.com/${randomNumber}/trivia`)

  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

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

  return (
    <>
    <Helmet>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" /> 
    </Helmet>
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
          <div>
            {loading ? 'fun fact loading...' : data }
          </div>
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
      </div>
    </>
  )
}

export default UseStatePage;