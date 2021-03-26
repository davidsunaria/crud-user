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
            finalValue = <>
                    <h1>{this.props.header}</h1>
                    <Name singleName={this.context.selectedUser.name} />
                    <h2>{this.context.selectedUser.email}</h2>
                    <h2>{this.context.selectedUser.address.city}</h2>
                </>
        
        }
        return (
            <div style={{ border: this.props.border }} onClick={this.selectFunc.bind(this )}>
                {finalValue}
            </div>  
        )
    }
}

export default SingleData