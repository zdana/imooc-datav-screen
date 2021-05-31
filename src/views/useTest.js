import { reactive, computed, watch, onMounted, getCurrentInstance } from 'vue'
export default function useTest() {
  // getCurrentInstance 获取vue实例，相当于vue2中的this
  const { ctx } = getCurrentInstance()
  // 获取路由信息
  console.log(ctx.$router.currentRoute.value)
  // 创建状态
  const state = reactive({
    count: 1
  })
  // 触发事件
  const increment = () => {
    state.count++
  }
  // 计算属性
  const doubleCount = computed(() => state.count * 2)
  // watch 属性
  watch(() => state.count, () => {
    console.log('state.count changed:' + state.count)
  })
  // 生命钩子函数
  onMounted(() => {
    console.log('onMounted......')
  })
  // 路由跳转
  const gotoAbout = () => {
    ctx.$router.push('/about')
  }
  // 使用vuex
  const number = computed(() => ctx.$store.state.number)
  const updateNumber = () => {
    // 同步
    // ctx.$store.commit('SET_NUMBER', state.count * 100)
    // 异步
    ctx.$store.dispatch('setNumber', state.count * 100)
  }
  return {
    state,
    doubleCount,
    gotoAbout,
    number,
    increment,
    updateNumber
  }
}
