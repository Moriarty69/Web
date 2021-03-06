import Users from './Users';
import {followeAC, unfolloweAC, setUsersAC} from '../../redux/Users-Reduser';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followeAC(userId)),
        unfollow: (userId) => dispatch(unfolloweAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;