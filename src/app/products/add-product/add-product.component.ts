import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  error: any;
  property: any;
  id: any;
  product: any = {
    productname: '',
    discription: '',
    price: '',
  }
  img: any;
  file: any;
  productSaved: boolean = false;

  constructor(private httpClient: HttpClient, private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: any) => {
        this.property = params.get('property');
        this.id = params.get('id');
        console.log("this.property", this.property, this.id)
      }
    )

    if (this.id != 'New') {
      this.getProductById();
      this.getProductImage();
    }

  }


  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.file = file;
      console.log("this.image", this.file);
    }

  }

  saveImage(){
    const formData = new FormData();
    formData.append('file', this.file);
    formData.append('productId', this.id);
    this.httpClient.post<any>('http://localhost:3000/files', formData).subscribe(
      (res) => {
        this.getProductImage();
        // this.router.navigate(['/products'])
        console.log("image", res);
      })
  }

  getProductImage(){
    this.httpClient.get<any>('http://localhost:3000/getImage/'+ this.id).subscribe(
      (res) => {
        this.img = res.details.ImagePath;
      })
  }
  saveProduct() {
    console.log("i am in")
    if (!this.product.productname) {
      this.error = 'please enter the product name ';
      return false;
    }
    if (!this.product.discription) {
      this.error = 'please enter the product discription';
      return false;
    }
    if (!this.product.price) {
      this.error = 'please enter the product price';
      return false;
    }
    console.log("formData", this.product);

    this.productService.saveProduct(this.product).subscribe((res: any) => {
      console.log("res", res);
      if (res.status == "error") {
        this.error = res.message;
      } else {
        this.id = res.details._id;
        this.productSaved = true;
        // this.router.navigate(['/products'])
      }
    })
  }

  getProductById() {
    this.productService.getProductById(this.id).subscribe((res: any) => {
      this.product = res.product;
      this.productSaved = true;
    })
  }

  deleteProduct() {
    this.productService.deleteProduct(this.id).subscribe((res: any) => {
      this.router.navigate(['/products'])
    })
  }


  numberOnly(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
