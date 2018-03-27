var allTransactions = function(){

  this.balance = 0;

};

allTransactions.prototype = {

  deposits: function(amount){
    return this.balance += amount;
  },



}
