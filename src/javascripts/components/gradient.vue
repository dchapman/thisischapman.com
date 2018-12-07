<template>
  <div class="canvas">
    <canvas id="gradient-canvas"></canvas>
  </div>
</template>

<script>
  import scaleCanvas from '../utils/scale-canvas';

  export default {
    name: 'gradient',
    data() {
      return {
        colors: [
          {
            a: 'rgba(235, 32, 80, 0.8)',
            b: 'rgba(247, 9, 31, 0)'
          }
        ]
      };
    },
    methods: {
      onClick() {
        //
      },
      resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.widthHalf = this.width / 2;
        this.heightHalf = this.height / 2;

        scaleCanvas(this.canvas, this.ctx, this.width, this.height);

        this.aspectRatio = this.width / this.height;

        if (this.aspectRatio < 1) {
          this.size = this.height;
        } else {
          this.size = this.width;
        }
      },
      mousemove(e) {
        this.x = e.clientX;
        this.y = e.clientY;
      },
      touchstart(e) {
        this.x = e.touches[0].clientX;
        this.y = e.touches[0].clientY;
      },
      loop() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.draw();
        requestAnimationFrame(this.loop);
      },
      draw() {
        this.mouseX += (this.x - this.mouseX) * this.speed;
        this.mouseY += (this.y - this.mouseY) * this.speed;

        const grd = this.ctx.createRadialGradient(this.mouseX, this.mouseY, 0, this.widthHalf, this.heightHalf, this.size);
        grd.addColorStop(0.0, this.colors[0].a);
        grd.addColorStop(0.7, this.colors[0].b);

        this.ctx.fillStyle = grd;
        this.ctx.fillRect(0, 0, this.width, this.height);
      },
      addEventListeners() {
        document.addEventListener('mousemove', this.mousemove);
        document.addEventListener('click', this.onClick);
        document.addEventListener('touchstart', this.touchstart);
        window.addEventListener('resize', this.resize);
      }
    },
    mounted() {
      this.canvas = this.$el.querySelector('#gradient-canvas');

      this.ctx = this.canvas.getContext('2d');
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.widthHalf = this.width / 2;
      this.heightHalf = this.height / 2;
      this.x = this.widthHalf;
      this.y = this.heightHalf;
      this.mouseX = this.x;
      this.mouseY = this.y;
      this.size = this.width;
      this.speed = 0.05;
      this.addEventListeners();

      this.loop();
      this.resize();
    }
  };
</script>
