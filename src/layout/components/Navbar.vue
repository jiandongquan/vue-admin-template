<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <div class="userinfo">
        <user-info @changepassword="showDialog" />
      </div>
    </div>
    <div>
      <password-dialog ref="passwordDialog" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import UserInfo from './UserInfo'
import PasswordDialog from './Password'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    UserInfo,
    PasswordDialog
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    showDialog() {
      this.$refs.passwordDialog.showDialog()
    },
    testDialog() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float:right;
    height: 100%;
    line-height: 50px;

    .userinfo {
      margin-right: 10px;
      margin-top: 7px;
      width: 40px;
      height: 100%;
    }
  }
}
</style>
