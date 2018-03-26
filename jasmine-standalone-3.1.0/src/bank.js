var Bank = function() {
  this.account=[];
  this.withdraws=[];
};

Bank.prototype = {

  deposit: function(amount){
    this.account.push(amount);
    return amount;
  },

  withdraw: function(amount){
    this.withdraws.push(amount)
    return amount;
  },

  sumDeposit: function(){
    var sum = 0;
    var deposits = this.account;
    for(var i = 0; i < deposits.length; i++) {
     sum += deposits[i];
    };
    return sum
  },


  }
