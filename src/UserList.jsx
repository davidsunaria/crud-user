import React from "react"
import SingleData from "./SingleData"
import {UserContext} from "./ContextApi"

class UserList extends React.Component{

  
      
      
   

getData(){

    return this.props.userData.map((singleUser)=>{
         
        let UserTag=<SingleData     select={"name"}
       
            key={singleUser.id} border="2px solid red" data={singleUser}/>
        return UserTag
 
   })

}

  



    render(){

        return(

            <div>
                {this.getData()}
                {/* <Name name={ this.state.selectedData}/> */}
            </div>
        )
    }
}

export default UserList
