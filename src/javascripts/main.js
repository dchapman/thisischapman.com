import objectFitImages from 'object-fit-images';

import Vue from 'vue';

import Avatar from './components/avatar';
import Gradient from './components/gradient.vue';
import Studies from './components/studies';

import Imageloaded from './directives/imageloaded';

Vue.config.productionTip = false;

export const eventBus = new Vue();

export default new Vue({
  el: '#app',
  mounted() {
    objectFitImages();
  },
  data() {
    return {
      studiesOpen: false
    };
  },
  methods: {
    toggleStudies() {
      this.studiesOpen = !this.studiesOpen;
    }
  },
  components: {
    Avatar,
    Gradient,
    Studies
  },
  directives: {
    Imageloaded
  }
});
