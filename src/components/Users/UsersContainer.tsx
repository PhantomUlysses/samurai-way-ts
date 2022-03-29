import Users from "./Users";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {
    followAC,
    InitialStateType,
    setCurrentPageAC, setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/users-reducer";

type MapStateToPropsType = {
    usersPage: InitialStateType;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setUsers: (users: Array<UserType>) => void;
    setCurrentPage: (pageNumber: number) => void;
    setTotalUsersCount: (totalCount: number) => void;
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);