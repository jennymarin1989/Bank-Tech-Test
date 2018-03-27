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
      expect(bank.balance).toEqual(200);
    });
  });

  describe("withdraw", function(){
    it("can withdraw money from account", function(){
      expect(bank.withdraw(100)).toEqual(-100);
    });
    it("can check the withdraws made in the account", function(){
      bank.withdraw(100);
      expect(bank.account).toContain(-100);
    });
  });

  describe("balance", function(){
      it("Returns total balance in account", function(){
        bank.deposit(300);
        bank.withdraw(100);
        expect(bank.totalBalance()).toEqual(200);
      });
    });

});
