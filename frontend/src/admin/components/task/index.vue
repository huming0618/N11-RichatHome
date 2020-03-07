<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-row>
      <a-col :span="17" :offset="3">
        <!-- <a-steps :current="current">
          <a-step :key="step1" :title="'项目信息'" />
          <a-step :key="step2" :title="'验证 / 管理'" />
          <a-step :key="step3" :title="项目信息" />
        </a-steps>-->
        <a-menu v-model="current" mode="horizontal">
          <a-menu-item key="basic" :style="{width:'33.3%', textAlign:'center'}">
            <!-- <a-icon type="basic" /> -->
            <a-icon type="project" />项目信息
          </a-menu-item>
          <a-menu-item key="manage" :style="{width:'33.3%', textAlign:'center'}">
            <a-icon type="safety" />验证 / 管理
          </a-menu-item>
          <a-menu-item key="exchange" :style="{width:'33.3%', textAlign:'center'}">
            <a-icon type="dollar" />积分兑换
          </a-menu-item>
        </a-menu>
      </a-col>
    </a-row>
    <a-row :style="{ marginTop: '60px' }">
      <ProjectForm />
      <!-- <VeriyForm />
      <ExchangeForm />-->
    </a-row>
    <a-row :style="{ marginTop: '30px' }">
      <a-form-item :wrapper-col="{ span: 17, offset: 3 }">
        <a-button type="primary" html-type="submit" block>提交保存</a-button>
      </a-form-item>
    </a-row>
  </a-form>
</template>
<style>
</style>
<script>
import ProjectForm from "./Project";
import VeriyForm from "./Verify";
import ExchangeForm from "./Exchange";

export default {
  components: { ProjectForm, VeriyForm, ExchangeForm },
  data() {
    return {
      current: ["basic"],
      formLayout: "horizontal",
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`
      });
    }
  }
};
</script>