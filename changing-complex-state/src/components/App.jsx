import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: ""
  });

  function changeFullName(event) {
    const { name, value } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fname: value,
          lname: prevValue.lname
        };
      } else if (name === "lName") {
        return {
          fname: prevValue.fname,
          lname: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <form>
        <input
          onChange={changeFullName}
          name="fName"
          placeholder="First Name"
          value={fullName.fname}
        />
        <input
          onChange={changeFullName}
          name="lName"
          placeholder="Last Name"
          value={fullName.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
