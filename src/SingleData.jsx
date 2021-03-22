import React from "react"
import Name from "./Name"


class SingleData  extends React.Component{

     selectfunc(){
         if(this.props.handler!==undefined){
            this.props.handler(this.props.data)
            console.log(this.props)
         }
     }

    render(){
        return(

            <div style={{border:this.props.border}} onClick={this.selectfunc.bind(this)}>
                <h1>{this.props.header}</h1>
                 <Name singleName={this.props.name}/>
                <h2>{this.props.email}</h2>
                <h2>{this.props.address}</h2>
            </div>
        )
    }
}

export default SingleData