import React from "react"
import Name from "./Name"
import { UserContext } from "./ContextApi"


class SingleData extends React.Component {

    selectfunc(contextData) {
        if(this.props.data !==undefined){
            contextData.handler(this.props.data)
        }
    }

    render() {
        let finalValue = null
       
        return (
            <UserContext.Consumer>{

                (contextData) => {
                    if (this.props.select !== undefined) {
                        finalValue = <Name singleName={this.props.data[this.props.select]} />
                    } else {
                        finalValue = <>
                                <h1>{this.props.header}</h1>
                                <Name singleName={contextData.selectedUser.name} />
                                <h2>{contextData.selectedUser.email}</h2>
                                <h2>{contextData.selectedUser.address.city}</h2>
                            </>
                    
                    }
                    return <div style={{ border: this.props.border }} onClick={this.selectfunc.bind(this,contextData )}>
                        {finalValue}
                    </div>

                }
            }

            </UserContext.Consumer>
        )
    }
}

export default SingleData