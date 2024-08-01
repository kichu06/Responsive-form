<template>
  <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div v-if="show" class="toast">
      <div class="toast-title"><img src="../assets/images/icon-success-check.svg" alt="Message sent icon"/> Message Sent!</div>
      <div class="toast-content"><p>{{ message }}</p></div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: ''
    };
  },
  methods: {
    showToast(message) {
      this.message = message;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 3000); // Show toast for 3 seconds
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight; // trigger reflow
      el.style.transition = 'opacity 0.5s';
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.transition = 'opacity 0.5s';
      el.style.opacity = 0;
      done();
    }
  }
};
</script>

<style lang="scss">
@import '../assets/toast.scss'
</style>