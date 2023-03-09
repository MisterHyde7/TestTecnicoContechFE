import {Prodotto} from "./Prodotto";

export class Fattura {

  id: number | undefined;
  descrizione: string | undefined;
  prodotti: Prodotto[] = [];

}
