var Bank = function() {
  this.account=[];
  this.DEFAULT_BALANCE = 0;
};

Bank.prototype = {
  deposit: function(money){
    this.account.push(money);
    return money;
  },

  withdraw: function(money){
    return money;
  },


}
