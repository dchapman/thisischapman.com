export default {
  name: 'pageheader',

  data() {
    return {
      isSticky: false
    };
  },

  mounted() {
    document.onkeydown = this.captureEscape.bind(this);

    window.addEventListener('scroll', this.onScroll.bind(this));
  },

  methods: {
    onScroll() {
      const maxOffset = 48;

      if (!this.isSticky && window.pageYOffset >= maxOffset) {
        this.isSticky = true;
      } else if (this.isSticky && window.pageYOffset < maxOffset) {
        this.isSticky = false;
      }
    }
  }
};
