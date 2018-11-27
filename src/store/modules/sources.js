import Vue from "vue";
import { API_BASE_URL } from '../../api/baseUrls';
import { API_KEY } from '../../api/baseUrls';
import axios from "axios";

const mutationType = {
    INIT: 'INIT',
    GET_NEWS: 'GET_NEWS',
    GET_NEWS_SOURCES: 'GET_NEWS_SOURCES',
};

const state = {
    status: mutationType.INIT,
    selectedSources: [],
    selectedSource: ""
};

const getters = {
    selectedSources: state => state.selectedSources,
    selectedSource: state => state.selectedSource
};

const mutations = {
    [mutationType.GET_NEWS](state, sources) {
        state.selectedSources = sources;
    },
    [mutationType.GET_NEWS_SOURCES](state, source) {
        for (var i = 0; i < state.selectedSources.length; i++) {
            if (state.selectedSources[i].id === source) {
                state.selectedSource = state.selectedSources[i];
            }
        }
    }
};

const actions = {
    getNews({ commit }) {
        axios
            .get(`${API_BASE_URL}/sources?&apiKey=${API_KEY}`)
            .then(function(response) {
                commit("GET_NEWS", response.data.sources);
            })
            .catch(function(err) {
                console.log(err);
            });
    },
    getSelectedSources({ commit }, source) {
        commit("GET_NEWS_SOURCES", source);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};