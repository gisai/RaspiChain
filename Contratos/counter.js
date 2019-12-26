var counterFactory = eth.contract([{"constant":true,"inputs":[],"name":"getCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"increment","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_count","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}])

var counterCompiled = "0x" + "608060405234801561001057600080fd5b5060405160208061011a83398101806040528101908080519060200190929190505050806000819055505060d1806100496000396000f3006080604052600436106049576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063a87d942c14604e578063d09de08a146076575b600080fd5b348015605957600080fd5b506060608a565b6040518082815260200191505060405180910390f35b348015608157600080fd5b5060886093565b005b60008054905090565b600160008082825401925050819055505600a165627a7a7230582060a1ec596e104f07cdac45c67b4e6710f03161fa006649aec02a42542b31adde0029"

var _count = 100

var counter = counterFactory.new(_count,{from:eth.accounts[0],data:counterCompiled,gas:1000000}, function(e, contract){
    if(e) {
      console.error(e); // If something goes wrong, at least we'll know.
      return;
    }

    if(!contract.address) {
      console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");

    } else {
      console.log("Contract mined! Address: " + contract.address);
      console.log(contract);
    }
})