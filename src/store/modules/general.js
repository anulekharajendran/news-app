import Vue from "vue";
import { API_BASE_URL } from '../../api/baseUrls';
import { API_KEY } from '../../api/baseUrls';
import axios from "axios";

const mutationType = {
    INIT: 'INIT',
    GET_CATEGORY: 'GET_CATEGORY',
    GET_CATEGORY_SOURCES: 'GET_CATEGORY_SOURCES',
};

const state = {
    status: mutationType.INIT,
    categorySources: []
};

const getters = {
    categorySources: state => state.categorySources
};

const mutations = {
    [mutationType.GET_CATEGORY](state, categories) {
        state.categorySources = categories;
    }
};

const actions = {
    getCategory({ commit }) {
        axios
            .get(
                `${API_BASE_URL}/sources?category=${this.category}&language=en&apiKey=${API_KEY}`
            )
            .then(function(response) {
                commit("GET_CATEGORY", response.data.sources);
            })
            .catch(function(err) {
                console.log(err);
            });
    },
    getCategorySources({ commit }, categories) {
        commit("GET_CATEGORY_SOURCES", categories);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};