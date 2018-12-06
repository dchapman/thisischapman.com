<template>
  <div class="studies">
    I'm studies!
    <ul class="studies__list">
      <li v-for="study in studies"><span v-text="study.title"></span></li>
    </ul>
  </div>
</template>

<script>
  import 'promise-polyfill/src/polyfill';
  import 'whatwg-fetch';

  import {apiEndpoint, bearerToken} from '../utils/config';

  import { eventBus } from "../main";

  export default {
    name: 'studies',
    data() {
      return {
        studies: []
      }
    },
    mounted() {
      if (this.studies.length) {
        console.log('there were already studies!', this.studies);
      } else {
        console.log(this.studies.length);
        this.fetchStudies();
      }
    },
    methods: {
      fetchStudies() {
        const query = `
          query {
            getCaseStudyList {
              total
              items {
                title
              }
            }
          }
        `;

        fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${bearerToken}`
          },
          body: JSON.stringify({query})
        })
          .then(res => res.json())
          .then(res => {
            this.studies = res.data.getCaseStudyList.items;
            console.log(this.studies);
          })
          .catch(function (error) {
            console.log(error);

            this.error = error;
          });
      }
    },
    components: {}
  }
</script>
