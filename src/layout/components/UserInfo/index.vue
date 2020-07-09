<template>
  <div class="container">
    <img v-popover:popover1 src="user.jpg" class="user-avatar">
    <el-popover
      ref="popover1"
      placement="top-start"
      width="300"
      trigger="hover"
    >
      <div class="header">
        <img src="user.jpg" class="user-avatar">
        <span>{{ username }}</span>
      </div>
      <div class="content">
        <div>
          <el-button type="text" @click="gotohome">首页</el-button>
        </div>
        <div>
          <el-button type="text" @click="changPassword">修改密码</el-button>
        </div>
      </div>
      <div class="footer">
        <el-button type="text" @click="logout">登出系统</el-button>
      </div>
    </el-popover>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UserInfo',
  computed: {
    ...mapGetters({
      username: 'name'
    })
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    changPassword() {
      this.$refs.popover1.visiable = false // 这个用于消除chrome的警告；
      this.$emit('changepassword')
    },
    gotohome() {
      this.$router.push('/')
    }

  }
}
</script>
<style scoped>
.container {
  width: 35px;
  height: 35px;
}
.user-avatar {
  cursor: pointer;
  width: 35px;
  height: 35px;
  border-radius: 35px;
}
</style>
