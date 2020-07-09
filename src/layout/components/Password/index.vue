<template>
  <div>
    <el-dialog title="修改用户密码" :visible.sync="dialogVisiable" width="500px" @opened="focusInput" @close="clearForm">
      <el-form ref="changePasswordForm" :model="form" :rules="inputRules" label-width="120px">
        <el-form-item label="用户账户：">
          <span>{{ username }}</span>
        </el-form-item>
        <el-form-item label="原密码" prop="originalPassword">
          <el-input ref="originalPasswordInput" v-model="form.originalPassword" type="password" placeholder="请输入您原来的密码" clearable tabindex="1" />
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input v-model="form.newPassword" type="password" placeholder="请输入您新的密码" clearable tabindex="2" />
        </el-form-item>
        <el-form-item label="重复新密码" prop="verifyPassword">
          <el-input v-model="form.verifyPassword" type="password" placeholder="请再次输入您新的密码" clearable tabindex="3" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelClick">放弃</el-button>
        <el-button :loading="loading" type="primary" @click="submitClick('changePasswordForm')">提交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { validatePasswordLevel2, validatePasswordLevel3, validatePasswordLevel4 } from '@/utils/validate'
import { changePassword } from '@/api/user'
export default {
  name: 'PasswordDialog',
  data() {
    // 针对新密码的自定义校验规则，如果用户密钥有设置级别要求，则进行校验。
    var validateNewPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入新密码'))
      } else {
        switch (this.passwordLevel) {
          case 0:
            callback()
            break
          case 1:
            console.log('用户密码级别(passwordLevel)为1：最少8位')
            if (this.passwordLevel.length < 8) {
              callback(new Error('输入的新密码最少长度为8位'))
            } else {
              callback()
            }
            break
          case 2:
            console.log('用户密码级别(passwordLevel)为2：最少8位，并且是数字与字母组合')
            if (!validatePasswordLevel2(value)) {
              callback(new Error('输入的新密码最少8位，并且必须是数字与字母组合'))
            } else {
              callback()
            }
            break
          case 3:
            console.log('用户密码级别(passwordLevel)为3：最少8位，并且必须是数据、大写字母与小写字母的组合')
            if (!validatePasswordLevel3(value)) {
              callback(new Error('输入的新密码最少8位，并且必须是数据、大写字母与小写字母的组合'))
            } else {
              callback()
            }
            break
          case 4:
            console.log('用户密码级别(passwordLevel)为4：最少8位，并且是数字、大写字母、小写字母与特殊字符的组合')
            if (!validatePasswordLevel4(value)) {
              callback(new Error('输入的新密码最少8位，并且是数字、大写字母、小写字母与特殊字符的组合'))
            } else {
              callback()
            }
            break
        }
      }
    }
    // 在两次输入的密码是否相同进行校验
    var validateVerifyPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入新密码'))
      } else if (value !== this.form.newPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      dialogVisiable: false,
      form: {
        originalPassword: '', // 原密码
        newPassword: '', // 新密码
        verifyPassword: '' // 验证用的密码
      },
      inputRules: {
        originalPassword: [
          { required: true, message: '请输入原密码', trigger: 'blur' }
        ],
        newPassword: [
          { validator: validateNewPassword, required: true, trigger: 'blur' }
        ],
        verifyPassword: [
          { validator: validateVerifyPassword, required: true, trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      username: 'name',
      passwordLevel: 'passwordLevel'
    })
  },
  methods: {
    showDialog() {
      this.dialogVisiable = true
    },
    closeDialog() {
      this.dialogVisiable = false
    },
    clearForm() {
      this.$refs.changePasswordForm.clearValidate()
      this.form.originalPassword = ''
      this.form.newPassword = ''
      this.form.verifyPassword = ''
    },
    focusInput() {
      this.$refs.originalPasswordInput.focus()
    },
    submitClick(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true
          changePassword(this.form).then(result => {
            console.log(result)
          }).catch(() => {
            this.loading = false
          })
          this.clearForm()
          this.closeDialog()
        } else {
          console.log('valid failt')
          return false
        }
      })
    },
    cancelClick() {
      this.clearForm()
      this.closeDialog()
    }

  }
}
</script>

<style>

</style>
