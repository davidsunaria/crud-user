import React from "react"
import Name from "./Name"
import { UserContext } from "./ContextApi"


class SingleData extends React.Component {
    static contextType = UserContext;

    selectFunc() {
        if(this.props.data !==undefined){
            this.context.handler(this.props.data)
        }
    }

    render() {
        
        let finalValue = null
       
        if (this.props.select !== undefined) {
            finalValue = <Name singleName={this.props.data[this.props.select]} />
        } else {
           

            finalValue =  <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{this.props.header}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{this.context.selectedUser.name}</h6>
                <p className="card-text">{this.context.selectedUser.address.street} {this.context.selectedUser.address.suite} { this.context.selectedUser.address.city }</p>
                <a href="#" className="card-link">{this.context.selectedUser.phone}</a>
                <a href="#" className="card-link">{this.context.selectedUser.email}</a>
            </div>
            </div>
        
        }
        return (
            <div style={{ border: this.props.border }} onClick={this.selectFunc.bind(this )}>
                {finalValue}
            </div>  
        )
    }
}

export default SingleData