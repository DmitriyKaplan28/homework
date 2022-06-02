export type InitStateType = {
    isLoading: boolean
}

type LoadingAT = {
    type:'CHANGE-LOADING-STATUS'
    isLoading: boolean
}

const initState = {
    isLoading: false
}

const CHANGE_LOADING_STATUS = 'CHANGE-LOADING-STATUS'

type ActionType = LoadingAT //понимаю, что в случае с одним экшеном это лишнее, сделал на случай если нужно будет добавить другие

export const loadingReducer = (state:InitStateType = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case CHANGE_LOADING_STATUS: {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingAT => {
    return {
        type: CHANGE_LOADING_STATUS,
        isLoading
    } as const
}