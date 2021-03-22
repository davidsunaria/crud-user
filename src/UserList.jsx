import React from "react"
import SingleData from "./SingleData"

class UserList extends React.Component{

  
      
      
   

getData(){

    return this.props.userData.map((singleUser)=>{

        let UserTag=<SingleData name={singleUser.name}  
       
          handler={this.props.handler}  key={singleUser.id} border="2px solid red" data={singleUser}/>
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
