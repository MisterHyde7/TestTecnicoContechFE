import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Prodotto} from "../../Dto/Prodotto";
import {ProdottoService} from "../../service/prodotto.service";

@Component({
  selector: 'app-edit-dialog-prodotto',
  templateUrl: './edit-dialog-prodotto.component.html',
  styleUrls: ['./edit-dialog-prodotto.component.css']
})
export class EditDialogProdottoComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private prodottoService: ProdottoService) {}

  descrizioneCopia: string = '';
  prezzoCopia: number = 0;

  ngOnInit(): void {
    this.descrizioneCopia = this.data.prodotto.descrizione;
    this.prezzoCopia = this.data.prodotto.prezzo;
  }

  salvaModificaProdotto(input: Prodotto) {
    input.descrizione = this.descrizioneCopia;
    input.prezzo = this.prezzoCopia;
    this.prodottoService.editProdotto(input).subscribe(data => {
      input = data as Prodotto;
    }, error => {
      console.log('error')
    })
  }
}
