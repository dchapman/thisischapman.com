import objectFitImages from 'object-fit-images';

import Vue from 'vue';

import Pageheader from './components/pageheader';
import Imageloaded from './directives/imageloaded';

Vue.config.productionTip = false;

export default new Vue({
  el: '#app',
  mounted() {
    objectFitImages();
  },
  components: {
    Pageheader
  },
  directives: {
    Imageloaded
  }
});
