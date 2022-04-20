<template>

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
                        :options="MonthList"
                        behavior="menu"
                    />
                    <q-select
                        class="flex-selectbox yearly-selectbox"
                        filled
                        v-model="model1"
                        label="Year"
                        :options="YearList"
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

</template>

<script>
import { defineComponent,ref } from 'vue'
const MonthList = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const YearList = ['1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022'];
export default defineComponent({
  name: 'PaymentMethodModal',
  setup () {
    const options = ref(MonthList,YearList)
    return {
      text:'',
      dense:'',
      tab: ref('MakePayment'),
      SetupAccount: ref(false),
      AddPaymentMethod: ref(false),
      AutoAccountInactive: ref(false),
      model: ref(null),
      model1: ref(null),
      MonthList,
      YearList,
      options,
      right: ref(false),
      date: ref('2019/02/01')
    }
  }
})
</script>
