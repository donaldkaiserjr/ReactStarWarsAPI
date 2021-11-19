import React from "react";

function Username() {
  const [username, setUsername] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`You entered:  ${username}`);
  }

  function handleChange(event) {
    setUsername(event.target.value.toUpperCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
          className="input"
        />
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
      <h1>{username}</h1>
    </form>
  );
}

export default Username;
