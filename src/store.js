import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import modules from '../src/store/index.js';


Vue.use(Vuex);

const plugins = [];

const developmentMode = process.env.NODE_ENV === 'development';

// Enabling vuex action logger during development
if (developmentMode) plugins.push(createLogger());

export default new Vuex.Store({
    strict: developmentMode, // enable strict mode only in development mode
    modules,
    plugins,
});