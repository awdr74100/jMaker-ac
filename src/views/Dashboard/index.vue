<template>
  <div class="container-fluid px-0" :class="{ openSidebar: openSidebar }">
    <div class="header-layout">
      <Header />
    </div>
    <div class="sidebar-layout">
      <Sidebar />
    </div>
    <div class="row no-gutters">
      <div class="main-layout">
        <router-view></router-view>
      </div>
    </div>
    <!-- Drawer -->
    <div class="drawer" @click="sidebarToggle"></div>
    <!-- Modal -->
    <Modal />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Modal from '@/components/Dashboard/Modal.vue';
import Header from '@/components/Dashboard/Header.vue';
import Sidebar from '@/components/Dashboard/Sidebar.vue';

export default {
  name: 'Dashboard',
  components: {
    Header,
    Sidebar,
    Modal,
  },
  methods: {
    sidebarToggle() {
      const status = this.$store.state.openSidebar;
      this.$store.commit('SIDEBARTOGGLE', !status);
    },
  },
  computed: mapState(['openSidebar']),
};
</script>

<style lang="scss" scoped>
@import '~@/assets/scss-scoped/views/Dashboard/index.scss';
</style>
