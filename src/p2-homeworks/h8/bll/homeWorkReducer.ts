import { UserType} from "../HW8";

type ActionType = ReturnType<typeof sortUpAC>
    | ReturnType<typeof check18AC>
    | ReturnType<typeof sortDownAC>

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            if(action.payload === 'up') {
                return  [...state.sort((a, b) => a.name.toLowerCase() <= b.name.toLowerCase() ? -1 : 1)]
            } else return [...state.sort((a, b) => a.name.toLowerCase() >= b.name.toLowerCase() ? -1 : 1)]
        //else return 0
        }
        case 'check': {
            // need to fix
            return [...state.filter(u => u.age >= action.payload)]
        }
        default:
            return state
    }
}

const sortUpAC = () => {
    return {
        type: 'sort',
        payload: 'up'
} as const
}

const sortDownAC = () => {
    return {
        type: 'sort',
        payload: 'down'
    } as const
}


const check18AC = () => {
    return {
        type: 'check',
        payload: 18
    } as const
}