<template>
  <div id="single-course">
    <div class="col-6">
      <b-card class='main-card'>
        <h1>{{course.title}}</h1>
        <h4>Com: {{course.teachers_names}}</h4>
        <div class="banner-img">
          <img v-bind:src="course.banner">
        </div>
      </b-card>
    </div>
    <div class="col-6">
      <b-card>
        <div>
          <h3>SOBRE O CURSO</h3>
          <p>{{course.resume}}</p>
          <h3>OBJETIVO GERAL</h3>
          <p>{{course.resume}}</p>
        </div>
      </b-card>
    </div>
    <div class='course-content col-12'>
      <b-card>
        <div v-if='lessons && lessons.length'>
          <h2>O QUE VOCÊ VAI APRENDER</h2>
          <ul>
            <li v-for="lesson in lessons">
              {{lesson.position}} - {{lesson.title}}
            </li>
          </ul>
        </div>
        <div v-else>
          <h5>EM BREVE</h5>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      course: {},
      lessons: null,
    }
  },
  created() {
    this.$http.get('https://cefis.com.br/api/v1/event/'+ this.id + '?include=classes').then(function(data){
      this.course = data.body.data
      this.lessons = this.course.classes
    })
  }
}
</script>

<style lang="scss" scoped>
#single-course{
  width: 100%;
  margin: 20px auto;
  padding: 0 20px;
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  .banner-img{
    position: relative;
    img{
      width: 100%;
    }
  }
  .main-card{
    background-color: #eee
  }
  .card{
    margin-top: 20px;
  }
  .course-content{
    font-size: 25px;
  }
}
</style>
