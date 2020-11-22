export const getCsrfToken = (state) => {
    return state.csrf;
}

export const getGqlToken = (state) => {
    return state.gqlToken;
}

export const getNavigationActive = (state) => {
    return state.navigationActive;
}