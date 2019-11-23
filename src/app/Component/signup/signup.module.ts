import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { RouterModule } from '@angular/router';
import { UserSignupComponent } from '../User/user-signup/user-signup.component';
import { MentorSignUpComponent } from '../Mentor/mentor-sign-up/mentor-sign-up.component';



@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path : 'signup',component:SignupComponent,
      children: [
        
        { path: 'signuser',component:UserSignupComponent },
        
        { path: 'signmen',component:MentorSignUpComponent}
      ]}
  ])
  ]
})
export class SignupModule { }
