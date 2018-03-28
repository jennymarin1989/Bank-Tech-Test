var Transaction = function(){

};

Transaction.prototype = {

  deposit: function(amount){
    return amount;
  },

  withdraw: function(amount){
    return -amount;
  },

}
