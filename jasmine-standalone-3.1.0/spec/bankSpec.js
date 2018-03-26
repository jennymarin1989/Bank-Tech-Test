describe('Bank', function(){

  var bank = new Bank();

  describe("deposit", function(){
    it("can deposit money in account", function(){
      expect(bank.deposit(200)).toEqual(200);
    });
  });

});
