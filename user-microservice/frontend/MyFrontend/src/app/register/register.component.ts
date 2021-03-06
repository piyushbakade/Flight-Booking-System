import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit { 

  public registerObj={email:'',pwd:''} 
  constructor(public auth:AuthServiceService) { } 

  ngOnInit(): void { 
  }
  sendData() 
  {
   
    this.auth.registerUser(this.registerObj);
  }

  RegisterForm=new FormGroup
  ({
      email:new FormControl('',[Validators.required]),
      pwd:new FormControl('',[Validators.required])
  })
  

  submitData()
  {

  }
}
