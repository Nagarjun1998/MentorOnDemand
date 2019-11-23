import { Component, OnInit,  } from '@angular/core';
import { LoginService } from './Service/login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginComponent } from './Component/login/login.component';
import { Router } from '@angular/router';
import { SkillService } from './Service/skill.service';
import { Skill } from './Models/skill';
import { UserService } from './Service/user.service';
import { MentorService } from './Service/mentor.service';
import { Mentor } from './Models/mentor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title = 'MentorOnDemandUI';

  technology;
  timestart;
  searchForm: FormGroup;
  submitted = false;
 m;
item:Mentor;
list:Mentor[];

  item1:Skill;
  list1:Skill[];
  constructor(private myservice:LoginComponent,private formBuilder:FormBuilder,private router:Router,private service:SkillService,private service1:UserService,private service2:MentorService){
    
   
  }
  public isCollapsed = false;


  ngOnInit(){
    
    

  }
  

  isLogin(){
    if(localStorage.getItem('login')==="yes" )
    {
      this.m=localStorage.getItem("msg");
      return true;
     
    }
    else
        return false;

  }
  logoutUser(){
    localStorage.removeItem('login')
    localStorage.removeItem('role')
    localStorage.removeItem('msg')
    localStorage.removeItem('token')

    this.m="null";
    this.router.navigate(['/login'])
  }

 
}
