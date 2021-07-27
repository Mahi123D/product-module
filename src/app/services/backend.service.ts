import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private rootPath = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }


  public get(path: string) {
  
    return this.http.get (this.rootPath + path);
  }


  public post (path: string, data: any) {

    return this.http.post (this.rootPath + path, data);
  }
}
