<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <h1> Login Page </h1>
    <q-btn color="white" text-color="black" label="Login" @click="onLoginButtonClick" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  methods: {
    onLoginButtonClick() {
      console.log('onLoginButtonClick');
    }
  }
})
</script>
