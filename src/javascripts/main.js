import objectFitImages from 'object-fit-images';

import Vue from 'vue';

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
    Gradient,
    Studies
  },
  directives: {
    Imageloaded
  }
});
