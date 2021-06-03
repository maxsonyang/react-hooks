import { useState, useEffect } from 'react';

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