var Statement = function() {
  this.date = new Date();
};

Statement.prototype = {

  print: function(){
    return this.date ;
  },

}
