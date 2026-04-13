
//1
const user = {
  hobby: "dance",
  premium: true,
};
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;
const keyUser = Object.keys(user);
for (const key of keyUser) {
  console.log(`${key}: ${user[key]}`);
}

//2
console.log("Завдання 2");
function countProps(obj) {
  let result = Object.keys(obj).length;
  return result;
}
console.log(countProps(user));

//3
console.log("Завдання 3");
const employees = {
  Artem: 5,
  Yaroslav: 9,
  Sonya: 11,
  Danil: 2,
  Andrey: 4,
};
function findBestEmployee(employees) {
  let result = 0;
  for (const employee in employees) {
    if (employees[employee] > result) {
      result = employees[employee];
    }
  }
  return result;
}
console.log(findBestEmployee(employees));

//4
console.log('Завдання 4');
const salaryEmployees = {
  Artem: 5500,
  Yaroslav: 9000,
  Sonya: 11000,
  Danil: 2100,
  Andrey: 4700,
};
function countTotalSalary(employees) {
  let sum = 0;
  for (const employee in employees) {
    sum += employees[employee];
  }
  return sum;
}
console.log(countTotalSalary(salaryEmployees));

//5
console.log('Завдання 5');
const bricks = [
  {
    model: "C1005",
    color: "pink",
    details: 205,
  },
  {
    model: "C1010",
    color: "orange",
    details: 172,
  },
  {
    model: "C1006",
    color: "purple",
    details: 210,
  },
];

function getAllPropValues(arr, prop) {
   const result = [];
  for (const bricks of arr) {
      if (bricks[prop ] !== undefined) {
         result.push(bricks[prop]) 
     }
  }
  return result;
}
console.log(getAllPropValues(bricks, "color"));

//6
console.log('Завдання 6');
const products = [
  {
    name: "Orange".toLowerCase(),
    price: 12,
    quantity: 50,
  },
  {
    name: "Coffe".toLowerCase(),
    price: 35,
    quantity: 30,
  },
  {
    name: "Bars".toLowerCase(),
    price: 10,
    quantity: 100,
  },
  {
    name: "ice cream".toLowerCase(),
    price: 22,
    quantity: 20,
  },
];

function calculateTotalPrice(allProdcuts, productName) {
  let sum = 0;
  for (const product of allProdcuts) {
      if (product.name === productName) {
         sum = product.price * product.quantity
     }
  }
  return sum;
}
 console.log(calculateTotalPrice(products, "coffe".toLowerCase()));


const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
const account = {
    balance: 0,
    transactions: [],
  createTransaction(amount, type) {
      this.transactions.push({id: this.transactions.length + 1,amount: amount, typeTransaction: type }); 

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
console.log(account.getTransactionDetails(Number(prompt('Введіть айди транзакціїї'))));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));

