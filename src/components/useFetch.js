import React, { useState, useEffect, useRef } from 'react';

export function useFetch(url) {

  const [state, setState] = useState({
    data : null,
    loading: true,
  })

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }))
    fetch(url)
      .then(r => r.text())
      .then(text => {
       setState({ data: text, loading: false})
      })
  }, [url, setState])

  return state;
}

export function useSlowFetch(url) {
  const [state, setState] = useState({
    data : null,
    loading: true,
  })

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }))
    fetch(url)
      .then(r => r.text())
      .then(text => {
        setTimeout(() => {
          setState({ data: text, loading: false})
        }, 4000)
      })
  }, [url, setState])

  return state;
}

export function useSaferSlowFetch(url) {
  const isCurrent = useRef(true);
  const [state, setState] = useState({
    data : null,
    loading: true,
  })

  useEffect(() => {
    return () => {
      // called when component unmounts.
      isCurrent.current = false;
    }
  })

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }))
    fetch(url)
      .then(r => r.text())
      .then(text => {
        setTimeout(() => {
          if (!isCurrent.current) {
            setState({ data: text, loading: false})
          }
        }, 4000)
      })
  }, [url, setState])

  return state;
}

export function BuggyFetch() {

  const { data, loading } = useSlowFetch(`http://numbersapi.com/42/trivia`)
  return (
    <div>
      <div>{loading ? "loading very slowly..." : data}</div>
    </div>
  )
}

export function SafeBuggyFetch() {

  const { data, loading } = useSaferSlowFetch(`http://numbersapi.com/42/trivia`)
  return (
    <div>
      <div>{loading ? "loading very slowly..." : data}</div>
    </div>
  )
}