import * as actions from './actions.js';
import * as getters from './getters.js';
import * as mutations from './mutations.js';

// Main Store
export const createStore = async(Vue) => {
    const { default: Vuex } = await import(/* webpackChunkName: "vuex" */ 'vuex');
    Vue.use(Vuex);
    return new Vuex.Store({
        state: {
            csrf: null,
            gqlNavigationToken: null,
            navigationActive: false,
            navigationPrimary: null,
            socialMediaLinks: null,
            vacancies: null,
        },
        getters,
        mutations,
        actions,
        modules: {}
    })
}