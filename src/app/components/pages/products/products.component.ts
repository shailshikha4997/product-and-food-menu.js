import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
  }
  LoadProduct()
  {
   this._productService.GetProducts().subscribe(r=>{
     console.log((r))
     
   })   
  }
}
