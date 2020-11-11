<template>
    <div class="main">
        <span v-if="prestatus" @click="prepage">上一页</span>
       <div class="pagenum">
        <span @click="changenum(index)" :class="num == index ? 'active' : ''" v-for="(item,index) in pageNum" :key="index">{{item}}</span>
       </div>
        <span v-if="nextstatus"  @click="nextpage">下一页</span>
    </div>
</template>
<script>
export default {
    props:['pageSize','total','pageNum','currentPage'],
    data() {
        return {
            prestatus: true,
            nextstatus: true,
            num: 0
        }
    },
    mounted(){
        // console.log(this.currentPage);
        // 将传过来的当前页currentPage赋值给num
        this.num = this.currentPage;
        this.num--;
    },
    methods: {
        // 如果使用currentPage就会报错, 因为props的值, 不能修改, 只能show, 通过props传递给子组件的值，不能在子组件内部修改props中的值
        prepage() {

            // 设置结束条件
            if(this.num == 0) {
                // 说明到了第一页, 就结束
                this.num = 0
                return false;
            } else {
                this.num--;
            }
            console.log(this.num);

        },
        changenum(val) {
            console.log(val);
            this.num = val;
        },
        nextpage() {
            
            //设置结束条件, 点到最后一页的时候就不再点击
            if(this.num == this.total/this.pageSize-1) {
                return false;
            } else {
                // 每次点击下一页就加加
                this.num++;
            }
            console.log(this.num);
        }
    }
}
</script>
<style scoped>
.main {
    display: flex;
}
span {
    margin-left: 10px;
    cursor: pointer;
}
.pagenum span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #999;
    text-align: center;
    line-height: 20px;
}
.pagenum span.active {
    color: red;
}
</style>