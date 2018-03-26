describe('Bank', function(){

  var bank;

  beforeEach(function(){
    bank = new Bank();
  });

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
      expect(bank.withdraw(100)).toEqual(100);
    });
    it("can check the withdraws made in the account", function(){
      bank.withdraw(100);
      expect(bank.withdraws).toContain(100);
    });
  });

  describe("Sum of deposit", function(){
    it("gives the total of the desposits made in the account", function(){
      bank.deposit(200);
      bank.deposit(400);
      expect(bank.sumDeposit()).toEqual(600);
    });
  });

  describe("Sum withdraws", function(){
  it("gives the total of withdraws made in account", function(){
    bank.withdraw(50);
    bank.withdraw(20);
    expect(bank.sumWithdraws()).toEqual(70);
  });
});

  describe("balance", function(){
      it("Returns total balance in account", function(){
        bank.sumDeposit();
        bank.sumWithdraws();
        expect(bank.balance()).toEqual(bank.sumDeposit() - bank.sumWithdraws());
      });
    });

});
