<template>
  <a-col :span="17" :offset="3">
    <a-form-item label="兑换周期：" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'name',
          {rules: [{ required: true, message: '名称' }]}
        ]"
      />
    </a-form-item>
    <a-form-item label="积分" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'detail',
          {rules: [{ required: true, message: '任务描述' }]}
        ]"
      />
    </a-form-item>
    <a-form-item label="每期奖励币数量" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'detail',
          {rules: [{ required: true, message: '发包方' }]}
        ]"
      />
    </a-form-item>
    <a-form-item label="类型" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'detail',
          {rules: [{ required: true, message: '发包链接' }]}
        ]"
      />
    </a-form-item>
  </a-col>
</template>