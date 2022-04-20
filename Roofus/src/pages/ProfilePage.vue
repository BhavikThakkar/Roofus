<template>
  <div class="bg-main-color">
    <div class="text-white text-center display-inline w-100 margin-t-60 q-mb-xl margin-b-44">
      <div class="container-box q-mx-auto margin-t-44 account-profile">
          <h5 class="f-18 main-color q-mt-none q-mb-none text-left fw-600 line-height-27">ACCOUNT</h5>
          <div class="">
            <q-card class="profile-left">
              <q-card-section>
                <div class="profile-img q-mx-auto"><img src="/src/assets/user-img.png"></div>
                <div class="flex margin-top-25 items-center justify-center"><img width="15" height="15" src="/src/assets/edit-profile.png"><h6 class="q-ml-sm q-mt-sm secodary-font-color f-14 line-height-21">Change Image</h6></div>
              </q-card-section>
            </q-card>
            <q-card class="q-mt-none profile-right card-without-m p-relative">
              <q-card-section>
                <div class="main-section">
                <div class="main-wrapper flex">
                  <div class="profile-content w-100">
                    <div class="proflie-title flex items-center"><div class="avtart-img flex items-center justify-center"><img width="19" height="19" src="/src/assets/avtar.png"></div><h6 class="f-18 main-color text-left">Profile Information</h6></div>
                    <q-form

                      class="q-gutter-md proflie-form">
                      <div class="form-field-gap">
                      <h6 class="main-color form-lable text-left">Email</h6>
                      <q-input filled outlined clearable v-model="text" :dense="dense" />
                      </div>
                      <div>
                      <h6 class="main-color form-lable text-left">Phone Number</h6>
                      <q-input filled outlined clearable v-model="text" :dense="dense" />
                      </div>
                      <div class="text-left margin-t-30">
                        <q-btn label="Edit Profile" class="text-capitalize white q-mr-sm bg-primary btn-fixwd-height btn-profile" type="submit" />
                        <q-btn label="Change Password" @click="changePassword = true" class="text-capitalize secodary-font-color btn-fixwd-height change-password" type="submit" />
                      </div>
                    </q-form>
                  </div>
                </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
        <q-dialog v-model="changePassword">
          <q-card>
            <div class="mx-20 my-20">
              <div class="text-h6 line-height-27 f-18 main-color">Change Password</div>
            </div>
            <div class="mx-20 flex">
                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md change-password-form">
                      <div class="margin-b-20">
                        <h6 class="main-color form-lable text-left">Current Password</h6>
                        <q-input filled outlined clearable v-model="text" :dense="dense" />
                      </div>
                      <div class="margin-b-20">
                        <h6 class="main-color form-lable text-left">New Password</h6>
                        <q-input filled outlined clearable v-model="text" :dense="dense" />
                      </div>
                      <div class="margin-b-20">
                        <h6 class="main-color form-lable text-left">Confirm Password</h6>
                        <q-input filled outlined clearable v-model="text" :dense="dense" />
                      </div>
                      <div class="margin-b-20">
                        <h6 class="main-color form-lable text-left f-12">Your password must contain at least 1 number, 1 special character and 1 upper case alphabet.</h6>
                      </div>
                    </q-form>
            </div>

            <q-card-actions align="right" class="q-py-none q-px-none">
              <q-btn flat label="Save" class="save-btn text-capitalize white mx-20 my-20 bg-primary btn-fixwd-height" type="submit" v-close-popup/>
            </q-card-actions>
          </q-card>
        </q-dialog>
</template>

<script>
import { defineComponent,ref  } from 'vue'

export default defineComponent({
  name: 'ProfilePage',
  setup () {
    return {
      changePassword: ref(false)
    }
  }
})
</script>

<style lang="scss">
.profile-img{
  width:196px;
  height:196px;
}
.profile-img img{
  width:100%;
  height:100%;
  border-radius:100%;
}
.profile-left{
  width: 270px;
  margin-right:20px;
  float: left;
}
.profile-right{
    width: calc(100% - 290px);
    margin-left: auto;
    margin-right: 0;
    display: inline-block;
}
.q-field--filled .q-field__control:hover:before{
  opacity:0;
}
.q-field--filled .q-field__control{
  background: #FFFFFF;
  mix-blend-mode: normal;
  border: 1px solid #E1E1E1;
  box-sizing: border-box;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
}
.q-field__control{
  color: transparent;
}
.avtart-img{
  background: #ccc;
  background: rgba(182, 82, 7, 0.15);
  mix-blend-mode: normal;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 3px;
  width: 40px;
  height: 40px;
}
.proflie-title:after{
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  border-bottom: 1px solid #E0E0E0;
  top: 85px;
}
.proflie-title{
  padding-bottom: 43px;
}
.proflie-form .q-input{
  width:459px;
}
.btn-profile{
  min-width:114px !important;
}
.change-password{
  background: rgba(182, 82, 7, 0.2);
  width:170px;
}
.container-box{
  max-width:1140px;
}
.q-card__section{
  padding:25px;
}
.q-card{
  background: #FFFFFF;
  mix-blend-mode: normal;
  box-shadow: 0px 0px 25px rgb(0 0 0 / 3%);
  border-radius: 10px;
  margin: 20px auto 0px;
}
.save-btn{
  min-width:75px;
}


@media(max-width:1200px){
  .container-box{max-width: 100%;padding: 0px 30px;}

}

@media(max-width:992px){
  .proflie-form .q-input{width: 100%;}
}

@media(max-width:767px){
  .container-box {padding-bottom: 60px;margin-top: 20px;}
  .profile-right, .profile-left{width: 100%;}
  .profile-left{margin-top: 10px;}
  .q-card__section{padding: 20px;}
}

@media(max-width:391px){
  .change-password{margin-top: 10px;}
}

</style>
