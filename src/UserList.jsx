import React from "react"
import SingleData from "./SingleData"
class UserList extends React.Component {
    render() {
        return (
            <div class="list-group">
                {this.props.userData.map((singleUser) => {
                    return <SingleData select={"name"} key={singleUser.id} data={singleUser} />
                })}
            </div>
        )
    }
}

export default UserList
