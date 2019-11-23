import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../Models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  path:string='http://localhost:49924/Skill';
  constructor(private client:HttpClient) { }
  public GetAll():Observable<Skill[]>
  {
    return this.client.get<Skill[]>(this.path+'/GetSkills');
  }
  public Add(item:Skill):Observable<any>
  {
    return this.client.post<any>(this.path+'/Add',item)
  }
  public Search(id:string):Observable<Skill>
  {
    return this.client.get<Skill>(this.path+'/GetById/'+id);
  }
  public GetName(name:string):Observable<Skill>
  {
    return this.client.get<Skill>(this.path+'/GetName/'+name);
  }


  public Update(item:Skill)
    {
        return this.client.put(this.path+'/Update',item);
    }
}
