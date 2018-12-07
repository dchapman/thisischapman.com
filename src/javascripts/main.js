import objectFitImages from 'object-fit-images';

import Vue from 'vue';

import Studies from './components/studies.vue';

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
    Studies
  },
  directives: {
    Imageloaded
  }
});
