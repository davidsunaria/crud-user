import React from "react"
import SingleData from "./SingleData"
class UserList extends React.Component {

    render() {

        return (

            <div>
                {this.props.userData.map((singleUser) => {
                    return <SingleData select={"name"} key={singleUser.id} border="2px solid red" data={singleUser} />
                })}
            </div>
        )
    }
}

export default UserList
