var Account = function() {
  this.balance = 0
  this.transactions=[];
};

Account.prototype = {

  deposit: function(amount){
    this.transactions.push(amount);
    return this.balance += amount;
  },

  withdraw: function(amount){
    this.transactions.push(-amount)
    return this.balance -= amount;
  },

  totalBalance: function(){
  return this.balance;
  },


}
