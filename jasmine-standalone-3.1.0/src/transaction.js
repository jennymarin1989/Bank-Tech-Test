var Transaction = function(){
  this.transactions = [];
};

Transaction.prototype = {

  deposit: function(amount){
    this.transactions.push(amount);
    return amount
  },

  

}
