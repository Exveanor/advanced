const chai = require("chai");
const expect = chai.expect;


const carService = {
  isItExpensive(issue) {
    if (issue === "Engine" || issue === "Transmission") {
      return `The issue with the car is more severe and it will cost more money`;
    } else {
      return `The overall price will be a bit cheaper`;
    }
  },
  discount(numberOfParts, totalPrice) {
    if (typeof numberOfParts !== "number" || typeof totalPrice !== "number") {
      throw new Error("Invalid input");
    }

    let discountPercentage = 0;

    if (numberOfParts > 2 && numberOfParts <= 7) {
      discountPercentage = 15;
    } else if (numberOfParts > 7) {
      discountPercentage = 30;
    }

    let result = (discountPercentage / 100) * totalPrice;

    if (numberOfParts <= 2) {
      return "You cannot apply a discount";
    } else {
      return `Discount applied! You saved ${result}$`;
    }
  },
  partsToBuy(partsCatalog, neededParts) {
    let totalSum = 0;

    if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
      throw new Error("Invalid input");
    }
    neededParts.forEach((neededPart) => {
      partsCatalog.map((obj) => {
        if (obj.part === neededPart) {
          totalSum += obj.price;
        }
      });
    });

    return totalSum;
  },
};

// the tests 

describe('carService', () => {
  describe('isItExpensive()', () => {
    it('should return more severe issue message for Engine or Transmission', () => {
      assert.equal(carService.isItExpensive('Engine'), 'The issue with the car is more severe and it will cost more money');
      assert.equal(carService.isItExpensive('Transmission'), 'The issue with the car is more severe and it will cost more money');
    });

    it('should return cheaper price message for other issues', () => {
      assert.equal(carService.isItExpensive('Brakes'), 'The overall price will be a bit cheaper');
    });
  });

  describe('discount()', () => {
    it('should throw an error for invalid input', () => {
      assert.throws(() => carService.discount('2', 100), Error, 'Invalid input');
      assert.throws(() => carService.discount(2, '100'), Error, 'Invalid input');
    });

    it('should return no discount message for less than or equal to 2 parts', () => {
      assert.equal(carService.discount(2, 100), 'You cannot apply a discount');
    });

    it('should calculate and return discount message for more than 2 parts', () => {
      assert.equal(carService.discount(5, 200), 'Discount applied! You saved 30$');
      assert.equal(carService.discount(8, 500), 'Discount applied! You saved 150$');
    });
  });

  describe('partsToBuy()', () => {
    it('should throw an error for invalid input', () => {
      assert.throws(() => carService.partsToBuy({}, ['Engine']), Error, 'Invalid input');
      assert.throws(() => carService.partsToBuy([], 'Engine'), Error, 'Invalid input');
    });

    it('should calculate and return the total sum of prices for needed parts', () => {
      const partsCatalog = [
        { part: 'Engine', price: 500 },
        { part: 'Transmission', price: 400 },
        { part: 'Brakes', price: 200 },
      ];
      const neededParts = ['Engine', 'Brakes'];
      assert.equal(carService.partsToBuy(partsCatalog, neededParts), 700);
    });
  });
});
