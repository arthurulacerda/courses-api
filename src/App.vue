<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import ShowCourses from './components/ShowCourses.vue';
import SingleCourse from './components/SingleCourse.vue';
export default {
  components:{
    'app-header': Header,
    'app-show-courses': ShowCourses,
    'app-single-course': SingleCourse,
  },
  data () {
    return {
    }
  },
}
</script>

<style lang='scss' scoped>
div{
  background-color: #f0f0f0;
}
</style>
