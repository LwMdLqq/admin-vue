<template>
  <div class="hello">
    <!-- <span>{{this.$store.state.name}}</span><button @click="noparam">不带参数设置</button> -->
    <!-- getters不带参数 -->
    <!-- <span>{{this.$store.getters.computeparam}}</span><button @click="noparam">不带参数设置</button> -->
    <!-- getters带参数 -->
    <span>{{computewithparam('666')}}</span><button @click="noparam">不带参数设置</button>
    <input type="text" v-model="withname" /><button @click="param">带参数设置</button>
    <!-- pageSize: 每页多少条
         total: 总条数
         pageNum: 一共有几页
         currentPage: 当前是第几页 -->
    <PageView 
      :pageSize="10"
      :total="20"
      :pageNum="2"
      :currentPage="2"></PageView>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex';
import PageView from '@/common/PageView';
export default {
  name: 'HelloWorld',
  components: {
    PageView
  },
  data () {
    return {
      withname: ''
    }
  },
  computed: {
    ...mapState({
      name: state => state.name
    }),
    ...mapGetters([
      'computeparam',
      'computewithparam'
    ])
  },
  methods: {
    // vuex是状态管理模式
    //State是共享状态 , 也就是变量
    // Mutation是更改store状态的唯一方法 , 通过提交mutation修改状态 ,同步操作 , 不可异步操作
    // Action是通过提交Mutation来更改状态 ,不可直接更改 , 支持异步操作
    // Getter 基于store的派生状态 , 相当于组件中的计算属性
    ...mapMutations({
      changetoparam: 'changetoparam',
      changewithparam: 'changewithparam'
    }),
    ...mapActions({
      asyncchangetoparam: 'asyncchangetoparam',
      asyncchangewithparam: 'asyncchangewithparam'
    }),
    noparam: function () {
      // 点击按钮设置state的值
      // this.$store.commit('changetoparam')
      // this.$store.dispatch('asyncchangetoparam')
      // this.changetoparam();
      this.asyncchangetoparam();

    },
    param: function () {
      // this.$store.commit('changewithparam', {
      //   name: this.name
      // })
      // this.$store.dispatch('asyncchangewithparam',{
      //   name: this.withname
      // })
      // 使用辅助函数之后
      // this.changewithparam({
      //   name:this.withname
      // })
      this.asyncchangewithparam({
        name: this.withname
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
