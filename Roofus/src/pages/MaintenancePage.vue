<template>
  <div class="bg-main-color maintenance-screen">
    <!-- <h1> Maintenance Page Coming Soon !!!!!</h1> -->
    <div class="text-white text-center display-inline w-100 margin-t-60 margin-b-44">
      <div class="container-box q-mx-auto margin-t-44 overview-main">
        <h5 class="f-18 main-color q-mt-none q-mb-none text-left fw-600">
          MAINTENANCE
        </h5>
        <q-card class="my-card q-mt-none">
          <q-card-section>
            <div class="main-section">
              <div class="main-wrapper">
                <div class="overview-content">
                  <h3 class="f-30 text-center p-relative fw-600 q-mt-xl q-mb-xl secodary-font-color">
                    Maintenance Page Coming Soon !!!!!
                  </h3>
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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MaintenancePage',
  methods: {
  }
})
</script>

<style lang="scss">
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

@media(max-width:1200px){
  .container-box{
    width: 100%;
    padding: 0px 15px;
  }
}

@media(max-width:767px){
  .container-box {padding-bottom: 60px;margin-top: 20px;}
  .q-card__section{padding: 20px;}
  .q-card{margin-top: 10px;}
}
</style>
