var Account = function() {
 this.balance = 0;
};

Account.prototype = {

  totalBalance: function(transaction){
    return this.balance += transaction;
  },

}
