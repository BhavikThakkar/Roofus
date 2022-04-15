<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="header-wrapper">
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <div><div class="text-left"><img width="93" height="23" src="~assets/main-logo.png"></div></div>


        <q-tabs
          v-model="tab"
          no-caps
          class="bg-red text-white shadow-2 flex flex-center"
          @click="tabClickEvent"
        >
          <q-tab name="overview" label="OverView" />
          <q-tab name="payments" label="Payments" />
          <q-tab name="lease" label="Lease" />
          <q-tab name="maintenance" label="Maintenance" />
        </q-tabs>



      </q-toolbar>
    </q-header>

    <!-- <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'HeaderLayout',

  components: {
    // EssentialLink
  },
  methods:{
    tabClickEvent() {
      console.log('tab',this.tab)
      this.$router.push('/header/'+this.tab)
    },
    openProfilePage () {
      this.$router.push('/header/profile')
    }
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      tab:'',
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style lang="sass">
.header-wrapper
  background: #FAFAFA
  box-shadow: 0px 4px 10px rgb(0 0 0 / 9%)
  padding: 15.5px 30px

</style>
