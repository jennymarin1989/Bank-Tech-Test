describe('Account', function(){

  var account;

  beforeEach(function(){
    account = new Account();
  });

  describe("deposit", function(){
    it("can deposit money in account", function(){
      expect(account.deposit(200)).toEqual(200);
    });
    it("can check the money is deposited in my account", function(){
      account.deposit(200);
      expect(account.balance).toEqual(200);
    });
  });

  describe("withdraw", function(){
    it("can withdraw money from account", function(){
      expect(account.withdraw(100)).toEqual(-100);
    });
    it("can check the withdraws made in the account", function(){
      account.withdraw(100);
      expect(account.transactions).toContain(-100);
    });
  });

  describe("balance", function(){
      it("Returns total balance in account", function(){
        account.deposit(300);
        account.withdraw(100);
        expect(account.totalBalance()).toEqual(200);
      });
    });

});
