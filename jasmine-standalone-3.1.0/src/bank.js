var Bank = function() {
  this.account=[];
};

Bank.prototype = {

  deposit: function(money){
    this.account.push(money);
    return money;
  },

  withdraw: function(money){
    return money;
  },

  sumDeposit: function(){
    var sum = 0;
    var deposits = this.account
    for(var i = 0; i < deposits.length; i++) {
     sum += deposits[i];
    };
    return sum;
  },


}
