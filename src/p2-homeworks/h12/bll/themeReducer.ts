const initState = {
    theme: 'default',
    themes: ['dark', 'grey', 'red', 'yellow', 'green']
};

export type ThemeStateType = {
    theme: string,
    themes: Array<string>
}

export const themeReducer = (state: ThemeStateType = initState, action: ActionType): ThemeStateType => {
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, theme: action.theme};
        }
        default:
            return state;
    }
};

type ActionType = {
    type: 'CHANGE-THEME',
    theme: string,
}

export const changeThemeC = (theme: string): ActionType => {
    return {
        type: 'CHANGE-THEME',
        theme
    } as const}