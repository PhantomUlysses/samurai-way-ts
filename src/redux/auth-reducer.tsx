const SET_USER_DATA = "SET_USER_DATA";

type ActionsTypes = ReturnType<typeof setAuthUserData>;

export type AuthInitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
};

let initialState: AuthInitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state: AuthInitialStateType = initialState, action: ActionsTypes): AuthInitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login,
    }
} as const);


export default authReducer;

