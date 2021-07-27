import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  path = "register"

  constructor(private backendService: BackendService) { }

  onRegister(details){
    console.log("details",details);
    return this.backendService.post(this.path, details);
  }

  onLogin(details){
    return this.backendService.post(this.path + '/login/', details);
  }
}
