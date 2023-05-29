import { IShow } from "../interface/IShow";
import { ICommercial } from "../interface/ICommercial";
import { Person } from "./Person";

export class JuridicalPerson extends Person implements ICommercial {
  constructor(name: string, income: number, taxRate: number, shower: IShow) {
    super(name, income, taxRate);
  this.calculateTax = income * taxRate;
  shower.show("Юридична особа " + this.name + " має суму податку = " + this.calculateTax + '\n');
  }

  doCommercialActivity() {
    return "Юридична особа займається комерційною активністю\n";
  }

}
