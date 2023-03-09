import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthAPI} from "../constants/AuthAPI";
import {Fattura} from "../Dto/fattura";

@Injectable({
  providedIn: 'root'
})
export class FatturaService {

  constructor(private http: HttpClient) { }

  serverHost = 'http://localhost:8087'

  getAllFatture() {
    return this.http.get<any>(this.serverHost + AuthAPI.GET_ALL_FATTURE);
  }

  editFattura(fattura: Fattura) {
    return this.http.post(this.serverHost + AuthAPI.EDIT_FATTURA, fattura);
  }

}
