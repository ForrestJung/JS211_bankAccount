'use strict'

// Create a class for creating a bank account
class BankAccount {
    constructor(accountNumber, owner){
        this.accountNumber = accountNumber;
        this.owner = owner;
        this.transactions = [];
    }
    // Method for returning remaining balance
    balance() {
        let sum = 0;
        for(let i=0; i > this.transactions.length; i++) {
            sum += this.transactions[i].amount;
        }
        return sum;
    }
    // Method for creating a deposit
    // Should not allow a deposit of 0
    deposit(amt) {
            let depositTransaction = new Transaction(amt, 'Deposit');
            this.transactions.push(depositTransaction);
    }
    // Method for creating a charge
    // Should allow for a refund (negative charge)
    charge(payee, amt) {
        let currentBalance = this.balance();
        if (amt < currentBalance) {
            let chargeTransaction = new Transaction(-amt, payee);
            this.transactions.push(this.chargeTransaction);
        }
    }
}
// Create a class for transactions
class Transaction {
    constructor(amount, payee) {
        this.payee = payee;
        this.amount = amount;
        this.date = new Date();
    }
}




// tests below
if (typeof describe === 'function') {
    const assert = require('assert');

    describe("#testing account creation", function() {
        it('should create a new account correctly', function() {
            let acct1 = new BankAccount('929215', 'Forrest Gump');
            assert.equal(acct1.owner, 'Forrest Gump');
            assert.equal(acct1.accountNumber, '929215');
            assert.equal(acct1.transactions.length, 0);
            assert.equal(acct1.balance(), 0);
        })
    })

    describe("#testing transaction creation for deposit", function() {
        it('should create a charge correctly', function() {
            let t1 = new Transaction(30, 'Deposit');
            assert.equal(t1.amount, 30);
            assert.equal(t1.payee, "Deposit");
        })
    })

    describe("#testing account balance", function() {
        it('should return account balance', function() {
            let acct2 = new BankAccount('06121967', "Jenny Gump");
            acct2.deposit(55);
            assert.equal(acct2.balance(), 55);
        })
    })
}