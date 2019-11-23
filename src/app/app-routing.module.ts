import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { UserDashboardComponent } from './Component/User/user-dashboard/user-dashboard.component';
import { MentorDashboardComponent } from './Component/Mentor/mentor-dashboard/mentor-dashboard.component';
import { AdminComponent } from './Component/admin/admin.component';
import { UpdateDialogComponent } from './Component/update-dialog/update-dialog.component';
import { PropasalComponent } from './Component/propasal/propasal.component';


const routes: Routes = [
 {path: '',component:HomeComponent},
 {path: 'home',component:HomeComponent},
 {path: 'login',component:LoginComponent},
 {path: 'udashboard',component:UserDashboardComponent},
  {path: 'admin',component:AdminComponent},
  {path:'update-dialog',component:UpdateDialogComponent},
  {path:'proposal',component:PropasalComponent},

// {path: 'about',component:AboutComponent},
// {path: 'contact',component:ContactComponent},
{path: 'mdashboard',component:MentorDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
