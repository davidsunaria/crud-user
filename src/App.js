
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
        <div className="wall jumbotron">
          <div className="container">
          <h1>Welcome to our website</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pellentesque faucibus augue, in tristique dolor aliquam ac. Sed sagittis augue nec turpis finibus, quis cursus elit finibus. Aliquam pulvinar tincidunt nulla, in consequat nisi pretium eu. Vivamus dignissim arcu in sodales aliquam. Mauris sed lorem et libero bibendum porttitor ut dignissim nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Mauris porta risus risus, vel lobortis enim consequat id. Aenean faucibus a augue vitae fringilla. Mauris sed sollicitudin orci. Vivamus arcu diam, tincidunt ac dolor non, varius mattis nibh. Proin eleifend dolor eu metus cursus cursus. Mauris at purus vel libero aliquet posuere. Suspendisse vel tempus nisi. 
          </p>
          
          <button className="btn btn-success">Download</button> <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
                <UserList  userData={this.state.user}/>
              </div>

              <div className="col">
                <SingleData header="UserDetail is below:"/>
              </div> 
          </div>    
        </div>   
      </UserContext.Provider> 
    )
  }
}

export default App;
