import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private backendService: BackendService) { }

  saveProduct(details) {

    return this.backendService.post('product' + '/saveproduct', details);
  }

  saveImage(image){
console.log("image",image);
    return this.backendService.post('product' + '/saveimage', image);
  }
  
  getAll() {
    return this.backendService.get('product' + '/allproduct');
  }

  getProductById(id) {
    return this.backendService.get('product' + '/getproduct/' + id);
  }

  deleteProduct(id) {
    return this.backendService.get('product' + '/deleteproduct/' + id);
  }
}
