import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Training } from '../Models/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  path:string='http://localhost:49924/Training';
  constructor(private client: HttpClient) { }

  public Add(item:Training):Observable<any>
  {
    return this.client.post<any>(this.path+'/Add',item)
  }
}
