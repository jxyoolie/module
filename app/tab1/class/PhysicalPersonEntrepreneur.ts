import { IBusiness } from "../interface/IBusiness";
import { IShow } from "../interface/IShow";
import { Person } from "./Person";

export class PhysicalPersonEntrepreneur extends Person implements IBusiness {
 registrationNumber: number;

 constructor(name: string, registrationNumber: number, income: number, taxRate: number, shower: IShow) {
   super(name, income, taxRate);
   this.registrationNumber = registrationNumber;
   this.calculateTax *= 0.1;
   shower.show("ФОП " + this.name + " з реєстраційним номером: " + this.registrationNumber + " має суму податку = " + this.calculateTax + '\n');
 }

  createBusiness() {
   return "ФОП розвиває свій бізнес\n";
  }

}
