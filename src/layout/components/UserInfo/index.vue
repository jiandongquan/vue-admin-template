<template>
  <div>
    <img v-popover:popover1 src="user.jpg" class="user-avatar">
    <el-popover
      ref="popover1"
      placement="top-start"
      width="300"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <div class="header">
        <img src="user.jpg" class="user-avatar">
        <span>{{ name }}</span>
      </div>
      <div class="content">
        <div>
          <router-link to="/">首页</router-link>
        </div>
        <div>
          <el-button type="text" @click="changPassword">修改密码</el-button>
        </div>
      </div>
      <div class="footer">
        <el-button style="float: middle; padding: 3px 0" type="text" @click="logout">登出系统</el-button>
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
      name: 'name',
      roles: 'roles'
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
    }

  }
}
</script>
<style scoped>
.user-avatar {
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 40px;
}
</style>
