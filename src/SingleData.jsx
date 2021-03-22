import React from "react"
import Name from "./Name"


class SingleData  extends React.Component{

     selectfunc(){
       this.props.handler(this.props)
      console.log(this.props.name)
     }

    render(){
        return(

            <div style={{border:this.props.border}} onClick={this.selectfunc.bind(this)}>
                <h1>{this.props.header}</h1>
                 <Name singleName={this.props.name}/>
                <h2>{this.props.email}</h2>
            </div>
        )
    }
}

export default SingleData