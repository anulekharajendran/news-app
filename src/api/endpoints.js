import { API_BASE_URL } from './baseUrls';
import { API_KEY } from './baseUrls';

/**
 * api request objects including the method type and endpoints.
 */
export default {
    // #region Sources Endpoints
    sources: {
        getCategories: {
            method: 'GET',
            baseURL: `${API_BASE_URL}/sources?apiKey=${API_KEY}`,
        },
    },
    // #endregion Sources Endpoints

    // #region Everthing Endpoints
    everthing: {
        // getCategories: {
        //   method: 'GET',
        //   url: '/hashtags/ms/categories',
        // },
    },
    // #endregion Everthing Endpoints

    // #region Top Headlines Endpoints
    topheadlines: {
        // getCategories: {
        //   method: 'GET',
        //   url: '/hashtags/ms/categories',
        // },
    },
    // #endregion Top Headlines Endpoints
};