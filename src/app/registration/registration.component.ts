import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  error: any;

  register: any = {
    email: '',
    pass: '',
    cpass:'',
    phone:'',
    role: 'admin'
  }

  constructor(private router: Router, private registerService: AuthService ) { }

  ngOnInit() {
  }

  onRegister(){

    if(!this.register.email){
      this.error = 'email Id is important';
      return false;
    }
    if(!this.register.pass){
      this.error = 'password is important';
      return false;
    }
    if(this.register.pass != this.register.cpass){
      this.error = 'Confirm password and password should be same';
      return false;
    }

    this.registerService.onRegister(this.register).subscribe((res: any) => {
      console.log("res",res);
      if(res.status == "error"){
        this.error = res.message;
      }else{
      this.router.navigate(['/login'])
      }
    })
  }

}
