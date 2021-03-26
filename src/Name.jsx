import React from "react"

class Name extends  React.Component{
    
    render(){
        return(
            <a className="list-group-item list-group-item-action">{this.props.singleName}</a>
        )
    }
}

export default Name