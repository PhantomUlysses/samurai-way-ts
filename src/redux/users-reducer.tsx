const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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

type ActionsTypes = ReturnType<typeof follow> | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount> | ReturnType<typeof toggleIsFetching>;

export type InitialStateType = {
    users: Array<UserType>;
    pageSize: number;
    totalUsersCount: number;
    currentPage: number;
    isFetching: boolean;
};

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
};

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
            return {...state, users: [...action.users]};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        default:
            return state;
    }
}

export const follow = (userId: number) => ({
    type: FOLLOW,
    userId,
} as const);

export const unfollow = (userId: number) => ({
    type: UNFOLLOW,
    userId,
} as const);

export const setUsers = (users: Array<UserType>) => ({
    type: SET_USERS,
    users,
} as const);

export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
} as const);

export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
} as const);

export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
} as const);

export default usersReducer;

