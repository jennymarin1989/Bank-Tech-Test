describe("AllTransactions", function(){

  var allTransaction;

  beforeEach(function(){
    allTransaction = new allTransactions();
  });

describe("deposits", function(){
  it("returns update of deposits", function(){
    allTransaction.deposits(200);
    allTransaction.deposits(100);
    expect(allTransaction.balance).toEqual(300);
  });
});

describe("withdraws", function(){
  it("returns update of withdraws", function(){
    allTransaction.deposits(400);
    allTransaction.withdraws(200);
    allTransaction.withdraws(100);
    expect(allTransaction.balance).toEqual(100);
  });
});

});
