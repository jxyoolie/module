import { IShow} from "../interface/IShow";
export class ShowInApp implements IShow {
  info: string = "";
  show(s: string) {
    this.info = "Інформація: " + s + '\n';
  }
}
