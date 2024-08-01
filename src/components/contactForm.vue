<template>
  <div class="form-container">
    <toastPopup ref="toast" />
    <form @submit.prevent="handleSubmit">
      <h1>Contact Us</h1>
   
      <div class="name-group">
        <div class="form-group">
          <label for="first-name">First Name*</label>
          <input 
            type="text" 
            id="first-name" 
            v-model="form.firstName" 
            :class="{'error-border': !form.firstName && submitted}"
          />
          <p v-if="!form.firstName && submitted" class="error-message">This field is required</p>
        </div>
        <div class="form-group">
          <label for="last-name">Last Name*</label>
          <input 
            type="text" 
            id="last-name" 
            v-model="form.lastName" 
            :class="{'error-border': !form.lastName && submitted}"
          />
          <p v-if="!form.lastName && submitted" class="error-message">This field is required</p>
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email*</label>
        <input 
          type="email" 
          id="email" 
          v-model="form.email" 
          :class="{'error-border': !isEmailValid && submitted}"
        />
        <p v-if="!isEmailValid && submitted" class="error-message">Please enter a valid email address</p>
      </div>

      <div class="form-group">
        <label>Query Type*</label>
        <div class="checkbox-group">
          <label>
            <input 
              type="radio" 
              v-model="form.queryType" 
              value="general" 
            />
            General Query
          </label>
          <label>
            <input 
              type="radio" 
              v-model="form.queryType" 
              value="support" 
            />
            Support Query
          </label>
        </div>
        <p v-if="!form.queryType && submitted" class="error-message">Please select a query type</p>
      </div>

      <div class="form-group">
        <label for="message">Message*</label>
        <textarea 
          id="message" 
          v-model="form.message" 
          :class="{'error-border': !form.message && submitted}"
        ></textarea>
        <p v-if="!form.message && submitted" class="error-message">This field is required</p>
      </div>

      <div class="form-group">
        <label>
          <input 
            type="checkbox" 
            v-model="form.consent" 
            :class="{'error-border': !form.consent && submitted}"
          />
          I consent to being contacted by the team
        </label>
        <p v-if="!form.consent && submitted" class="error-message">To submit this form, please consent to being contacted</p>
      </div>

      <div class="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import toastPopup from './toastPopup.vue';

export default {
  components: {
    toastPopup
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        queryType: '',
        message: '',
        consent: false
      },
      submitted: false
    };
  },
  computed: {
    isEmailValid() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(this.form.email);
    }
  },
  methods: {
    handleSubmit() {
      console.log('clicked')
      this.submitted = true;

      if (this.validateForm()) {
        // Show toast message
        this.$refs.toast.showToast('Thanks for completing the form. We’ll be in touch soon!');

        // Reset form after successful submission
        this.resetForm();
      }
    },
    validateForm() {
      return this.form.firstName && this.form.lastName && this.isEmailValid && this.form.queryType && this.form.message && this.form.consent;
    },
    resetForm() {
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        queryType: '',
        message: '',
        consent: false
      };
      this.submitted = false;
    }
  }
};
</script>

<style lang="scss">
@import '../assets/main.scss'; 
@import '../assets/variable.scss'; 

.name-group {
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 100%;
}

.name-group .form-group {
    flex: 1; 
}

@media (max-width: 586px) {
    .name-group {
        display: flex;
        flex-direction: column; // Change flex direction to column for smaller screens
        gap: 1rem;
        width: 100%;
    }

    .name-group .form-group {
        flex: none; // Ensure form-group takes its content's width
        width: 100%; // Ensure full width of the container
    }
}
</style>