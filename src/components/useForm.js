import React, { useState } from 'react';

/*
  Generalized component where we can describe and store state
  however we'd like, and plug it into a UI component.
*/

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  return [values, e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }]
}

function FormExample() {
  const [form, updateForm] = useForm({ email: "", password: "" })

  return(
    <form onSubmit={() => alert(`email: ${form.email} password: ${form.password}`)}>
      <input
        name="email"
        placeholder="email"
        value={form.email}
        onChange={updateForm}
      />
      <input
        name="password"
        placeholder="password"
        type="password"
        value={form.password}
        onChange={updateForm}
      />
      <input
        name="submit"
        type="submit"
        value="submit"
      />
    </form>
  )
}

export default FormExample;