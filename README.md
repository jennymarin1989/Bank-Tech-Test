# Bank Tech Test

The aim of this program is to allow users to deposit and withdraw money from a bank account and
display the account information in a printed statement.

Approach
---------

This was my first tech test, which I decided to write in Javascript to consolidate my Knowledge.

Before writing any line of code, I created five user stories which helped me to break the problem
down and a diagram to make a representation of my idea to solve it.

Initially, I identified 2 classes: Transaction and Statement. The Transaction class was responsible for knowing all transactions and displaying the balance. The Statement class was responsible for printing the date and final statement, but then I realised I wasn't following the Single Responsibility Principle. I restructured my code adding more classes and delegating responsibilities ending up with Transaction, Transactions, Account and Statement.

The Transaction class is responsible for knowing only one transaction. The Transactions class is responsible for storing all the transactions.The Account class only displays the total balance and The Statement class is responsible for printing out the statement with specific date.


User Stories
------------

```
User Stories:

As a User,
So I can deposit and withdraw money,
I’d like to open a bank account

As a user,
So I can use my bank account,
I want to be able to make a deposit

As a user,
So I can get my money from the bank,
I’d like to withdraw a quantity of money from my account

As a user,
So I can follow up my account,
I want to be able to check my balance

As a user,
So I can check my account,
I’d like to print a bank statement with date, credit debit and balance information.
```


# Installation

Instructions for installation and use:

 - git clone https://github.com/jennymarin1989/Bank-Tech-Test.git
 - Open local directory
 - Open jasmine/SpecRunner.html and copy full path
 - Paste the full path in browser
 - Open Javascript console (DevTools) and run the program

#How to Use

![image](https://user-images.githubusercontent.com/29259526/38075434-3cee7ebe-332a-11e8-9f62-7c33b704daa8.png)


Language
--------

Javascript(ES5)


Testing framework
-----------------

Jasmine 3.1.0


Author
------

Jenny Arenas
