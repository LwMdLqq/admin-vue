import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  name: '张三'
}
const mutations = {
  // 不带参数
  changetoparam (state) {
    // 调用这个方法, 就直接写死定义state的值
    state.name = '李四'
  },
  // 带参数
  changewithparam (state, payload) {
    state.name = payload.name
  }
}
// 在这里可以异步更改状态
// 但是也是异步调mutations的方法 , 不能直接更改state的值
// 只有mutations可以更改state的值
const actions={
    asyncchangetoparam(content) {
        setTimeout(function(){
            content.commit('changetoparam')
        },2000);
    },
    asyncchangewithparam(content,param) {
      setTimeout(function(){
        content.commit('changewithparam',param)
      },3000)
    }
}
// 类似计算属性
const getters = {
  computeparam(state){
    var str = '';
    if(state.name == '张三'){
      str = '最棒'
    }
    return state.name + str;
  },
  computewithparam: (state)=>(val)=>{
    var str = '';
    if(state.name == '张三'){
      str = val
    }
    return state.name + str;
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
