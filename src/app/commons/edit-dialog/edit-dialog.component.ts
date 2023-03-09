import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FatturaService} from "../../service/fattura-service.service";
import {Fattura} from "../../Dto/fattura";
import {Prodotto} from "../../Dto/Prodotto";
import {ProdottoService} from "../../service/prodotto.service";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private fatturaService: FatturaService,
              private prodottoService: ProdottoService) {}

  descrizioneCopia: string = '';
  listaProdotti: Prodotto[] = [];

  ngOnInit(): void {
    this.descrizioneCopia = this.data.fattura.descrizione;
    this.getAllProdotti();
  }

  private getAllProdotti() {
    this.prodottoService.getAllProdotti().subscribe(data => {
      this.listaProdotti = data;
      this.checkProdottiPosseduti();
    }, error => {
      console.log('error')
    });
  }

  salvaModificaDescrizione(input: Fattura) {
    input.descrizione = this.descrizioneCopia;
    this.fatturaService.editFattura(input).subscribe(data => {
      input = data as Fattura;
    }, error => {
      console.log('error')
    })
  }

  aggiungiProdotto(prodotto: Prodotto) {
    this.data.fattura.listaProdotti.push(prodotto);
  }

  private checkProdottiPosseduti() {
    if (this.data.fattura?.listaProdotti) {
      this.data.fattura.listaProdotti.forEach((prodottoItem: Prodotto) => {
        this.listaProdotti.forEach(prodottoInLista => {
          if (prodottoInLista.id === prodottoItem.id) {
            prodottoInLista.selected = true;
          }
        })
      });
    }
  }
}
