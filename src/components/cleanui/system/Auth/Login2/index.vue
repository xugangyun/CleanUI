<template>
  <div>
    <a-form :form="form" layout="inline" @submit="handleSubmit" style="display:flex;align-items: center;">
      <a-form-item>
        <a-input
          size="center"
          placeholder="账号"
          v-decorator="['name', { initialValue: '', rules: [{ required: true, message: '请输入账号' }]}]"
        />
      </a-form-item>
      <a-form-item>
        <a-input
          size="center"
          placeholder="密码"
          type="password"
          v-decorator="['password', {initialValue: '', rules: [{ required: true, message: '请输入密码' }]}]"
        />
      </a-form-item>
      <a-form-item >
        <a-checkbox :checked="checkNick" @change="handleChange">
          记住我
        </a-checkbox>
      </a-form-item>
      <a-button
        type="primary"
        htmlType="submit"
        size="center"
        class="text-center"
        :loading="loading"
      >
        <strong>登陆</strong>
      </a-button>
    </a-form>
  </div>
</template>
<script>
import { mapState } from 'vuex'

const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
}
export default {
  name: 'CuiLogin',
  computed: {
    ...mapState(['settings']),
    loading() {
      return this.$store.state.user.loading
    },
  },
  data: function () {
    return {
      checkNick: false,
      formTailLayout,
      form: this.$form.createForm(this),
    }
  },
  methods: {
    changeAuthProvider(value) {
      this.$store.commit('CHANGE_SETTING', { setting: 'authProvider', value })
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.dispatch('user/LOGIN', { payload: values })
        }
      })
    },
    handleChange(e) {
      this.checkNick = e.target.checked
    },
  },
}
</script>
<style lang="scss" module>
@import "@/components/cleanui/system/Auth/style.module.scss";
span {
    padding-right: 0px !important;
    padding-left: 0px !important;
}
</style>
