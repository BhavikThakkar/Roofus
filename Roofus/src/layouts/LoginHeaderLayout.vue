<template>
  <q-layout view="lHh Lpr lFf" class="main-login-header">
    <q-header elevated class="header-wrapper flex items-center ">
      <div class="row flex w-100 h-100 items-center">
        <div class="logo-sc"><div class="text-left"><img width="93" height="23" src="~assets/main-logo.png"></div></div>
      </div>
    </q-header>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LoginHeaderLayout',

})
</script>

<style lang="scss">
.header-wrapper{
  background: #FAFAFA;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 9%);
  padding: 0px 30px;
  height:60px;
}
.logo-sc{
  width: 93px;
}
.menu-sc{
  width: calc(100% - (93px + 104px));
  height:100%;
}

.main-login-header {
.fixed, .fixed-full, .fullscreen, .fixed-center, .fixed-bottom, .fixed-left, .fixed-right, .fixed-top, .fixed-top-left, .fixed-top-right, .fixed-bottom-left, .fixed-bottom-right{
  position: unset !important;
}
}
.q-layout{
  min-height: 0px !important;
}

@media(max-width:550px){
  .header-wrapper > div{
    justify-content: center;

  }
  .header-wrapper{
    // height: 70px;
    padding-top: 30px;
  }
}

</style>
