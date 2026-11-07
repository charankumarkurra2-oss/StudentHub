
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.css'
})
export class Calculator {

  display: string = '0';
  history: string[] = [];

  private firstNumber: number | null = null;
  private operator: string | null = null;
  private resetDisplay = false;

  addNumber(num: string) {
    if (this.display === '0' || this.resetDisplay) {
      this.display = num;
      this.resetDisplay = false;
    } else {
      this.display += num;
    }
  }

  addDecimal() {
    if (this.resetDisplay) {
      this.display = '0';
      this.resetDisplay = false;
    }

    if (!this.display.includes('.')) {
      this.display += '.';
    }
  }

  chooseOperator(op: string) {
    this.firstNumber = Number(this.display);
    this.operator = op;
    this.resetDisplay = true;
  }

  calculate() {
    if (this.firstNumber === null || !this.operator) return;

    const secondNumber = Number(this.display);
    let result = 0;

    switch (this.operator) {
      case '+':
        result = this.firstNumber + secondNumber;
        break;
      case '-':
        result = this.firstNumber - secondNumber;
        break;
      case '*':
        result = this.firstNumber * secondNumber;
        break;
      case '/':
        if (secondNumber === 0) {
          this.display = 'Error';
          this.firstNumber = null;
          this.operator = null;
          this.resetDisplay = true;
          return;
        }
        result = this.firstNumber / secondNumber;
        break;
    }

    const expression =
      `${this.firstNumber} ${this.operator} ${secondNumber} = ${result}`;

    this.display = String(Number(result.toFixed(8)));
    this.history.unshift(expression);

    this.firstNumber = null;
    this.operator = null;
    this.resetDisplay = true;
  }

  clear() {
    this.display = '0';
    this.firstNumber = null;
    this.operator = null;
    this.resetDisplay = false;
  }

  delete() {
    if (this.display.length > 1) {
      this.display = this.display.slice(0, -1);
    } else {
      this.display = '0';
    }
  }

  percentage() {
    this.display = String(Number(this.display) / 100);
  }
}
