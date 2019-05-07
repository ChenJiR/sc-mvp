export default {
  state: {
    //页面请求数据
    token:''
  },
  getters: {
    getToken: (state) => ()=>{
      return state.token;
    }
  },
  mutations: {
    setToken(state,token){
      state.token = token
      console.log(token)
    },
    clearToken(state){
      state.token = ''
    }
  },
  actions: {

  }
}
