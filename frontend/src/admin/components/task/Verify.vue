<template>
  <a-col :span="17" :offset="3" v-show="show">
    <a-form-item label="验证人地址" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'name',
          {rules: [{ required: true, message: '名称' }]}
        ]"
      />
    </a-form-item>
    <a-form-item label="验证人公钥" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'detail',
          {rules: [{ required: true, message: '任务描述' }]}
        ]"
      />
    </a-form-item>
    <a-form-item label="管理员地址" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'detail',
          {rules: [{ required: true, message: '发包方' }]}
        ]"
      />
    </a-form-item>
    <a-form-item label="管理员公钥" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="[
          'detail',
          {rules: [{ required: true, message: '发包链接' }]}
        ]"
      />
    </a-form-item>
  </a-col>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>