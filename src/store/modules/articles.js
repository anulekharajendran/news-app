import Vue from "vue";
import { API_BASE_URL } from '../../api/baseUrls';
import { API_KEY } from '../../api/baseUrls';
import axios from "axios";

const mutationType = {
    INIT: 'INIT',
    GET_NEWS: 'GET_NEWS',
    GET_NEWS_SOURCES: 'GET_NEWS_SOURCES',
    GET_NEWS_ARTICLES: 'GET_NEWS_ARTICLES',
};

const state = {
    newsArticles: []
};

const getters = {
    newsArticles: state => state.newsArticles
};

const mutations = {
    [mutationType.GET_NEWS_ARTICLES](state, source) {
        state.newsArticles = source;
    }
};

const actions = {
    getNewsArticle({ commit }, state) {
        return new Promise(resolve =>
            axios
            .get(
                `${API_BASE_URL}/everything?sources=${this.source}&language=en&apiKey=${API_KEY}`
            )
            .then(function(response) {
                commit("GET_NEWS_ARTICLES", response.data.articles);
                resolve("ok");
            })
            .catch(function(err) {
                console.log(err);
            })
        );
    },
};

export default {
    state,
    getters,
    mutations,
    actions
};