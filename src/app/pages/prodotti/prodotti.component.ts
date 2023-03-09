import {Component, OnInit} from '@angular/core';
import {Prodotto} from "../../Dto/Prodotto";
import {ProdottoService} from "../../service/prodotto.service";
import {MatDialog} from "@angular/material/dialog";
import {EditDialogProdottoComponent} from "../../commons/edit-dialog-prodotto/edit-dialog-prodotto.component";

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  displayedColumns: string[] = ['position', 'descrizione', 'prezzo', 'symbol'];

  constructor(private prodottoService: ProdottoService,
              public dialog: MatDialog) {
  }

  listaProdotti: Prodotto[] = [];

  ngOnInit() {
    this.getAllProdotti();
  }

  private getAllProdotti() {
    this.prodottoService.getAllProdotti().subscribe(data => {
      this.listaProdotti = data;
    }, error => {
      console.log('error')
    });
  }

  openDialog(prodotto: Prodotto) {
    this.dialog.open(EditDialogProdottoComponent, {
      data: {
        prodotto
      },
    });
  }
}
