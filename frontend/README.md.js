###
API Base Host: api - richathome.elapps.net

``
`
fetch('http://39.105.68.35/api/project/search', {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({key:'',PageSize:30,PageNumber:0,Order:'ASC'})
}).then(x=>x.json()).then(data=>console.log(data))
`
``

//提交项目信息
let project = {
  name: 'project Name', //名称
  info: '描述描述描述描述描述描述描述描述描述描述', //描述
  sender_name: 'sender_name sender_name', //string/发包方名称（50字）
  sender_url: 'sender_url/sender_url/sender_url/sender_url', //string 发包方链接（1000字）:
  admin_addressl: 'test:admin_addressladmin_addressladmin_addressladmin_addressladmin_addressl', //string 管理员地址:
  admin_pubkeyl: 'test:admin_pubkeyl/admin_pubkeyl', //string 管理员公钥:
  verifier_address: ['test:verifier_address1', 'test:verifier_address2'], //list 验证人地址（多个）
  verifier_pubkey: ['test:verifier_pubkey3', 'test:verifier_pubkey2'], //list 验证人公钥（多个）
  point_token_symbol: 'test:point_token_symbol/', //string 积分代币符号:
  point_token_num: '323', //string 积分数量:
  reward_token_symbol: 'test:reward_token_symbol', //string 奖励代币符号 :
  reward_token_num: '333', //string 奖励币数量 :
  exchange_time: 'week', //string 兑换周期；
  budget: '2323', //string 每期预算:
  rate: '232', //string 积分兑换价格:
  start_date: '2019-01-05', //string 开始时间:
  end_date: '2019-12--5', //string 结束时间:
  contract: 'test:contractxccxccccccccccccccccccccccc' //string 合约地址:
}

fetch('http://39.105.68.35/api/project', {
  method: 'post',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(project)
}).then(x => x.json()).then(data => console.log(data))

//提交工作量证明
let task = {

}
fetch('http://39.105.68.35/api/task', {
  method: 'post',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(task)
}).then(x => x.json()).then(data => console.log(data))

//查询工作量证明
let taskQuery = {
  Key: '222',
  PageSize: 2,
  PageNumber: 0,
  Order: 'ASC'
}
fetch('http://39.105.68.35/api/task/search', {
  method: 'post',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(taskQuery)
}).then(x => x.json()).then(data => console.log(data))

//提交工作量证明签名
let taskSign = {
  id: '222',
  PageSize: 2,
  PageNumber: 0,
  Order: 'ASC'
}
fetch('http://39.105.68.35/api/task/search', {
  method: 'post',
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify(taskQuery)
}).then(x => x.json()).then(data => console.log(data))