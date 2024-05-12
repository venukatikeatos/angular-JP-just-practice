import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  Login= new FormGroup({
    AdminName : new FormControl(),
    Password : new FormControl(),
})
login(){
console.log(this.Login);
}
}