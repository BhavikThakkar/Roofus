<template>
  <div>
    <div class="text-right">
      <q-btn label="Auto Pay Inactive" @click="AutoAccountInactive = true" class="bg-trasnparent-btn main-color btn-fixwd-height p-relative text-capitalize margin-r-10" type="button" />
      <q-btn label="Set-up Auto Pay" @click="SetupAccount = true" class="bg-dark contact-assets btn-fixwd-height p-relative text-capitalize" type="button" />
      <h5 class="f-18 main-color q-mt-none q-mb-none text-left fw-600 margin-t-30">Manage Payments</h5>
      <!--Manage Payment list design Start -->
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
      <!--Manage Payment list design Start -->

      <!-- Mobile view For list Design-->
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
    </div>
    <!--Auto Pay Inactive Modal Start -->
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
    <!--Auto Pay Inactive Modal End -->

    <!--Setup Account Modal start -->
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
                      :options="bankAccountTypeList"
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
    <!--Setup Account Modal End -->

    <!--Add Payment Method Modal start -->
    <q-dialog v-model="AddPaymentMethod">
      <PaymentMethodModal/>
    </q-dialog>
    <!--Add Payment Method Modal End -->
  </div>
</template>

<script>
import { defineComponent,ref } from 'vue'
import  PaymentMethodModal  from '../layouts/PaymentMethodModal.vue'
const bankAccountTypeList = ['Savings account','Salary account','Current account'];

export default defineComponent({
  name: 'MakePayment',
  components: {
    PaymentMethodModal
  },
  setup () {
    const options = ref(bankAccountTypeList)
    return {
      text:'',
      dense:'',
      tab: ref('MakePayment'),
      SetupAccount: ref(false),
      AddPaymentMethod: ref(false),
      AutoAccountInactive: ref(false),
      model: ref(null),
      bankAccountTypeList,
      options,
      right: ref(false),
      date: ref('2019/02/01')
    }
  }
})
</script>
