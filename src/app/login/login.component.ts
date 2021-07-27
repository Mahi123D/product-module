import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  details: any;
  login: any = {
    email: '',
    pass: '',
    role: 'admin'
  }

  constructor(private router: Router, private loginService: AuthService ) { }

  ngOnInit() {
  }

  onLogin(){
    if(!this.login.email){
      this.error = 'email Id is important';
      return;
    }
    if(!this.login.pass){
      this.error = 'password is important';
      return;
    }
    this.loginService.onLogin(this.login).subscribe((res: any) => {
console.log("res",res);
      this.details = res.details;
      if(res.status == "error"){
        this.error = res.message;
      }else{
        this.router.navigate(['/products'])
      }
    })
  }

  onRegister(){
    this.router.navigate(['/register'])
  }
}
