import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

import auth from './modules/auth'

const store = new vuex.Store({
    modules: {
      auth: auth,
    }
})

export default store
