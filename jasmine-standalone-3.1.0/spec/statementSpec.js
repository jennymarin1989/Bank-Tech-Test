describe("Statement", function(){

  var statement;

  beforeEach(function(){
    statement = new Statement();
  })

  describe("print", function(){
    it("Returns a string with balance and date", function(){
      expect(statement.statementDate()).toEqual('26/2/2018')
    });
  });

});
