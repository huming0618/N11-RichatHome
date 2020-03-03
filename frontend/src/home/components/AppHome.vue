<template>
  <div class="zz">
     <p  v-if="selectedAddress">eth账户：{{selectedAddress}}</p>
      <p  v-if="selectedBance">eth余额：{{selectedBance}}</p>
    <a-button type="primary" @click="login()" v-if="!selectedAddress">{{loginTitle}}</a-button>
      <a-button type="primary" @click="exit()" v-if="selectedAddress">exit</a-button>
  </div>
</template>

<script>
export default {
  name: "AppHome",
  data(){
		return {
          loginTitle: 'login',
          desiredNetwork:'3',
          selectedAddress:'',
          selectedBance:'',
          danwei:1000000000000000000,
		}
    }, 
  created(){

  },
  mounted(){

  },  
  methods:{
  pollForCompletion(txHash,callback) {
  let calledBack = false

  // Normal ethereum blocks are approximately every 15 seconds.
  // Here we'll poll every 2 seconds.
  const checkInterval = setInterval(function () {

    const notYet = 'response has no error or result'
    ethereum.sendAsync({
      method: 'eth_getTransactionByHash',
      params: [ txHash ],
    }, function (err, response) {
      if (calledBack) return
      if (err || response.error) {
        if (err.message.includes(notYet)) {
          return 'transaction is not yet mined'
        }

        callback(err || response.error)
      }

      // We have successfully verified the mined transaction.
      // Mind you, we should do this server side, with our own blockchain connection.
      // Client side we are trusting the user's connection to the blockchain.
      const transaction = response.result;
      console.log("=========="+JSON.stringify(transaction));
      clearInterval(checkInterval)
      calledBack = true
      callback(null, transaction)
    })
  }, 2000);
  },    
  sendEtherFrom (account, callback) {

  // We're going to use the lowest-level API here, with simpler example links below
  const method = 'eth_sendTransaction'
  const parameters = [{
    from: account,
    to: account,
    value:'0xde0b6b3a7640000',
  }]
  const from = account

  // Now putting it all together into an RPC request:
  const payload = {
    method: method,
    params: parameters,
    from: from,
  }

  // Methods that require user authorization like this one will prompt a user interaction.
  // Other methods (like reading from the blockchain) may not.
  ethereum.sendAsync(payload,(err, response)=> {
    const rejected = 'User denied transaction signature.'
    if (response.error && response.error.message.includes(rejected)) {
      return alert(`We can't take your money without your permission.`)
    }

    if (err) {
      return alert('There was an issue, please try again.')
    }

    if (response.result) {
      // If there is a response.result, the call was successful.
      // In the case of this method, it is a transaction hash.
      const txHash = response.result
      alert('Thank you for your generosity!')

      // You can poll the blockchain to see when this transaction has been mined:
      this.pollForCompletion(txHash, callback);
    }
  })
  },
    exit(){
      this.selectedAddress ='';
      this.selectedBance ='';
    },
    login(){
    if (typeof window.ethereum === 'undefined') {
        alert('Looks like you need a Dapp browser to get started.');
        alert('Consider installing MetaMask!');
        } else {
            // In the case the user has MetaMask installed, you can easil
            // ask them to sign in and reveal their accounts:
            ethereum.enable()
            // Remember to handle the case they reject the request:
            .catch((reason)=> {
                if (reason === 'User rejected provider access') {
                    // The user didn't want to sign in!
                    } else {
                        // This shouldn't happen, so you might want to log this...
                        alert('There was an issue signing you in.')
                    }
  })

  // In the case they approve the log-in request, you'll receive their accounts:
  .then((accounts)=>{
    // You also should verify the user is on the correct network:
    if (ethereum.networkVersion !== this.desiredNetwork) {
      alert('This application requires the main network, please switch it in your MetaMask UI.');
      // We plan to provide an API to make this request in the near future.
      // https://github.com/MetaMask/metamask-extension/issues/3663
    }else{
    // Once you have a reference to user accounts,
    // you can suggest transactions and signatures:
    window.web3 = new Web3(ethereum);
    const account = accounts[0];
    this.selectedAddress=ethereum.selectedAddress;
    web3.eth.getBalance(this.selectedAddress,(err,data)=>{
                this.selectedBance = (data/this.danwei).toFixed(4);
    });

    // web3.eth.sign(this.selectedAddress,'kk',(err,result)=>{
    //  console.log("result====="+result);
    // });

    this.sendEtherFrom(account,(err, transaction)=> {
      if (err) {
        return alert(`Sorry you weren't able to contribute!`)
      }
      console.log("=============="+JSON.stringify(transaction));
      alert('Thanks for your successful contribution!')
    })
}
  })
  }
    },
  }  
};
</script>

<style scoped>
h1 {
  color: green;
}

.zz{
    margin-top:30px;
    text-align: center;
}
</style>