import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct(){
    this.productService.getAll().subscribe((res: any) => {
      console.log("resresresres",res);
      this.products = res.products;
    })
  }

  addProduct(){
    this.router.navigate(['/add-products/Add/New'])
  }

  goToEdit(id){
    this.router.navigate(['/add-products/Edit/'+id])
  }
}
