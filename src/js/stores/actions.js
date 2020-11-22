import axios from 'axios';
import { configureXhrApi, executeXhr } from '../utils/xhr.js';
import { configureGqlApi, executeGqlQuery } from '../utils/gql.js';
import { SOCIAL_MEDIA_QUERY, NAVIGATION_PRIMARY_QUERY } from '../data/queries.js';


const CSRF_ENDPOINT = '/actions/site-module/csrf/get-csrf';
const NAVIGATION_TOKEN_ENDPOINT = '/actions/site-module/csrf/get-gql-navigation-token';
const GRAPHQL_ENDPOINT = '/api';

// Fetch & commit the CSRF token
export const fetchCsrf = async({commit}) => {
    const api = axios.create(configureXhrApi(CSRF_ENDPOINT));
    let variables = {
    };
    // Execute the XHR
    await executeXhr(api, variables, (data) => {
        commit('setCsrf', data);
    });
};

// Fetch & commit the GraphQL token
export const fetchNavigationGqlToken = async({commit, state}) => {
    const api = axios.create(configureXhrApi(NAVIGATION_TOKEN_ENDPOINT));
    let variables = {
        ...(state.csrf && { [state.csrf.name]: state.csrf.value }),
    };
    // Execute the XHR
    await executeXhr(api, variables, (data) => {
        commit('setNavigationGqlToken', data);
    });
};

// Fetch & update the social media links.
export const fetchSocialMediaLinks = async({commit, state}) => {
    const token = state.gqlToken ? state.gqlToken.token : null;

    // Configure our API endpoint
    const api = axios.create(configureGqlApi(GRAPHQL_ENDPOINT, token));

    // Construct the variables object
    let variables = {
    }

    // Execute the GQL query
    await executeGqlQuery(api, SOCIAL_MEDIA_QUERY, variables, (data) => {
        if (data.globalSet) {
            commit('setSocialMediaLinks', data.globalSet);
        }
    })
}

// Fetch & update the social media links.
export const fetchNavigationPrimary = async({commit, state}) => {
    const token = state.gqlToken ? state.gqlToken.token : null;

    // Configure our API endpoint
    const api = axios.create(configureGqlApi(GRAPHQL_ENDPOINT, token));

    // Construct the variables object
    let variables = {
    }

    // Execute the GQL query
    await executeGqlQuery(api, NAVIGATION_PRIMARY_QUERY, variables, (data) => {
        if (data.nodes) {
            commit('setNavigationPrimary', data.nodes);
        }
    })
}