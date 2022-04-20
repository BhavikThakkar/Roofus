<template>

  <div class="bg-main-color payment-screen">
    <div class="text-white text-center display-inline w-100 margin-t-60 q-mb-xl" style="padding-bottom:200px">
      <div class="container-box q-mx-auto margin-t-44">
        <h5 class="f-18 main-color q-mt-none q-mb-none text-left fw-600 line-height-27 q-mb-md">PAYMENT</h5>
        <q-tabs
              v-model="tab"
              dense
              class="text-grey payment-tab justify-start"
              active-color="primary"
              indicator-color="primary"
              narrow-indicator
            >
              <q-tab name="MakePayment" label="Make Payments" />
              <q-tab name="Setup" label="Set-up Auto Pay" />
              <q-tab name="History" label="Payment History" />
              <q-tab name="ManagePayment" label="Manage Payments" />
        </q-tabs>
        <q-separator />
        <q-tab-panels class="payment-tab" v-model="tab" animated>
              <q-tab-panel name="MakePayment" class="q-px-none">
                <MakePayment/>
              </q-tab-panel>

              <q-tab-panel name="Setup" class="q-px-none setup-panel">
                <h5 class="f-18 main-color q-mt-none q-mb-none text-left fw-600">Set-up Auto Pay</h5>
                <q-card class="q-mt-none">
                  <q-card-section class="">
                    <div class="main-section">
                    <div class="main-wrapper items-center steup-form justify-between">
                      <q-form
                        @submit="onSubmit"
                        @reset="onReset"
                        class="q-gutter-md change-password-form">
                        <div class="margin-b-20">
                          <h6 class="f-14 main-color form-lable text-left fw-600 margin-b-10">Payment Account</h6>
                          <q-select
                            filled
                            v-model="model"
                            label="Patrick Mannion (**3429)"
                            :options="paymentAccountList"
                            behavior="menu"
                          />
                        </div>
                        <div class="margin-b-20">
                          <h6 class="f-14 main-color form-lable text-left fw-600 margin-b-10">Max Payment Amount</h6>
                          <q-input filled outlined clearable v-model="text" :dense="dense" />
                        </div>
                        <div class="flex">
                          <div class="calendar-input">
                            <h6 class="f-14 main-color form-lable text-left fw-600 margin-b-10">Selected Dates </h6>
                            <q-input filled v-model="date" mask="date" :rules="['date']">
                              <template v-slot:append>
                                <q-icon name="event" class="cursor-pointer">
                                  <q-popup-proxy ref="qDateProxy" cover transition-show="scale" transition-hide="scale">
                                    <q-date v-model="date">
                                      <div class="row items-center justify-end">
                                        <q-btn v-close-popup label="Close" color="primary" flat />
                                      </div>
                                    </q-date>
                                  </q-popup-proxy>
                                </q-icon>
                              </template>
                            </q-input>
                          </div>
                          <div class="Date-input">
                              <h6 class="f-14 main-color form-lable text-left fw-600 margin-b-10">Pay-on Date</h6>
                              <q-select
                                filled
                                v-model="model1"
                                label="3rd"
                                :options="dateList"
                                behavior="menu"
                              />
                          </div>
                        </div>
                        <div class="text-left q-mt-none">
                          <q-btn label="Submit" class="margin-t-20 btn-fixwd-height p-relative text-capitalize bg-primary margin-t-40" type="button" />
                        </div>
                      </q-form>
                    </div>
                    </div>
                  </q-card-section>
                </q-card>
              </q-tab-panel>

              <q-tab-panel name="History" class="history-panel">
                <h5 class="f-18 main-color q-mt-none q-mb-none text-left fw-600">Payment History</h5>
                <div class="">
                  <q-card class="col-sm-6">
                    <q-card-section class="">
                      <div class="main-section">
                      <div class="main-wrapper items-center steup-form justify-between">
                        <h6 class="main-color f-14 line-height-21 fw-600 text-left margin-b-10">Auto Pay</h6>
                        <p class="main-color f-14 line-height-21 text-left ">Enabling  will make sure you get your payments in on time.</p>
                        <div class="text-left q-mt-none">
                            <q-btn label="Set-up Auto Pay" class="margin-t-20 btn-fixwd-height p-relative text-capitalize bg-primary margin-t-40" type="button" />
                        </div>
                      </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </q-tab-panel>

              <q-tab-panel name="ManagePayment" class="managePayment-panel">
                <h5 class="f-18 main-color q-mt-none q-mb-none text-left fw-600">Manage A Payment</h5>
                <div class="">
                  <q-card class="col-sm-6">
                    <q-card-section class="">
                      <div class="main-section">
                      <div class="main-wrapper items-center steup-form justify-between">
                        <h6 class="main-color f-14 line-height-21 fw-600 text-left margin-b-10">Manage Auto Pay</h6>
                        <p class="main-color f-14 line-height-21 text-left ">Enabling  will make sure you get your payments in on time.</p>
                        <div class="text-left q-mt-none">
                            <q-btn label="Manage Auto Pay" class="margin-t-20 btn-fixwd-height p-relative text-capitalize bg-primary margin-t-40" type="button" />
                        </div>
                      </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>


</template>

<script>
import { defineComponent , ref} from 'vue'
import  MakePayment  from '../components/MakePayment.vue'

const dateList = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
const paymentAccountList = ['Patrick Mannion (**3429)' ,'Nick Smith (**3486)']

export default defineComponent({
  name: 'PaymentsPage',
  components: {
    MakePayment
  },
  methods: {
    onSubmit() {

    },
    onReset () {

    }
  },
  setup () {
    const options = ref(dateList,paymentAccountList)
    return {
      text:'',
      dense:'',
      tab: ref('MakePayment'),
      SetupAccount: ref(false),
      AddPaymentMethod: ref(false),
      AutoAccountInactive: ref(false),
      model: ref(null),
      model1: ref(null),
      dateList,
      paymentAccountList,
      options,
      right: ref(false),
      date: ref('2019/02/01')
    }
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
.box-15 .q-card__section{
  padding:15px 20px;
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
.add-bank-account{
  min-width:172px !important
}
.monthly-selectbox{
  width: 118px;
  margin-right: 20px;
}
.yearly-selectbox{
  width:104px
}
.steup-form{
  max-width:600px
}
.calendar-input{
  width:141px;
  margin-right:20px;
}
.Date-input{
  width:96px;
}
.set-min-width{
  min-width: 147px;
}
.payment-history > div{
  width: calc(100% / 4);
  display: flex;
  justify-content: center;
}
.payment-history > div:first-child{
  justify-content: left;
}
.payment-history > div:nth-child(4){
  justify-content: flex-end;
}
.listing{
  padding-left:20px;
  margin:8px 0px 21px;
}
.AddBankPaymentMethod .q-card__section.q-card__section--vert{
    background: #FFFFFF;
    mix-blend-mode: normal !important;
    border: 1px solid #E1E1E1 !important;
    box-sizing: border-box !important;
    box-shadow: 0px 0px 25px rgb(0 0 0 / 3%) !important;
    border-radius: 10px;
    padding:30px 10px;
}
.autoAccountBank .q-dialog__inner--minimized > div{

    max-width: 620px;
}
.creditCard{
  margin-left:10px;
}
.bankAccount{
  margin-right:10px;
}
.AddBankPaymentMethod > div{
  width: calc((100% / 2) - 10px);
  margin-top: 40px;
  margin-bottom: 40px;
}
.AddBankPaymentMethod{
  margin:0px 30px !important;
}
.payment-tab .setup-panel{
  padding:19px 0px;
}
.calendar-input i.q-icon:after{
  background-image: url('/src/assets/calendar.png');
  z-index: 999;
  right: 0px;
  position: absolute;
  content: '';
  width: 20px;
  background-size: contain;
  height: 20px;
  font-size: 20px;
  background-repeat: no-repeat;
}
.calendar-input .q-icon{
  font-size: 0
}
</style>
