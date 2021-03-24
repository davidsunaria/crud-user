import React from "react"

class Name extends  React.Component{


    render(){
        return(
            <h1 style={{background:"red"}}>{this.props.singleName}</h1>
        )
    }
}

export default Name