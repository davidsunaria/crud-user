
import axios from "axios";
import React from "react"
import SingleData from "./SingleData";
import "./user.css"
import UserList from "./UserList";
class App extends React.Component{

state={
  user:[],
  selectData:{
  
    address:{}

  }
}

componentDidMount(){
 axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
       this.state.user=res.data
       this.setState(this.state)
 })

}

callback(dynamic){
  
  this.state.selectData=dynamic
  this.setState(this.state)

}

  render(){
    return(
      <>
            <div className="left">
              <UserList  userData={this.state.user} 
               handler={this.callback.bind(this)}
              
              />
            </div>

            <div className="right">
               <SingleData name={this.state.selectData.name} 
               email={this.state.selectData.email } 
               address={this.state.selectData.address.city}
               header="UserDetail is below:"/>
            </div>
            </> 
    )
  }
}

export default App;
