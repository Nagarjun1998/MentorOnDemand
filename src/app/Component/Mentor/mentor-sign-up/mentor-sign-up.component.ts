import { Component, OnInit } from '@angular/core';
import { MentorService } from 'src/app/Service/mentor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/mustmatch-validator';
import { Mentor } from 'src/app/Models/mentor';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/Service/skill.service';
import { Skill } from 'src/app/Models/skill';

@Component({
  selector: 'app-mentor-sign-up',
  templateUrl: './mentor-sign-up.component.html',
  styleUrls: ['./mentor-sign-up.component.css']
})
export class MentorSignUpComponent implements OnInit {

  item:Mentor;
  list:Mentor[];
  msg:any;
  item1:Skill;
  list1:Skill[];
  registerForm: FormGroup;
  submitted = false;
  re_password;
  constructor(private myservice:MentorService,private formBuilder: FormBuilder,private router:Router,private service:SkillService) {
    this.item = new Mentor();
    
   }

  
  ngOnInit() {
    

    this.registerForm = this.formBuilder.group({
       
       mentorName: ['', [Validators.required, Validators.maxLength(15),Validators.pattern('^[a-zA-Z ]*$')]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5)]],
        re_password: ['', Validators.required],
        technologies: ['', Validators.required],
        facilities: ['', Validators.required],
        yearsOfExperience: ['', Validators.required],
        timeSlot: ['', Validators.required],
        linkedInUrl: ['', Validators.required],
        contactNo: ['', [Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(10)]]




      }, 
      {
          validator: MustMatch('password', 're_password')
      });

      this.service.GetAll().subscribe(data=>this.list1=data)


  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    else{
      this.myservice.Add(this.item).subscribe(k=>this.msg=k);
      console.log(this.msg);
    this.router.navigate(['/login']);
    // this.username="";
    // this.email="";
    // this.contactno="";
    // this.password="";
    // this.re_password="";
  }
}


   
}
