var Statement = function() {
  this.date = new Date();
};

Statement.prototype = {

  statementDate: function(){

    var dates = this.date.getDate();
    var month = this.date.getMonth();
    var year = this.date.getFullYear();
    return `${dates}/${month}/${year}`
  },

  printStatement: function(statementdate, allTheTransactions, balance) {
    console.log("date||credit||debit||balance");
    var print = [statementdate, allTheTransactions, balance].join("||");
    return print;
  },


}
