import { ICompany } from "../interface/ICompany";
import { IShow } from "../interface/IShow";
import {IControl} from "../interface/IControl";

export class Subject implements ICompany, IControl {
  name: string;
  income: number;
  taxRate: number;
  calculateTax: number;

  constructor(name: string, income: number, taxRate: number, shower: IShow) {
    this.name = name;
    this.income = income;
    this.taxRate = taxRate;
    this.calculateTax = income * taxRate;
    shower.show("Суб'єкт " + this.name + " має суму податку = " + this.calculateTax + '\n');

  }

  control() {
    return "Суб'єкт контролює ведення бізнесу\n";
  }

}
