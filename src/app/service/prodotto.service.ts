import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthAPI} from "../constants/AuthAPI";
import {Fattura} from "../Dto/fattura";
import {Prodotto} from "../Dto/Prodotto";

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  constructor(private http: HttpClient) { }

  serverHost = 'http://localhost:8087'

  getAllProdotti() {
    return this.http.get<any>(this.serverHost + AuthAPI.GET_ALL_PRODOTTI);
  }

  editProdotto(prodotto: Prodotto) {
    return this.http.post(this.serverHost + AuthAPI.EDIT_PRODOTTO, prodotto);
  }

}
