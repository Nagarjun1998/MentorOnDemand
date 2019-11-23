import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { Mentor } from 'src/app/Models/mentor';
import { SkillService } from 'src/app/Service/skill.service';
import { Skill } from 'src/app/Models/skill';
import { TrainingService } from 'src/app/Service/training.service';
import { Training } from 'src/app/Models/training';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
item:Mentor;
list:Mentor[];
list1:Skill[];
SkillId:string[]=[];
list2:number[]=[];
item1:Training;
list3:Training[];
technology;
timestart;
msg:string;
userid;
count;
currentdate=new Date();

 adddays=Math.round((Math.random()*9));

i=1;
    constructor(private userService : UserService,private service:SkillService,private service1:TrainingService,private router:Router) {
      this.item1= new Training();
     
     }
  public isCollapsed = false;
  ngOnInit() {
    
    this.service.GetAll().subscribe(data=>this.list1=data)
  }
  

  onSubmit(){
    this.userService.SearchMentor(this.technology,this.timestart).subscribe(k=>{
      this.list=k;
      k.forEach(element => {
        console.log(element)
            this.service.GetName(element.technologies).subscribe(j=>{
                if(j!=null){
                  this.list2.push(j.fees)
                  this.SkillId.push(j.skillId)
                  console.log(j.fees);
                }
                else{
                  console.log(null);

                  this.list2.push(null)
                }})
      });
      if(this.list2!=null){
        this.count= k.length;
      }
      else{
        this.count=0;
      }
    });
  }

 Send(id:string,timeslot:string,technology:string,sid:string)
 {
   new Date(this.currentdate.setDate(this.currentdate.getDate()+this.adddays));
   if(localStorage.getItem("login")=="yes"){
     this.item1.userId=localStorage.getItem("userid");
     this.item1.mentorId=id;
     this.item1.timeslot=timeslot;
     this.item1.trainingName=technology;
     this.item1.status="Current";
     this.item1.progress="0%";
     this.item1.startDate= new Date();
     this.item1.endDate= new Date(this.currentdate.setDate(this.currentdate.getDate()+this.adddays)); 
     
     this.item1.duration="6";
     this.item1.paymentStatus=null;
     this.item1.requested=true;
     this.item1.rejectNotify=false;
     this.item1.rating=null;
     this.item1.skillId=sid;

     this.service1.Add(this.item1).subscribe(k=>{this.msg=k;console.log(k)});
     this.router.navigate(['/proposal'])
   }
   else{
    this.router.navigate(['/login'])

   }
   

 }
}
