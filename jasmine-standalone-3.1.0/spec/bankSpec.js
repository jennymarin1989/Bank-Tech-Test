describe('Bank', function(){

  var bank = new Bank();

  describe("deposit", function(){
    it("can deposit money in account", function(){
      expect(bank.deposit(200)).toEqual(200);
    });
    it("can check the money is deposited in my account", function(){
      bank.deposit(200);
      expect(bank.account).toContain(200);
    });
  });

  describe("withdraw", function(){
    it("can withdraw money from account", function(){
      expect(bank.withdraw(200)).toEqual(200);
    });
  });

  describe("Sum of deposit", function(){
    it("gives the total of the desposits made in the account", function(){
      bank.deposit(100);
      bank.deposit(200);
      expect(bank.sumDeposit()).toEqual(300);
    });
  });

  

});
