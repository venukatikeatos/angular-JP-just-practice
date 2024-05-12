import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  constructor(private router: Router) { }

  Login= new FormGroup({
    AdminName : new FormControl(),
    Password : new FormControl(),
})

login(){


console.log(this.Login);
const adminName= this.Login.get('AdminName')?.value;
const password= this.Login.get('Password')?.value;
 localStorage.setItem('AdminName',adminName);
 localStorage.setItem('Password',password);
this.router.navigate([' ']);
}
}