<template>
  <div>
    <el-dialog title="修改用户密码" :visible.sync="dialogVisiable" width="500px">
      <el-form :model="form">
        <el-form-item label="用户账户：" :label-width="labelWidth">
          <span>{{ username }}</span>
        </el-form-item>
        <el-form-item label="原密码：" :label-width="labelWidth">
          <el-input v-model="form.orignalPassword" auto-complete="off" />
        </el-form-item>
        <el-form-item label="新密码：" :label-width="labelWidth">
          <el-input v-model="form.newPassword" auto-complete="off" />
        </el-form-item>
        <el-form-item label="再次输入新密码：" :label-width="labelWidth">
          <el-input v-model="form.verifyPassword" auto-complete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelClick">取消</el-button>
        <el-button type="primary" @click="okClick">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PasswordDialog',
  data() {
    return {
      labelWidth: '125px', // 控制字段宽度
      form: {
        orignalPassword: '', // 原密码
        newPassword: '', // 新密码
        verifyPassword: '' // 验证用的密码
      },
      dialogVisiable: false
    }
  },
  computed: {
    ...mapGetters({
      username: 'name' // 用户账号
    })
  },
  methods: {
    showDialog() {
      this.dialogVisiable = true
    },
    closeDialog() {
      this.dialogVisiable = false
    },
    okClick() {
      this.closeDialog()
    },
    cancelClick() {
      this.closeDialog()
    }
  }
}
</script>

<style>

</style>
