const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

export type UserType = {
    name: string;
    id: number;
    uniqueUrlName: null;
    photos: {
        small: null;
        large: null;
    };
    status: null;
    followed: boolean;
}

export type LocationType = {
    city: string;
    country: string;
}

type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC> | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof  setTotalUsersCountAC>;

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
};

export type InitialStateType = {
    users: Array<UserType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
}

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            };
        case SET_USERS:
            return { ...state, users: [...action.users] };
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};
        default:
            return state;
    }
}

export const followAC = (userId: number) => ({
    type: FOLLOW,
    userId,
} as const);

export const unfollowAC = (userId: number) => ({
    type: UNFOLLOW,
    userId,
} as const);

export const setUsersAC = (users: Array<UserType>) => ({
    type: SET_USERS,
    users,
} as const);

export const setCurrentPageAC = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
} as const);

export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
} as const);

export default usersReducer;

