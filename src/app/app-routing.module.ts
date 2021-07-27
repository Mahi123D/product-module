import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product/add-product.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegistrationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'add-products/:property/:id', component: AddProductComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
