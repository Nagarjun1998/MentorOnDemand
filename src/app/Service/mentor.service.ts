import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mentor } from '../Models/mentor';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  
  path:string='http://localhost:49924/Mentor';
  constructor(private client:HttpClient) { }

  public GetAll():Observable<Mentor[]>
  {
    return this.client.get<Mentor[]>(this.path+'/GetAll');
  }
  public Add(item:Mentor):Observable<any>
  {
    return this.client.post<any>(this.path+'/Add',item)
  }
  public Delete(id:string)
    {
        return this.client.delete(this.path+'/Delete/'+id);
    }
}
