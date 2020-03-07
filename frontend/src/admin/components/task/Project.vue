<template>
  <a-col :span="17" :offset="3">
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
  </a-col>
</template>