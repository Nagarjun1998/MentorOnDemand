import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  path:string='http://localhost:49924/Login';

  constructor(private _client:HttpClient) { }

  public Login(id,password):Observable<any>
  {
    return this._client.get<any>(this.path+'/Validate/'+id+'/'+password);
  }

  
}
