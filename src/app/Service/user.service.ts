import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { Mentor } from '../Models/mentor';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  path:string='http://localhost:49924/User';
  constructor(private client:HttpClient) { }

  public GetAll():Observable<User[]>
  {
    return this.client.get<User[]>(this.path+'/GetAll');
  }
  public Add(item:User):Observable<any>
  {
    return this.client.post<any>(this.path+'/Add',item)
  }
  public Delete(id:string)
    {
        return this.client.delete(this.path+'/Delete/'+id);
    }

    
    public SearchMentor(tech:string,time:string):Observable<Mentor[]>
    {
      return this.client.get<Mentor[]>(this.path+'/SearchMentor/'+tech+'/'+time);
    }

    public Block(id:string)
    {
      return this.client.put(this.path +'/User_Block/'+id,id);
    }
}
