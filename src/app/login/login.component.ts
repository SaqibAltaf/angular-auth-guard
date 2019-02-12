import { Component, OnInit } from '@angular/core';
import Services from './../Services/services'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
 
  constructor(private services :Services, private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
  });
  }
  
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
  


  login(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      console.log("form is invalid")
  }
else{
  
  console.log(this.f.email.value, this.f.password.value)
  this.services.login(this.f.email.value, this.f.password.value).subscribe(res =>{
    if(res.code ===200){
      console.log(res)
localStorage.setItem('token', res.token);
this.router.navigateByUrl('/home');

    }
  })

}
  }

}
