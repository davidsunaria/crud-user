import React from "react"
import Name from "./Name"
import {UserContext} from "./ContextApi"


class SingleData  extends React.Component{

     selectfunc(){
         if(this.props.handler!==undefined){
            this.props.handler(this.props.data)
            console.log(this.props)
         }
     }

     getuserDetail(){
         
     }

    render(){
        let  finalValue= null
        if(this.props.select!==undefined){
            finalValue=  <Name singleName={this.props.data[this.props.select]}/>
        }

        else{
      finalValue= 
       
         
         <UserContext.Consumer>{(contextData)=>{ 
          return  <>
            <h1>{this.props.header}</h1>
             <Name singleName={contextData.selectedUser.name}/>
            <h2>{contextData.selectedUser.email}</h2>
            <h2>{contextData.selectedUser.address.city}</h2>
            </>
        }}</UserContext.Consumer>
            
            

        }
        return(
            <UserContext.Consumer>{
                
                (contextData)=>{

                   return  <div style={{border:this.props.border}} onClick={()=>{contextData.handler(this.props.data)}}>
                   {finalValue}
                   </div>

                }
                
                
                }
           
          </UserContext.Consumer>
        )
    }
}

export default SingleData