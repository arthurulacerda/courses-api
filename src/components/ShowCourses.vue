<template>
  <div id="show-courses">
    <ul>
      <li class="col-12 col-sm-6 col-lg-4 col-md-4 col-xl-3" v-for="course in courses">
        <router-link v-bind:to="'/curso/'+course.id">
          <div class="course-area">
            <div class="course-info">
              <h1>{{course.title}}</h1>
            </div>
            <div class="course-banner">
              <img v-bind:src="course.banner">
            </div>
          </div>
        </router-link>
      </li>
    </ul>
    <h1 v-show="!ajaxLoaded">Carregando Cursos, aguarde um instante...</h1>
    <button class="btn btn-lg btn-primary btn-block" v-show="showButton" v-on:click="getMoreCourses">Ver Mais Cursos</button>
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
      ajaxLoaded: false,
      color: 'red'
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
  justify-content: center;
  ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    li{
      position: relative;
      color: white;
      transition: background-color 1s;
      .course-area{
        position:relative;
        margin:10px;
      }
      .course-info{
        position: absolute;
        width: 100%;
        padding: 10px;
        z-index: 2;
        background-color: rgba(0,0,0,0.7);
        color: #eee;
        overflow: hidden;
        h1{
          font-size: 30px;
        }
      }
      .course-banner{
        background-color: #AF5350;
        overflow: hidden;
        height: 300px;
        position: relative;
        z-index: 1;
        img{
          position: absolute;
          min-width: 100%;
          min-height: 300px;
        }
      }
    }
  }
  button{
    color: #fff;
    background-color: #8a8a8a;
    border-color: #7a7a7a;
  }
}
</style>
