// @ts-check
const { add, subtract, divide, product } = require('./calculator');

/**
 * @file index.js is the root file for this example app
 * @author webcoderspeed
 * @see {@link https://github.com/webcoderspeed|WebCoderSpeed}
 */

/**
 * Student Name
 * @type {string}
 */
const studentName = 'Speed';

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [85,67,25.6,87.12,69.4];

/**
 * @type {{id: number|string, text: string}}
 */
const todo = {
  id: 1,
  text: "Code 8 hours a day",
} 

/**
 * Calculate Tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} - Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
  return `$${amount + tax*amount}`;
};

/**
 * A student 
 * @typedef {Object} Student
 * @property {number} id - Student ID
 * @property {string} name - Student name
 * @property {number} [age] - Student age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: 'Speed Sharma',
  age: 20,
  isActive: true
}

/**
 * Class to create a person object 
 */

class Person {
  /**
   * 
   * @param {Object} personInfo - Infomation about the person
   */
  constructor(personInfo) {
    /**
     * @property {string} name - Persons name
     */
    this.name = personInfo.name;
    /**
     * @property {number} age - Persons age
     */
    this.age = personInfo.age;
  }
  /**
   * @property {Function} greet - A greeting message with the name an  d age
   * @returns {void}
   */
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

/**
 * see {@link Person}
 */
const person1 = new Person({
  name: 'Speed Sharma',
  age: 20
});

console.log(add(20, 30));