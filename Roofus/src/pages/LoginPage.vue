<template>
  <div class="fullscreen text-white text-center bg-main-color">
  <div class="container-box q-mx-auto margin-t-44">
    <h5 class="f-18 main-color q-mt-none q-mb-none text-left">LOGIN</h5>
    <q-card class="my-card q-mt-none">
      <q-card-section>
        <div class="main-section"><div class="main-wrapper"><div class="login-img"><img src="/src/assets/login-img.png"></div>
    <div>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md">

      <div class="form-field-gap">
      <h6 class="main-color form-lable text-left">Username</h6>
      <q-input filled outlined clearable v-model="text" :dense="dense" />
      </div>
      <div>
      <h6 class="main-color form-lable text-left">Password</h6>
      <q-input filled outlined clearable v-model="text" :dense="dense" />
      </div>

      <div class="text-left margin-top-25">
        <q-btn label="Submit" class="text-capitalize bg-primary" type="submit" />
      </div>
    </q-form></div></div></div>
      </q-card-section>
    </q-card>
  </div>


  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LoginPage',
  methods: {
    // onLoginButtonClick() {
    //   this.$router.push('/header')
    // },
    onSubmit() {
      this.$router.push('/header')
    }
  }
})
</script>



<style lang="sass">
.header-wrapper
  background: #FAFAFA
  box-shadow: 0px 4px 10px rgb(0 0 0 / 9%)
  padding: 25px 30px
.login-img
  padding-bottom:35px
.q-card__section
  padding:25px
.container-box
  max-width:510px
.q-card
  background: #FFFFFF
  mix-blend-mode: normal
  box-shadow: 0px 0px 25px rgb(0 0 0 / 3%)
  border-radius: 10px
  margin: 20px auto 85px
.q-field--filled .q-field__control:hover:before
  opacity:0
.q-field--filled .q-field__control
  background: #FFFFFF
  mix-blend-mode: normal
  border: 1px solid #E1E1E1
  box-sizing: border-box
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.03)
  border-radius: 10px
.q-field__control
  color: transparent
</style>
