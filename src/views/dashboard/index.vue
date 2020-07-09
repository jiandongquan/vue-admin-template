<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <div class="dashboard-text">logoTitle: {{ title }}</div>
    <div class="dashboard-text">logoIamge: {{ logo }}</div>
    <div class="dashboard-text">roles: <span v-for="role in roles" :key="role">{{ role }}</span></div>
    <div>
      <button @click="showDialog">aaaaaa</button>
    </div>
    <div>
      <el-dialog title="修改用户密码" :visible.sync="show" width="500px">
        <div slot="footer" class="dialog-footer">
          <el-button>取消</el-button>
          <el-button>提交</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapGetters({
      name: 'name',
      roles: 'roles',
      title: 'logoTitle',
      logo: 'logoImage'
    })
  },
  methods: {
    showDialog() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
