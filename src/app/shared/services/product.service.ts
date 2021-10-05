import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASEURL,EndPoint } from 'Apiroute/URL';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient:HttpClient) { 

  }
  GetProducts(){
   return this._httpClient.get(`${BASEURL}${EndPoint.product}`)
  }
}
