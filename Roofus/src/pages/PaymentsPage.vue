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
                <div class="text-right">
                    <q-btn label="Auto Pay Inactive" @click="AutoAccountInactive = true" class="bg-trasnparent-btn main-color btn-fixwd-height p-relative text-capitalize margin-r-10" type="button" />
                    <q-btn label="Set-up Auto Pay" @click="SetupAccount = true" class="bg-dark contact-assets btn-fixwd-height p-relative text-capitalize" type="button" />
                </div>
                <h5 class="f-18 main-color q-mt-none q-mb-none text-left fw-600 margin-t-30">Manage Payments</h5>
                <q-card class="q-mt-none box-15 make-payment-desktop">
                  <q-card-section class="">
                    <div class="main-section">
                      <div class="main-wrapper flex items-center payment-history">
                        <div class="flex payment-history-wrapper">
                            <h6 class="f-14 text-left main-color fw-400 line-height-21">Patrick Mannion</h6>
                        </div>
                        <div class="">
                            <h6 class="f-14 text-left main-color fw-400 line-height-21 set-min-width">Checking (****3489)</h6>
                        </div>
                        <div class="">
                            <h6 class="f-14 text-left main-color fw-400 line-height-21">Visa</h6>
                        </div>
                        <div class="flex item-center">
                            <h6 class="f-14 text-left green fw-600 line-height-21 q-pr-md cursor-pointer">Set Default</h6>
                            <h6 class="f-14 text-left red fw-600 line-height-21 cursor-pointer">Delete</h6>
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
                 <q-card class="q-mt-none box-15 margin-t-20 make-payment-desktop">
                  <q-card-section class="main-setup-box">
                    <div class="main-section">
                      <div class="main-wrapper flex items-center payment-history">
                        <div class="flex payment-history-wrapper">
                          <h6 class="f-14 text-left main-color fw-400 line-height-21">Nick Smith</h6>
                        </div>
                        <div class="">
                          <h6 class="f-14 text-left main-color fw-400 line-height-21 set-min-width">****3489)</h6>
                        </div>
                        <div class="">
                          <h6 class="f-14 text-left main-color fw-400 line-height-21">Visa</h6>
                        </div>
                        <div class="flex item-center">
                          <h6 class="f-14 text-left red fw-600 line-height-21 cursor-pointer">Delete</h6>
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>

                <!-- Mobile view -->
                <q-list class="makePayment-expansion make-payment-mobile margin-t-20 hidden w-100">
                  <q-expansion-item
                    class="text-left"
                    group="somegroup"
                    label="Patrick Mannion"
                    default-opened
                    header-class="main-color"
                  >
                    <q-card>
                      <q-card-section>
                        <div class="text-left">
                          <h6 class="f-14 fw-600 line-height-21 main-color margin-b-10">Visa</h6>
                          <h6 class="f-14 fw-600 line-height-21 main-color">Checking (****3489)</h6>
                          <div class="flex item-center justify-end margin-t-20">
                            <h6 class="f-14 text-left green fw-600 line-height-21 mx-20 cursor-pointer">Set Default</h6>
                            <h6 class="f-14 text-left red fw-600 line-height-21 cursor-pointer">Delete</h6>
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                  <q-separator />
                  <q-expansion-item  class="text-left" group="somegroup" label="Nick Smith" header-class="main-color">
                    <q-card>
                      <q-card-section>
                        <div class="text-left">
                          <h6 class="f-14 fw-600 line-height-21 main-color margin-b-10">Visa</h6>
                          <h6 class="f-14 fw-600 line-height-21 main-color">Checking (****3489)</h6>
                          <div class="flex item-center justify-end margin-t-20">
                            <!-- <h6 class="f-14 text-left green fw-600 line-height-21 q-pr-md cursor-pointer">Set Default</h6> -->
                            <h6 class="f-14 text-left red fw-600 line-height-21 cursor-pointer">Delete</h6>
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                  <q-separator />
                  <q-expansion-item  class="text-left" group="somegroup" label="James Anderson" header-class="main-color">
                    <q-card>
                      <q-card-section>
                        <div class="text-left">
                          <h6 class="f-14 fw-600 line-height-21 main-color margin-b-10">Visa</h6>
                          <h6 class="f-14 fw-600 line-height-21 main-color">Checking (****3489)</h6>
                          <div class="flex item-center justify-end margin-t-20">
                            <!-- <h6 class="f-14 text-left green fw-600 line-height-21 q-pr-md cursor-pointer">Set Default</h6> -->
                            <h6 class="f-14 text-left red fw-600 line-height-21 cursor-pointer">Delete</h6>
                          </div>
                        </div>
                      </q-card-section>
                    </q-card>
                  </q-expansion-item>
                </q-list>

                <div class="text-right">
                  <q-btn label="Add Payment Method" @click="AddPaymentMethod = true" class="margin-t-20 btn-fixwd-height p-relative text-capitalize bg-primary margin-t-40" type="button" />
                </div>

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
                            :options="stringOptions"
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
                                v-model="model"
                                label="3rd"
                                :options="stringOptions"
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
       <q-dialog v-model="AutoAccountInactive" class="autoAccountBank">
          <q-card class="w-100">
            <div class="mx-20 AddBankPaymentMethod flex">
              <q-card class="q-mt-none bankAccount">
                <q-card-section>
                  <div class="main-section">
                    <div class="main-wrapper flex justify-center">
                      <div class="">
                        <h5 class="f-18 main-color q-mt-none q-mb-none text-center line-height-27 fw-600">
                          Bank Account
                        </h5>
                        <ul class="q-px-none listing">
                          <li class="main-color f-14 line-height-21 q-mb-none">Takes a few days to setup</li>
                          <li class="main-color f-14 line-height-21 q-mb-none">Costs $5 per transaction</li>
                        </ul>
                        <div class="text-center">
                          <q-btn flat
                            label="Set-up Bank Account"
                            class="white view-lease btn-fixwd-height p-relative text-capitalize bg-primary"
                            type="button"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
              <q-card class="q-mt-none creditCard">
                <q-card-section>
                  <div class="main-section">
                    <div class="main-wrapper flex justify-center">
                      <div class="">
                        <h5 class="f-18 main-color q-mt-none q-mb-none text-center line-height-27 fw-600">
                          Credit Card
                        </h5>
                        <ul class="q-px-none listing">
                          <li class="main-color f-14 line-height-21 q-mb-none">Adding card is fast and easy</li>
                          <li class="main-color f-14 line-height-21 q-mb-none">Transaction costs 2.95% + $0.25</li>
                        </ul>
                        <div class="text-center">
                          <q-btn flat
                            label="Set-up Credit Card"
                            class="white view-lease btn-fixwd-height p-relative text-capitalize bg-primary"
                            type="button"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </q-card>
        </q-dialog>
       <q-dialog v-model="SetupAccount">
          <q-card class="w-100">
            <div class="mx-20 my-20 display-inline">
              <div class="text-h6 line-height-27 f-18 main-color">Set-up Bank Account</div>
            </div>
            <div class="mx-20">
                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md change-password-form">
                      <div class="margin-b-20">
                        <h6 class="main-color form-lable text-left">Name of Account</h6>
                        <q-input filled outlined clearable v-model="text" :dense="dense" />
                      </div>
                      <div class="margin-b-20">
                        <h6 class="main-color form-lable text-left">Bank Account Type</h6>
                        <q-select
                          filled
                          v-model="model"
                          label="Select Account Type"
                          :options="stringOptions"
                          behavior="menu"
                        />
                      </div>
                      <div class="margin-b-20">
                        <h6 class="main-color form-lable text-left">Bank Routing Number</h6>
                        <q-input filled outlined clearable v-model="text" :dense="dense" />
                      </div>
                      <div class="margin-b-20">
                        <h6 class="main-color form-lable text-left">Bank Account Number</h6>
                        <q-input filled outlined clearable v-model="text" :dense="dense" />
                      </div>
                      <div class="margin-b-20">
                        <h6 class="main-color form-lable text-left">Re-Enter Bank Account Number </h6>
                        <q-input filled outlined clearable v-model="text" :dense="dense" />

                      </div>
                      <div class="margin-b-20">
                        <div>
                          <q-checkbox v-model="right" label="Set as default payment method" />
                        </div>
                      </div>
                    </q-form>
            </div>

            <q-card-actions align="right" class="q-py-none q-px-none">
              <q-btn flat label="Add Bank Account" class="f-14 add-bank-account text-capitalize white mx-20 my-20 bg-primary btn-fixwd-height add-bank-account" type="submit" v-close-popup/>
            </q-card-actions>
          </q-card>
        </q-dialog>
        <q-dialog v-model="AddPaymentMethod">
          <q-card class="w-100">
            <div class="mx-20 my-20 display-inline">
              <div class="text-h6 line-height-27 f-18 main-color">Add Debit or Credit Card</div>
            </div>
            <div class="mx-20">
                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md change-password-form">
                      <div class="margin-b-20">
                        <h6 class="main-color form-lable text-left">Card Number</h6>
                        <q-input filled outlined clearable v-model="text" :dense="dense" />
                      </div>
                      <div class="margin-b-20">
                        <h6 class="main-color form-lable text-left">Name on Card</h6>
                        <q-input filled outlined clearable v-model="text" :dense="dense" />
                      </div>
                      <div class="margin-b-20">
                        <h6 class="main-color form-lable text-left">Expiration Date</h6>
                        <div class="flex">
                        <q-select
                          class="flex-selectbox monthly-selectbox"
                          filled
                          v-model="model"
                          label="Month"
                          :options="stringOptions"
                          behavior="menu"
                        />
                        <q-select
                          class="flex-selectbox yearly-selectbox"
                          filled
                          v-model="model"
                          label="Year"
                          :options="stringOptions"
                          behavior="menu"
                        />
                        </div>
                      </div>
                      <div class="margin-b-20">
                        <div>
                          <q-checkbox v-model="right" label="Set as default payment method" />
                        </div>
                      </div>
                    </q-form>
            </div>
            <q-card-actions align="right" class="q-py-none q-px-none">
              <q-btn flat label="Add Card" class="f-14 add-bank-account text-capitalize white mx-20 my-20 bg-primary btn-fixwd-height add-bank-account" type="submit" v-close-popup/>
            </q-card-actions>
          </q-card>
        </q-dialog>
</template>

<script>
import { defineComponent , ref} from 'vue'
const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]

export default defineComponent({
  name: 'PaymentsPage',
  methods: {
    onSubmit() {

    },
    onReset () {

    }
  },
  setup () {
    const options = ref(stringOptions)
    return {
      text:'',
      dense:'',
      tab: ref('MakePayment'),
      SetupAccount: ref(false),
      AddPaymentMethod: ref(false),
      AutoAccountInactive: ref(false),
      model: ref(null),
      stringOptions,
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
