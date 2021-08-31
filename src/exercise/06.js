// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')
  const usernameInputRef = React.useRef()

  function handleChange(event) {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
    // onSubmitUsername(event.target.elements.usernameInput.value)
    // onSubmitUsername(usernameInputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          ref={usernameInputRef}
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
