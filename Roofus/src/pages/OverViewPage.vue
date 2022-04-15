<template>
  <div>
    <h1> OverView Page </h1>
    <q-btn color="white" text-color="black" label="Open test popup" @click="onModalClick" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'OverViewPage',

  setup () {
    const $q = useQuasar()
    function onModalClick () {
      $q.dialog({
        title: 'Prompt',
        message: 'What is your name?',
        prompt: {
          model: '',
          type: 'text' // optional
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        console.log('>>>> OK, received', data)
      }).onCancel(() => {
        console.log('>>>> Cancel')
      }).onDismiss(() => {
        console.log('I am triggered on both OK and Cancel')
      })
    }
    return { onModalClick }
  },
  methods: {
    // onModalClick() {

    // }
  }
})
</script>
