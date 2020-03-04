<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-row>
      <a-col :span="17" :offset="3">
        <a-menu v-model="current" mode="horizontal">
          <a-menu-item key="basic">
            <a-icon type="basic" />项目信息
          </a-menu-item>
          <a-menu-item key="manage">
            <a-icon type="manage" />验证 / 管理
          </a-menu-item>
          <a-menu-item key="exchange">
            <a-icon type="exchange" />积分兑换
          </a-menu-item>
        </a-menu>
      </a-col>
    </a-row>
    <a-row :style="{ marginTop: '60px' }">
      <a-form-item label="任务名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
          'name',
          {rules: [{ required: true, message: '名称' }]}
        ]"
        />
      </a-form-item>
      <a-form-item label="任务描述" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
          'detail',
          {rules: [{ required: true, message: '任务描述' }]}
        ]"
        />
      </a-form-item>
      <a-form-item label="发包方" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
          'detail',
          {rules: [{ required: true, message: '发包方' }]}
        ]"
        />
      </a-form-item>
      <a-form-item label="发包链接" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-input
          v-decorator="[
          'detail',
          {rules: [{ required: true, message: '发包链接' }]}
        ]"
        />
      </a-form-item>
      <a-form-item label="开始 / 结束时间" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
        <a-range-picker @change="onChange" />
      </a-form-item>
      <!-- <a-form-item label="Gender" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-select
        v-decorator="[
          'gender',
          {rules: [{ required: true, message: 'Please select your gender!' }]}
        ]"
        placeholder="Select a option and change input text above"
        @change="handleSelectChange"
      >
        <a-select-option value="male">male</a-select-option>
        <a-select-option value="female">female</a-select-option>
      </a-select>
      </a-form-item>-->
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-row>
  </a-form>
</template>

<script>
export default {
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