"use strict"

/* Create your first object

Create an object about a person that lives in your country for some years (unknown how many, you define it) and holds the information below.

Firstname, lastname, age, years of residence in your country, his own nationality, current profession and current salary. 

Then create a method that changes it's nationality to your country's nationality if the years of residence is greater or equal to 7.
 */


/* const myObject = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    yearsOfResidence: 5,
    nationality: "french",
    currentProfession: "plumber",
    currentSalary: 1800,
    myMethod: function () {
        if (this.yearsOfResidence <= 7) {
            this.nationality = "italian"
        }
    }
}
myObject.myMethod();
console.log(myObject);
 */

/* O-2 Convert currency

Create three objects for three people with the following info. Firstname, lastname, bank account (a number in us dollars) and country of residence. 

The bank account is going to be a number that the person has to his/her bank account in US dollars. 

Add a new property that corresponds to how much 1$ to the currency of every person's country corresponds.

The persons are coming from Greece, Switzerland and Australia respectively. 

Create a function that creates a new property for each person that shows the bank account in his country's money.
 */

const greek = {
    firstName: "John",
    secondName: "Greece",
    accountBalance: 2000, //$
    oneDollarInCorrency: 0.89, //€
    myMethod: function () {
        this.balanceInLocalCurr = parseFloat(this.oneDollarInCorrency * this.accountBalance)
   }
}

greek.myMethod();
console.log(greek);

const swiss = {
    firstName: "John",
    secondName: "Switzerland",
    accountBalance: 2000, //$
    oneDollarInCorrency: 0.94, //CHF
    myMethod: function () {
        this.balanceInLocalCurr = parseFloat(this.oneDollarInCorrency * this.accountBalance)
   }
}

swiss.myMethod();
console.log(swiss);


const australian = {
    firstName: "John",
    secondName: "Australia",
    accountBalance: 2000, //$
    oneDollarInCorrency: 0.69, //AUD
    myMethod: function () {
        this.balanceInLocalCurr = parseFloat(this.oneDollarInCorrency * this.accountBalance)
   }
}

australian.myMethod();
console.log(australian);