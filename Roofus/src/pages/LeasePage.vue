<template>
  <div class="bg-main-color lease-screen">
    <div class="text-white text-center display-inline w-100 margin-t-60 q-mb-xl">
      <div class="container-box q-mx-auto margin-t-44">
          <h5 class="f-18 main-color q-mt-none q-mb-none text-left fw-600">LEASE DETAILS</h5>
          <div class="w-100 flex">
            <q-card class="q-mt-none lease-info lease-left p-relative">
                <q-card-section class="py-20 px-20">
                    <div class="main-section">
                      <div class="main-wrapper flex">
                        <div class="profile-content w-100 p-relative">
                          <div class="proflie-title flex items-center"><div class="avtart-img flex items-center justify-center"><img width="19" height="19" src="/src/assets/avtar.png"></div><h6 class="f-18 main-color text-left line-height-27">Tenant Information</h6></div>
                        </div>
                        <div class="row w-100">
                          <div class="col-6">
                            <h6 class="f-14 main-color text-left line-height-21 fw-300 q-pb-xs">Name</h6>
                            <h6 class="f-14 main-color text-left line-height-21 fw-600">Patrick Mannion</h6>
                          </div>
                          <div class="col-6">
                            <h6 class="f-14 main-color text-left line-height-21 fw-300 q-pb-xs">Address</h6>
                            <h6 class="f-14 main-color text-left line-height-21 fw-600"><span>123 Property,</span><br><span class="flex"><span>ABC street,</span> <br><span>XYZ Avenue,</span></span><span>City 123456</span></h6>
                          </div>
                        </div>
                      </div>
                    </div>
                </q-card-section>
            </q-card>
            <q-card class="q-mt-none lease-info lease-right p-relative">
                <q-card-section class="py-20 px-20 ">
                    <div class="main-section">
                      <div class="main-wrapper flex">
                        <div class="profile-content p-relative flex justify-between w-100">
                          <div class="proflie-title flex items-center"><div class="avtart-img flex items-center justify-center"><img width="19" height="19" src="/src/assets/lease-info.png"></div><h6 class="f-18 main-color text-left line-height-27">Lease Information</h6></div>
                          <div class="proflie-title flex items-center cursor-pointer"><div class="flex items-center justify-center"><img width="11.91" height="15.33" src="/src/assets/download.png"></div><h6 class="q-ml-md f-14 secodary-font-color text-left line-height-21">Download Lease Agreement</h6></div>
                        </div>
                        <div class="row w-100">
                          <div class="col-6">
                            <h6 class="f-14 main-color text-left line-height-21 fw-300 q-pb-xs">Rental Amount</h6>
                            <h6 class="f-14 main-color text-left line-height-21 fw-600">$2200</h6>
                          </div>
                          <div class="col-6 lease-dusration" style="padding-left:75px">
                            <h6 class="f-14 main-color text-left line-height-21 fw-300 q-pb-xs">Lease Duration</h6>
                            <h6 class="f-14 main-color text-left line-height-21 fw-600 flex"><span>11 / 1 / 2020  - </span><span>11 / 1 / 2021</span> </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                </q-card-section>
            </q-card>
          </div>
      </div>
      <div class="container-box q-mx-auto margin-t-30 maintenance-request">
        <h5 class="f-18 main-color q-mt-none q-mb-none text-left fw-600">Lease History</h5>
        <q-card class="q-mt-none box-15">
          <q-card-section class="card-p-15">
            <div class="main-section">
              <div class="main-wrapper flex items-center lease-history">
                <div class="flex lease-history-wrapper lease-history-title">
                    <h6 class="f-14 text-left main-color fw-600 line-height-21">123 Property</h6>
                </div>
                <div class="flex lease-history-description row">
                  <div class="col-6 flex lease-flex-wrap">
                    <h6 class="f-14 text-left main-color fw-300 line-height-21 q-mr-md">Rental Amount</h6>
                    <h6 class="f-14 main-color text-left line-height-21 fw-600">$2200</h6>
                  </div>
                  <div class="col-6 flex lease-flex-wrap justify-end">
                    <h6 class="f-14 text-left main-color fw-300 line-height-21 q-mr-md">Lease Duration</h6>
                    <h6 class="f-14 main-color text-left line-height-21 fw-600 flex"><span>11 / 1 / 2020  - </span><span>11 / 1 / 2021</span> </h6>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
        <q-card class="q-mt-none box-15">
          <q-card-section class="card-p-15">
            <div class="main-section">
              <div class="main-wrapper flex items-center lease-history justify-between">
                <div class="flex lease-history-wrapper lease-history-title">
                    <h6 class="f-14 text-left main-color fw-600 line-height-21">ABC Property</h6>
                </div>
                <div class="flex lease-history-description row">
                  <div class="col-6 flex lease-flex-wrap">
                    <h6 class="f-14 text-left main-color fw-300 line-height-21 q-mr-md">Rental Amount</h6>
                    <h6 class="f-14 main-color text-left line-height-21 fw-600">$2200</h6>
                  </div>
                  <div class="col-6 flex lease-flex-wrap justify-end">
                    <h6 class="f-14 text-left main-color fw-300 line-height-21 q-mr-md">Lease Duration</h6>
                    <h6 class="f-14 main-color text-left line-height-21 fw-600 flex"><span>11 / 1 / 2020  - </span><span>11 / 1 / 2021</span> </h6>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent  } from 'vue'

export default defineComponent({
  name: 'LeasePage',
  methods: {
    // onLoginButtonClick() {
    //   console.log('onLoginButtonClick');
    // }
  }
})
</script>

<style lang="sass" scoped>
.lease-screen .container-box
  max-width:1140px
.lease-screen .q-card__section
  padding:25px
.lease-screen .q-card
  background: #FFFFFF
  mix-blend-mode: normal
  box-shadow: 0px 0px 25px rgb(0 0 0 / 3%)
  border-radius: 10px
  margin: 20px auto 0px
.lease-screen .avtart-img
  background: #ccc
  background: rgba(182, 82, 7, 0.15)
  mix-blend-mode: normal
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.03)
  border-radius: 10px
  padding: 10px
  margin-right: 20px
  border-radius: 10px
  width: 40px
  height: 40px
.proflie-title:after
  content: ''
  position: absolute
  top: 100%
  left: -25px
  right: 0
  width: calc(100% + 50px)
  border-bottom: 1px solid #E0E0E0
  top: 100%
.lease-right
  margin-left:10px !important
.lease-screen .lease-info
  width: calc(50% - 10px)
.lease-left
  margin-right:10px !important
.profile-content
  padding-bottom:23px
  margin-bottom:20px


.lease-history-wrapper > h6
  margin-right:253px
  min-width:96px
.box-15 .q-card__section
  padding:15px
.q-card.box-15
  margin-top: 10px


.lease-history-description
  width: calc(100% - 349px)
.lease-history-title
  width:349px

</style>
