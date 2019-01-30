<template>
  <div id="single-course">
    <h1>{{course.title}}</h1>
    <h4>Com: {{course.teachers_names}}</h4>
    <img v-bind:src="course.banner">
    <div v-if='lessons && lessons.length'>
      <h5>O QUE VOCÊ VAI APRENDER</h5>
      <ul>
        <li v-for="lesson in lessons">
          {{lesson.position}} - {{lesson.title}}
        </li>
      </ul>
    </div>
    <div v-else>
      <h5>EM BREVE</h5>
    </div>
    <div>
      <h5>SOBRE O CURSO</h5>
      <p>{{course.resume}}</p>
      <h5>OBJETIVO GERAL</h5>
      <p>{{course.resume}}</p>
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
</style>
