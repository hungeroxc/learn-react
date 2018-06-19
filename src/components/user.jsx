import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUser} from './../store/action'

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

@connect(mapStateToProps, {getUser})
class User extends Component {

    getUser = () => {
        this.props.getUser()
    }

    render() {
        
        const {user} = this.props
        console.log(this.props)
        return (
            <div>
                {
                    user.isFetching
                    ?
                    <div>Loading...</div>
                    :
                    <h1>{user.user.email}</h1>
                }
                <p>
                    <button onClick={this.getUser}>ajax</button>
                </p>
            </div>
        )
    }
}

export default User
