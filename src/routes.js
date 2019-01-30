import ShowCourses from './components/ShowCourses.vue';
import SingleCourse from './components/SingleCourse.vue';

export default [
  {path: '/', component: ShowCourses},
  {path: '/curso/:id', component: SingleCourse}
]
