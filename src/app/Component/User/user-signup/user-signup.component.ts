import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/mustmatch-validator';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Service/user.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  item:User;
  list:User[];
  k:any;
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private service:UserService,private router:Router) { 
    this.item = new User();
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username :['',Validators.required],
       email: ['', [Validators.required, Validators.email]],
       password: ['', [Validators.required, Validators.minLength(5)]],
       contactno: ['', [Validators.required, Validators.maxLength(10)]],
       re_password: ['', Validators.required]
     }, 
     {
         validator: MustMatch('password', 're_password')
     });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    else{
      this.service.Add(this.item).subscribe(k=>{
        console.log(k.status);
      });
    this.router.navigate(['/login']);
    alert('Successfull Register!!\n\n');

    // this.username="";
    // this.email="";
    // this.contactno="";
    // this.password="";
    // this.re_password="";
  }
}
}
