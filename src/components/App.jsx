import React, {useState} from "react";



function App() {
  let [lastName, setLastName] = useState("");
  let [firstName, setfirstName] = useState("");
 

  function handleChange(event){
     const fName = event.target.value;
     setfirstName(fName)
   

  };

  function handleChange2(event){
    const lName = event.target.value;
    setLastName(lName)

  };

  // function handleClick(){
    
  //   setfirstName(lName)
  //   setLastName(lastName)
   
  // };

  return (
    <div className="container">
      <h1>Hello {firstName} {lastName}</h1>
      <form >
        <input onChange={handleChange} name="fName" placeholder="First Name" value={firstName}/>
        <input onChange={handleChange2} name="lName" placeholder="Last Name" value={lastName}/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
