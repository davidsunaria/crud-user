
import axios from "axios";
import React from "react"
import SingleData from "./SingleData";
import "./user.css"
import UserList from "./UserList";
import {UserContext} from "./ContextApi"
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
      <UserContext.Provider value={{handler:this.callback.bind(this),selectedUser:this.state.selectData}}>
            <div className="left">
              <UserList  userData={this.state.user} 
               
              
              />
            </div>

            <div className="right">
               <SingleData 
               header="UserDetail is below:"/>
            </div>
            </UserContext.Provider> 
    )
  }
}

export default App;
