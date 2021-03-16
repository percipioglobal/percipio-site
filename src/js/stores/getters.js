export const getCsrfToken = (state) => {
    return state.csrf;
}

export const getNavigationGqlToken = (state) => {
    return state.gqlNavigationToken;
}

export const getNavigationActive = (state) => {
    return state.navigationActive;
}

export const getNavigationPrimary = (state) => {
    return state.navigationPrimary;
}

export const getSocialMediaLinks = (state) => {
    return state.socialMediaLinks;
}

export const getVacancies = (state) => {
    return state.vacancies;
}