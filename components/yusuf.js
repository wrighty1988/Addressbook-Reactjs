import React from 'react';
import './App.css';
 
class App extends React.Component {
 
state = {
  inputName: "",
  inputPhoneNumber: "",
  newName: [],
  newNumber: []
}
 
inputDetailN = (event) => {
  this.setState({
    inputName: event.target.value
    
  })
}
 
inputDetailPN = (event) => {
  this.setState({
    inputPhoneNumber: event.target.value
    
  })
}
 
addDetails = (prevData) => {
  this.setState({
    newName: this.state.inputName,
    newNumber: this.state.inputPhoneNumber,
  
   return ([...prevData, input]);
  })
  }
 
  render() {
    console.log(this.state.inputName, this.state.inputPhoneNumber)
    return (
    <div>
      <h1>Address Book</h1>
    
    
      <p>Name</p>
      <p>Phone Number</p>
      <input type="text" onChange={this.inputDetailN}/>
 
      
      <input type="text" onChange={this.inputDetailPN}/>
    
      <button type="submit" onClick={this.addDetails}>Add Contact</button>
      
    <h3>{this.state.newName} {this.state.newNumber}</h3>
    
 
    </div>
    )
  }
} 
 
export default App;