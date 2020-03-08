<template>
  <div>
    <a-table :columns="columns" :dataSource="data" size="middle" />
    <a-button @click="shenhe()" type="primary" html-type="submit" block>审核</a-button>
  </div>
</template>

<script>
const columns = [
  {
    title: "任务名称",
    dataIndex: "name"
  },
  {
    title: "提交者地址",
    dataIndex: "address"
  },
  {
    title: "时间",
    dataIndex: "time"
  },
  {
    title: "见证人",
    dataIndex: "person"
  },
  {
    title: "状态",
    dataIndex: "status"
  }
];
const data = [
  {
    key: "1",
    name: "test",
    address: "0x256e2C445B5C55FF5b1b107025d61233A5C89c99",
    time: "2020-03-08 12:16",
    person: "Joe Black",
    status: "已提交"
  },
  {
    key: "2",
    name: "test1",
    address: "0x256e2C445B5C55FF5b1b107025d61233A5C89c99",
    time: "2020-03-08 13:16",
    person: "Joe Black1",
    status: "已提交"
  },
  {
    key: "3",
    name: "test2",
    address: "0x256e2C445B5C55FF5b1b107025d61233A5C89c99",
    time: "2020-03-08 14:16",
    person: "Joe Black2",
    status: "已提交"
  }
];
export default {
  data() {
    return {
      data,
      columns
    };
  },
  methods: {
    shenhe() {
      alert("审核");
    }
  }
};
</script>
