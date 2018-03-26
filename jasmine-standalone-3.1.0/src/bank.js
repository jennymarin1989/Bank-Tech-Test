var Bank = function() {
  this.account=[];
  this.DEFAULT_BALANCE = 0;
};

Bank.prototype = {
  deposit: function(number){
    this.account.push(number);
    return number;
  },
}
