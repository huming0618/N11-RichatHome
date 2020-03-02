<template>
  <a-layout id="home" class="layout" style="padding: 20px 50px 0 50px">
    <a-layout-header>
      <div class="logo">RICHATHOME | 宅富家</div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">首页 Home</a-menu-item>
        <a-menu-item key="2">创建任务 +Tasks</a-menu-item>
        <a-menu-item key="3">申请奖励 +Credits</a-menu-item>
        <a-menu-item key="4">兑换奖励 Exchange</a-menu-item>
        <a-menu-item key="5">登录 Login</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content
      :style="{ background: '#fff', marginTop: '20px', padding: '10px', minHeight: '60px' }"
    >
      <a-row>
        <a-col :span="8">参与任务：10个</a-col>
        <a-col :span="8">账户地址 7g5furo9ejf...</a-col>
        <a-col :span="8">积分数量：15000个</a-col>
      </a-row>
    </a-layout-content>
    <a-layout-content
      :style="{ background: '#fff', marginTop: '20px', padding: '10px', minHeight: '280px' }"
    >
      <a-row>
        <a-col :span="12">
          <header>
            <div class="ant-page-header-heading">
              <span>平台任务：5,370个</span>
              <a-switch :style="{float: 'right'}" defaultChecked @change="onChange" />
            </div>
          </header>
          <a-table :showHeader="false" :columns="columns" :dataSource="data">
            <span slot="action" slot-scope="text, record">
              <a-button type="primary">查看</a-button>
            </span>
          </a-table>
        </a-col>
        <a-col :span="12">
          <header>
            <div class="ant-page-header-heading">
              <span>平台任务：5,370个</span>
              <a-switch :style="{float: 'right'}" defaultChecked @change="onChange" />
            </div>
          </header>
          <a-table :showHeader="false" :columns="columns" :dataSource="data">
            <span slot="action" slot-scope="text, record">
              <a-button type="primary">查看</a-button>
            </span>
          </a-table>
        </a-col>
      </a-row>
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>
<style>
#home .logo {
  width: 150px;
  height: 31px;
  line-height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
<script>
const columns = [
  {
    dataIndex: "type",
    key: "type",
    title: "Type"
  },
  {
    dataIndex: "source",
    key: "source",
    title: "Source"
  },
  {
    dataIndex: "detail",
    key: "detail",
    title: "Detail"
  },
  {
    dataIndex: "contract",
    key: "contract",
    title: "Contract"
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" }
  }
];

const data = [
  {
    type: "社交分享",
    source: "亦来云官方",
    detail: "已发放27475个",
    contract: "合约地址"
  },
  {
    type: "社交分享",
    source: "亦来云官方",
    detail: "已发放27475个",
    contract: "合约地址"
  },
  {
    type: "社交分享",
    source: "亦来云官方",
    detail: "已发放27475个",
    contract: "合约地址"
  }
];
export default {
  data() {
    return {
      data,
      columns
    };
  }
};
</script>
