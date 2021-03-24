import React from 'react';
import UserName from './UserName';
class UserDetail extends React.Component{
    
    onClickHandler(){
        if(this.props.onClick!=undefined){
            this.props.onClick( this.props.user );
        }
    }
    
    render(){
        let data= null;
        if(this.props.select != undefined && this.props.user[ this.props.select ]){
            if(this.props.select ==="name"){
                data =  <UserName name={this.props.user.name}/> 
            }else {
                data = <h1> {this.props.user[ this.props.select]} </h1>
            }
            
        }else{
            data = <>
                <UserName name={this.props.user.name}/>
                <p> 
                {this.props.user.email}
                </p>
                <p> 
                {this.props.user.website}
                </p>
                <p>{this.props.user.phone}</p>
            </>
        }
    return <div onClick={this.onClickHandler.bind(this)}>
           {data}
        </div>
    }
}

export default UserDetail;