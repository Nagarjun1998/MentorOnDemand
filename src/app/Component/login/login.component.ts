import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Service/login.service';
import { Router } from '@angular/router';
import { ConditionalExpr } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id;
  password;
  token:any;
  constructor(private _service:LoginService,private router:Router) { }

  ngOnInit() {
  }
  public Login(){
    this._service.Login(this.id,this.password).subscribe(data=>
      {
        console.log(data)
        localStorage.setItem('msg',data.username)
        if(data.message=="User"){    
          if(data.active=="True"){
          alert('Successfull Login as User!!\n\n');
          this.router.navigate(['/udashboard']);
          localStorage.setItem('login','yes');
          localStorage.setItem('active',data.active);
          localStorage.setItem('userid',data.useid)
          localStorage.setItem('role','user');}   
        else{
          this.router.navigate(['/login']);

          alert('Admin Blocked You..Come Back After Sometime!!\n\n');

        }
        }
        else if(data.message=="Mentor")
        {
        alert('Successfull Login as Mentor!!\n\n');
        this.router.navigate(['/mdashboard']);
        localStorage.setItem('login','yes');
        localStorage.setItem('active',data.active);
        localStorage.setItem('mentorid',data.useid)

        localStorage.setItem('role','mentor');
        }

        else if(data.message=="Admin")
        {
        alert('Successfull Login as Admin!!\n\n');
        this.router.navigate(['admin']);
        localStorage.setItem('login','yes');
        localStorage.setItem('token',data.token);

        localStorage.setItem('role','admin');

        }

        else
        {
        alert('Invalid Credentials!!\n\n');
        this.router.navigate(['/login']);
        }

      });
 
  }

  isLogin(){
    if(localStorage.getItem('login')==="yes")
    return true;
    else
        return false;
  }
  isMentor(){
    if(localStorage.getItem('role')==="mentor")
    return true;
    else
    return false;
  }
  isAdmin(){
    if(localStorage.getItem('role')==="admin")
    return true;
    else
    return false;
  }
  // logoutUser(){
  //   localStorage.removeItem('login')
  //   localStorage.removeItem('role')
  //   localStorage.removeItem('msg')
  //   this.router.navigate(['/login'])
  // }
}
