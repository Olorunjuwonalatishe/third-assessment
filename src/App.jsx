import React, { Component } from 'react'
import Useroutput from './Components/Useroutput'
import Userinput from './Components/Userinput'

export default class App extends Component {
  //creating a state that holds the value of Olamide badoo
  state={
    names:[
      {username:"Olamide Badoo"}
    ],
  }
//CREATING A METHOD TO HANDLE CHANGE OF EVENT
  UpdateNameHandler= (e)=>{
    this.setState({
      names:[
        {username:e.target.value}
      ],
    })
  }
  render() {
    return (
      <div>
        <Useroutput username={this.state.names[0].username}
        />
        <Userinput change={this.UpdateNameHandler} value={this.state.names[0].username}/>
        <Useroutput/>
        <Useroutput/> 
        <Useroutput/>
        
  

      </div>
    )
  }
}
