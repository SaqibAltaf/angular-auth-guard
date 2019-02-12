import { Component, OnInit } from '@angular/core';
import Services from './../Services/services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private services  :Services, private router : Router ) {}
  fname : any;
  lname : any;
  email : any;
  password: any;

  ngOnInit() {
  }

  register(){
    console.log(this.lname, this.fname, this.email, this.password)
    this.services.register(this.fname, this.lname, this.email, this.password).subscribe((res)=>{
      console.log(res)
      if(res.code ===200){
        localStorage.setItem('token', res.data.token);
        this.router.navigateByUrl('/home')
      }
    }, err =>{
      console.log(err.error)
    })
    
  }


}
