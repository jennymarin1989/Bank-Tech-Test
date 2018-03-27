describe ("Transaction", function(){

  var transaction;

  beforeEach(function(){
    transaction = new Transaction();
  });

  describe("deposit", function(){
    it("returns the amount of money deposited in the account", function(){
      expect(transaction.deposit(100)).toEqual(100);
    });
  });

  describe("withdraw", function(){
    it("returns the amount of money withdraw from account", function(){
      expect(transaction.withdraw(50)).toEqual(50);
    })
  })


});
