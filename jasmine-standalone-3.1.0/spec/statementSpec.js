describe("Statement", function(){

  var statement;

  beforeEach(function(){
    statement = new Statement();
  })

  describe("print", function(){
    it("Returns a string date, month and year", function(){
      expect(statement.statementDate()).toEqual('26/2/2018')
    });
  });

});
