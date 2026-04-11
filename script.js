const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const account = {
    balance: 0,
    transactions: [],
  createTransaction(amount, type) {
      this.transactions.push({amount: amount, typeTransaction: type }); 
     
    },
  deposit(amount) {
  this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
    return this.balance;
     },
  withdraw(amount) { 
    if (this.balance > amount) {
         this.balance -= amount;
    } else {
      console.log("Недостатньо коштів")
    }
          this.createTransaction(amount, Transaction.WITHDRAW);
          return this.balance;
    },
  getBalance() {
    return this.balance;
     },
  getTransactionDetails(id) {
    return this.transactions[id];
     },
  getTransactionTotal(type) {
    let total = 0;
  for (const transaction of this.transactions) {
    if (transaction.typeTransaction === type) {
      total += transaction.amount;
    }
  }
    return total;
   },
};
console.log(account.deposit(300));
console.log(account.withdraw(100));
console.log(account.deposit(700));
console.log(account.getBalance());
console.log(account.transactions);
console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));

