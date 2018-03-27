var Bank = function() {
  this.balance = 0
  this.account=[];
};

Bank.prototype = {

  deposit: function(amount){
    this.account.push(amount);
    return this.balance += amount;
  },

  withdraw: function(amount){
    this.account.push(-amount)
    return this.balance -= amount;
  },

  totalBalance: function(){
  return this.balance;
  },


}
