<template>
  <div class="bg-main-color overview-screen">
    <div
      class="text-white text-center display-inline w-100 margin-t-60 margin-b-44"
    >
      <div class="container-box q-mx-auto margin-t-44 overview-main">
        <h5 class="f-18 main-color q-mt-none q-mb-none text-left fw-600">
          OVERVIEW
        </h5>
        <!--Overview Details part design Start -->
        <q-card class="my-card q-mt-none">
          <q-card-section>
            <div class="main-section">
              <div class="main-wrapper flex">
                <div class="overview-content">
                  <h5
                    class="f-18 main-color q-mt-none q-mb-none text-left line-height-27 fw-600"
                  >
                    WELCOME TO ROOFUS!
                  </h5>
                  <h3 class="f-30 text-left text-border p-relative fw-600">
                    Jane Doe
                  </h3>
                  <p class="f-18 text-left margin-b-20 margin-t-37">
                    Here you will be able to view past and upcoming payments,
                    <br />create maintenance requests and view your lease
                    agreement.
                  </p>
                  <div class="text-left flex">
                    <q-btn
                      label="View Lease"
                      class="btn-with-icon view-lease btn-fixwd-height p-relative text-capitalize bg-primary margin-r-10 margin-b-10"
                      type="button"
                      @click="viewLeaseClick"
                    />
                    <q-btn
                      label="Contact Asset Manager"
                      class="btn-with-icon bg-secondary contact-assets btn-fixwd-height p-relative text-capitalize"
                      type="button"
                    />
                  </div>
                </div>
                <div class="overview-img">
                  <img src="/src/assets/overview.png" />
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
        <!--Overview Details part design end -->
      </div>
      <!--Create Rquest part design Start -->
      <div v-if="!isShowMaintenanceList" class="container-box q-mx-auto overview-property overview-main">
        <q-card class="my-card q-mt-none">
          <q-card-section>
            <div class="main-section">
              <div class="main-wrapper flex row reverse">
                <div class="overview-content overview-properties-content">
                  <h5
                    class="f-18 main-color q-mt-none q-mb-none text-left line-height-27 fw-600"
                  >
                    Property In Need Of Maintenance?
                  </h5>
                  <p class="f-18 text-left margin-b-20 q-mt-sm">
                    Need something repaired? Create a maintenance request and
                    have your asset manager assign it to a service professional
                    to get it fixed ASAP. <br /><br />You can also view the
                    status of your maintenance request with real-time updates.
                  </p>
                  <div class="text-left">
                    <q-btn
                      label="Create Request"
                      class="btn-with-icon create-request btn-fixwd-height p-relative text-capitalize bg-primary"
                      type="button"
                      @click="createRequestClick"
                    />
                  </div>
                </div>
                <div class="overview-img overview-properties">
                  <img src="/src/assets/overview-property.png" />
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <!--Create Rquest part design End -->
      <MaintenanceRequestList
        v-if="isShowMaintenanceList"
      />
    </div>
      <!--:key="mn.id"
          v-for="mn in MaintenanceRequestListData"
          :singleMaintenance="mn"
      -->
  </div>
</template>

<script>
import { defineComponent,ref } from "vue";
import  MaintenanceRequestList  from '../components/MaintenanceRequestList.vue'

const MaintenanceRequestListData = [
  {
    id:1,
    category: 'Interior',
    subCategory: 'Roof',
    description: 'A desciption of the request',
    status: 'In progress',
    dateValue: '10/11/2021'
  },
  {
    id:2,
    category: 'Interior 1',
    subCategory: 'Roof 1',
    description: 'A desciption of the request 1',
    status: 'Done',
    dateValue: '11/11/2021'
  },
  {
    id:3,
    category: 'Interior',
    subCategory: 'Roof',
    description: 'A desciption of the request 2',
    status: 'Waiting',
    dateValue: '15/12/2021'
  },
]

export default defineComponent({
  name: "OverViewPage",
  components: {
    MaintenanceRequestList
  },
  methods: {
    viewLeaseClick() {
      this.$router.push('/header/lease')
    },
    createRequestClick() {
      console.log('create request')
      this.isShowMaintenanceList = true;
    }
  },
  setup () {

    return {
      isShowMaintenanceList:ref(false),
    }
  },
});
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
.overview-img{
  max-width: 352px;
  margin-right:85px;
}
.overview-content{
  width: calc(100% - (352px + 85px));
  padding-right: 83px;
}
.maintenance-img img{
  height: 100%;
  width: 100%;
  display: inline-block;
  border-radius: 10px;
}
.category{
  width: calc(100% - 100px);
  justify-content: space-between;
}
.maintenance-second.maintenance-box{
  justify-content: center;
  width: calc((100% / 3) - 79px);
  margin-left: 79px;
}
.maintenance-first.maintenance-box{
  justify-content: space-between;
}
.maintenance-third.maintenance-box{
  justify-content: space-between;
  margin-left: 109px;
  width: calc((100% / 3) - 109px);
}
.maintenance-box{
  width: calc(100% / 3);
}
.maintenance-img{
  width: 70px;
  height:70px;
}
.maintenance-card{
  margin:10px 0px 0px;
}
.new-maintenance-btn{
  min-width:230px;
}
.card-p-15{
  padding:15px;
}
.active-card{
  background:#F0DCCD;
}
.overview-properties{
  width:359px;
  margin-right:0;
}
.overview-properties-content{
  padding-right:0;
  padding-left: 59px;
  width: calc(100% - 359px);
}
.status-sign:before{
  content: '';
  background: #999999;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  display: inline-block;
  position: absolute;
  left: 0;
  top: 10px;
  bottom: 0;
  margin: auto;
}
.maintenance-box h6{
  padding-top:10px;
}
.notiication-icon{
  position: absolute;
  right: -50px;
  top: -5px;
  width: 20px;
  height: 20px
}
</style>
