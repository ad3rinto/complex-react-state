import React, {useState} from "react";



function App() {
  let [lastName, setLastName] = useState("");
  let [firstName, setfirstName] = useState("");
 

  function handleChange(event){
     firstName = event.target.value;
   

  };

  function handleChange2(event){
    lastName = event.target.value;

  };

  function handleClick(){
    
    setfirstName(firstName)
    setLastName(lastName)
   
  };

  return (
    <div className="container">
      <h1>Hello {firstName} {lastName}</h1>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" />
        <input onChange={handleChange2} name="lName" placeholder="Last Name" />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
