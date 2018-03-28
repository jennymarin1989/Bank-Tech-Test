describe('Account', function(){

  var account;

  beforeEach(function(){
    account = new Account();
  });


  describe("balance", function(){
      it("Returns total balance in account", function(){
        var myTransaction = new allTransactions();
        // spyOn(myTransaction, "deposits");
        // spyOn(myTransaction, "withdraws");
        myTransaction.deposits(200);
        myTransaction.withdraws(100);
        expect(account.deposits(200)).toEqual(200);
      });
    });

});
