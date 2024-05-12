import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Components/admin-login/admin-login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'Admin',component:AdminLoginComponent},
  {path:'',component:AppComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
