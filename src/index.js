class SmartCalculator {
  constructor(value) {
    this.initialValue = value;
    this.mathExpression = "";      
  }

  add(number) {      
    this.mathExpression += "+" + number;
    return this;
  }
      
  subtract(number) {
    this.mathExpression += "-" + number;
    return this;
  }

  multiply(number) {      
    this.mathExpression += "*" + number;
    return this;
  }

  devide(number) {
    this.mathExpression += "/" + number;
    return this;
  }

  pow(number) {
    this.mathExpression += "**" + number;
    return this;
  }

  valueOf(){       
      return eval(this.initialValue + this.mathExpression);
  }
}


module.exports = SmartCalculator;
