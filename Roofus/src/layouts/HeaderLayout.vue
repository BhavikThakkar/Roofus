<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header-wrapper flex items-center main-login-header">
      <div class="row flex w-100 h-100 items-center">
        <div class="logo-sc"><div class="text-left"><img width="93" height="23" src="~assets/main-logo.png"></div></div>
        <div class="menu-sc flex justify-center">
          <q-tabs
            v-model="tab"
            narrow-indicator
            dense
            align="justify"
            @click="tabClickEvent"
          >
            <q-tab class="text-primary-color" name="overview" label="Overview" />
            <q-tab class="text-primary-color" name="payments" label="Payments" />
            <q-tab class="text-primary-color" name="lease" label="Lease" />
            <q-tab class="text-primary-color" name="maintenance" label="Maintenance" />

          </q-tabs>
        </div>

        <div class="notification-sc flex items-center">
          <div class="notification-wrapper p-relative ">
            <img src="~assets/notification-icon.png" class="cursor-pointer">
          </div>
          <div class="profile-image p-relative cursor-pointer">
            <img width="40" height="40" src="~assets/user-img.png">
              <q-btn-dropdown class="dropdown-btn">
                <q-list class="custom-dropdown-list">
                  <q-item clickable v-close-popup @click="onItemClick" >
                    <q-item-section>
                      <q-item-label>Profile</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
          </div>
        </div>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HeaderLayout',
  methods:{

    /**
      On Tab change
    */
    tabClickEvent() {
      this.$router.push('/header/'+this.tab)
    },

    /**
      On Profile dropdown click
    */
    openProfilePage () {
      this.$router.push('/header/profile')
    }
  },
  setup () {
    return {
      tab: ref('overview'),
    }
  },
})
</script>

<style lang="scss">
.header-wrapper {
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

// for profile dropdown css
.notification-wrapper{
  margin-right: 26px;
}
.profile-image{
  width: 40px;
  height: 40px;
  margin-right:15px;
}
.profile-image img{
  border-radius:100%;
}
.notification-wrapper:after{
  content: '';
  position: static;
  position: absolute;
  right: 0;
  top: 0;
  background: red;
  border-radius: 100%;
  background: #CE7F44;
  border: 1px solid #FAFAFA;
  box-sizing: border-box;
  width: 9px;
  height: 9px;
  border: 1px solid #fff;
}
.q-icon.q-btn-dropdown__arrow{
  font-size: 0px;
  transform: none;
}

.q-btn--actionable.q-btn--standard:before{
    box-shadow: unset;
}
.dropdown-btn:before{
  box-shadow: none;
}
.dropdown-btn{
  padding:0
}

.custom-dropdown-list.q-list {width: 140px;}

// .q-menu.q-position-engine.scroll {
//   top: 61px !important;
//   left: unset !important;
//   right: 30px !important;
// }
</style>
