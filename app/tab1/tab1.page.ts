import { Component } from '@angular/core';
import { ICompany } from "./interface/ICompany";
import { JuridicalPerson } from "./class/JuridicalPerson";
import { PhysicalPersonEntrepreneur } from "./class/PhysicalPersonEntrepreneur";
import { Subject } from "./class/Subject";
import {ShowInApp} from "./class/ShowInApp";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  show1: string = "";
  show2: string = "";
  show3: string = "";
  a1: number = 0;
  b1: number = 0;
  a2: number = 0;
  b2: number = 0;
  a3: number = 0;
  b3: number = 0;

  constructor() {}

  calculate(a1: any, b1: any, a2: any, b2: any, a3: any, b3: any) {

    try {

      this.a1 = parseFloat(a1);
      this.b1 = parseFloat(b1);
      this.a2 = parseFloat(a2);
      this.b2 = parseFloat(b2);
      this.a3 = parseFloat(a3);
      this.b3 = parseFloat(b3);

      if (this.a1 < 0 || this.b1 < 0 || this.a2 < 0 || this.b2 < 0 || this.a3 < 0 || this.b3 < 0) {
        throw new Error('Argument must be > 0');
      }

      let show1 = new ShowInApp();
      let show2 = new ShowInApp();
      let show3 = new ShowInApp();
      let subject = new Subject("Суб'єкт", a1, b1, show1);
      let fop = new PhysicalPersonEntrepreneur("Фотостудія ARTshot", 10062091, a2, b2, show2);
      let juridical = new JuridicalPerson("Попова Юлія", a3, b3, show3);

      console.log(subject.control());
      console.log(fop.createBusiness());
      console.log(juridical.doCommercialActivity());

      this.show1 = show1.info;
      this.show2 = show2.info;
      this.show3 = show3.info;

    } catch (e) {
      console.log(e);
    }
  }



}
