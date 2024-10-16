import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });
  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
        };
      }
    });
  }
  // const [lName, setLName] = useState("");

  /* function upDateFName(event) {
    const firstName = event.target.value;
    setFName(firstName);
  }

  function upDateLName(event) {
    const lastName = event.target.value;
    setLName(lastName);
}*/
  return (
    <div className="container">
      <h1>
        Hello {fullName.lName} {fullName.fName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
