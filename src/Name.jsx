import React from "react"

class Name extends  React.Component{
    
    render(){
        return(
            <h3 className="list-group-item list-group-item-action">{this.props.singleName}</h3>
        )
    }
}

export default Name