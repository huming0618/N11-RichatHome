<template>
  <a-col :span="17" :offset="3">
    <a-form-item label="任务ID" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'name',
          {rules: [{ required: true, message: '*' }]}
        ]"
      />
    </a-form-item>
    <a-form-item label="项目名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'name',
          {rules: [{ required: true, message: '*' }]}
        ]"
      />
    </a-form-item>

    <a-form-item label="描述" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'info',
          {rules: [{ required: true, message: '描述' }]}
        ]"
      />
    </a-form-item>
    <a-form-item label="附件" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'sender_name',
          {rules: [{ required: true, message: '发包方' }]}
        ]"
      />
    </a-form-item>
    <!-- <input type="hidden" name="projectStartDay" />
    <input type="hidden" name="projectEndDay" />-->
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
  </a-col>
</template>
<script>
import Project from "@/common/entity/project";

export default {
  mounted() {}
};
</script>