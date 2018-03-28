var allTransactions = function(){
  this.transactions = [];
};

allTransactions.prototype = {

  deposits: function(deposit){
    this.transactions.push(deposit);
    return deposit
  },

  withdraws: function(withdraw){
    this.transactions.push(-withdraw);
    return -withdraw;
  }

}
