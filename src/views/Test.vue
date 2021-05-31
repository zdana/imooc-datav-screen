<template>
  <div>
    <button @click="increment">{{state.count}}</button>
    double count:{{doubleCount}}
    <button @click="gotoAbout">About</button>
    <p>vuex number:{{number}}</p>
    <button @click="updateNumber">upadte number</button>
  </div>
</template>
<script>
  // 当export是一个function时，需要用以下方式进行导入和使用
  import useTest from './useTest.js'
  export default {
    setup() {
      // 不论userTest方法的复杂程度，最终暴露出来的都只是state和方法
      /* ---------------------------------------------- */
      // const { state, increment, doubleCount, gotoAbout, number } = useTest()
      // return {
      //   state,
      //   doubleCount,
      //   gotoAbout,
      //   increment
      // }
      /* --------------------------------------------- */
      // 以上代码相当于一下一行代码
      return useTest()
    }
  }
</script>
