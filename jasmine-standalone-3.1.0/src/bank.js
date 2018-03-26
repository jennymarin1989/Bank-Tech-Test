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

  balance: function(){
  return this.sumDeposit() + this.sumWithdraws();
  },

  sumDeposit: function(){
    var sum = 0;
    var deposits = this.account;
      for(var i = 0; i < deposits.length; i++) {
       sum += deposits[i];
      };
    return sum
  },

  sumWithdraws: function(){
    var sum = 0;
    var withdraws = this.withdraws;
      for(var i = 0; i < withdraws.length; i++) {
       sum += withdraws[i];
      };
    return sum
  },


}
