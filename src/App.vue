<template>
  <div class="form-align">
    <ContactForm/>
  </div>
</template>

<script>
import ContactForm from './components/contactForm.vue';


export default {
  name: 'App',
  components: {
    ContactForm
  }
}
</script>

<style lang="scss">
@import './assets/main.scss';
</style>
