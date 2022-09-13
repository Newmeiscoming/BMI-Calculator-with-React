// import logo from './logo.svg';
import {useState} from "react";
import './App.css';

function App() {
  // const images = {
  //   img1:https://www.google.com/search?q=underweight+man+png&tbm=isch&ved=2ahUKEwiBv4-juYz5AhVo4HMBHY0uCekQ2-cCegQIABAA&oq=underweight+man+png&gs_lcp=CgNpbWcQAzoECCMQJzoLCAAQgAQQsQMQgwE6CAgAEIAEELEDOgUIABCABDoECAAQAzoICAAQsQMQgwE6BAgAEEM6BwgAELEDEEM6BggAEB4QBToGCAAQHhAIOgQIABAYOgQIABAeUOUPWJo3YPk4aABwAHgAgAH-AogB_hqSAQgwLjE3LjAuM5gBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=WpHaYoGqAejAz7sPjd2kyA4&bih=696&biw=1536&rlz=1C1YTUH_enIN1003IN1003#imgrc=MbeIYpyz5cjBrM,
  //   img2:https://www.google.com/search?q=normal+man+png&tbm=isch&ved=2ahUKEwjJ4af9uYz5AhWNidgFHXSWCmwQ2-cCegQIABAA&oq=normal+man+png&gs_lcp=CgNpbWcQAzIFCAAQgAQ6BAgjECc6BggAEB4QCDoICAAQsQMQgwE6BAgAEAM6CAgAEIAEELEDOgQIABBDOgcIABCxAxBDOgoIABCxAxCDARBDOgsIABCABBCxAxCDAVCMRFiabWCLb2gAcAB4AIAB8AKIAZMYkgEIMC4xNy4wLjKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=F5LaYon6CY2T4t4P9Kyq4AY&bih=696&biw=1536&rlz=1C1YTUH_enIN1003IN1003#imgrc=cQMXO-nSZQjr4M
  // }
var [res,setRes] = useState(0);
var [status,setStatus] = useState("");
var [range,setRange] = useState([]);


  const [weight,setWeight] = useState();
  const [height,setHeight] = useState();
  const [name,setName] = useState("");
  const [BMI,setBMI] = useState();
  const [mode,setMode] = useState();

  function handleMode(){
    setMode({
      backgroundColor:"black",
      color:"white"
    })
  }
  function nameHandler(event){
    setName(event.target.value);
  }
  function handleWeight(event){
    setWeight(event.target.value);
  }
  function handleHeight(event){
    setHeight(event.target.value);
  }
    function showBMI(){
      // console.log(height,weight,name)
      if(height==undefined||weight==undefined||name==""){
        alert("Enter Details Properly");
      }
      //  setRes((weight/(height**2)).toFixed(1));
        res = (weight/(height**2)).toFixed(1);
      
      if(res<18.5){
        range= [0,18.5];
        status = "Underweight";
      }
      else if(res>18.5&&res<=24.9){
        range= [18.5,24.9];
        status = "Normal";
      }
      else if(res>24.9&&res<=29.9){
        range= [25.0,29.9];
        status = "Overweight";
      }
      else if(res>29.9){
        range= [30.0,"above"];
        status = "Obese";
      }
      setRes(res);
      setRange(range);
      setStatus(status);
      console.log(res);
      console.log(range,status);
          
          
          setBMI(
            

          
          <div className="card" >
          <div className="card-body">
            <h5 className="card-title">Your BMI is {res}</h5>
            <p className="card-text">Hey <strong>{name.split(" ")[0]}</strong> your BMI lies between <strong>{range[0]}</strong> to <strong>{range[1]}</strong> and you are <strong>{status}</strong></p>
            
          </div>
        </div>)
    }
  function resetHandler(){
    setBMI();
    setHeight("");
    setWeight("");
    setName("")
    setRes(0);
  }

  return (


    <div className="App" style={mode}>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active my-3" aria-current="page" href="#">About</a>
        </li>
        <li>
        <div class="form-check form-switch my-4 mx-5">
  <input class="form-check-input" type="checkbox" role="switch" onSubmit={handleMode} id="flexSwitchCheckDefault" />
  <label class="form-check-label" for="flexSwitchCheckDefault" >Switch Theme</label>
</div>
        </li>
      
        
        
      </ul>
    </div>
  </div>
</nav>

      <h1 className="display-1 my-3">BMI Calculator</h1>
      <div className="mb-3">
  <label forname="formGroupExampleInput" className="form-label">Name</label>
  <input type="text"  value = {name} onChange={nameHandler} className="form-control" id="formGroupExampleInput" placeholder="Enter you name"/>
</div>
     <div className="mb-3">
  <label forname="formGroupExampleInput" className="form-label">Weight (Kg.)</label>
  <input type="number"  onChange={handleWeight} className="form-control" value={weight} id="formGroupExampleInput" placeholder="Enter your Weight"/>
</div>
<div className="mb-3">
  <label forname="formGroupExampleInput2" className="form-label">Height (Mt.)</label>
  <input type="number" onChange={handleHeight}  className="form-control" value={height} id="formGroupExampleInput2" placeholder="Enter your Height"/>
</div>
<div><button type="button" className="btn btn-info my-3" onClick={showBMI}>Calculate BMI</button>
<button type="button" className="btn btn-danger mx-3" onClick={resetHandler}>Reset </button>
</div>

<div>{BMI}</div>

    </div>
    
  );
}

export default App;
