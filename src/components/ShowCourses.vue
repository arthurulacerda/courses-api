<template>
  <div id="show-courses">
    <ul>
      <li v-for="course in courses">
        <router-link v-bind:to="'/curso/'+course.id">
          <h1>{{course.title}}</h1>
          <img v-bind:src="course.banner">
        </router-link>
      </li>
    </ul>
    <h1 v-show="!ajaxLoaded">Carregando Cursos, aguarde um instante...</h1>
    <button class="btn btn-primary" v-show="showButton" v-on:click="getMoreCourses">Ver Mais Cursos</button>
  </div>
</template>

<script>
export default {
  data () {
    return{
      allCourses: [],
      courses: [],
      loadedCourses: 12,
      offsetCourses: 12,
      showButton: false,
      ajaxLoaded: false
    }
  },
  methods:{
    getMoreCourses: function(){
      var firstIndex = this.loadedCourses
      var lastIndex = this.loadedCourses + this.offsetCourses
      this.courses = this.courses.concat(this.allCourses.slice(firstIndex, lastIndex))
      this.loadedCourses = lastIndex
      if(this.allCourses.length <= this.loadedCourses)
        this.showButton = false
    },
  },
  beforeCreate() {
    this.$http.get('https://cefis.com.br/api/v1/event').then(function(data){
      console.log(data.body.data)
      this.allCourses = data.body.data
      this.courses = this.allCourses.slice(0,12)
      if(this.allCourses.length <= 12)
        this.showButton = false
      else
        this.showButton = true
      this.ajaxLoaded = true
    })
  }
}
</script>

<style lang="scss" scoped>
#show-courses{
  width: 100%;
  margin: 20px auto;
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    li{
      flex-grow: 1;
      flex-basis: 300px;
      text-align: center;
      padding: 30px;
      border: 1px solid #222;
      margin: 10px;
    }
  }
}
</style>
