import {Component, OnInit} from '@angular/core';
import {Fattura} from "../../Dto/fattura";
import {FatturaService} from "../../service/fattura-service.service";
import {MatDialog} from "@angular/material/dialog";
import {EditDialogComponent} from "../../commons/edit-dialog/edit-dialog.component";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  displayedColumns: string[] = ['position', 'descrizione', 'prodotti', 'symbol'];

  constructor(private fatturaService: FatturaService,
              public dialog: MatDialog) {
  }

  listaFatture: Fattura[] = [];

  ngOnInit() {
    this.getAllFatture();
  }

  private getAllFatture() {
    this.fatturaService.getAllFatture().subscribe(data => {
      this.listaFatture = data;
    }, error => {
      console.log('error')
    });
  }

  openDialog(fattura: Fattura) {
    this.dialog.open(EditDialogComponent, {
      data: {
        fattura
      },
    });
  }

}
