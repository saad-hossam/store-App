import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NameWhiteSpace } from 'src/app/nameWhiteSpace.validator';
import { ConfirmedValidator } from './confirmed.validator copy';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router) {
    this.registerForm = this.fb.group({
      Name: ['',[Validators.required]],
      userName:['',[Validators.required, NameWhiteSpace.noSpaceAllowed]],
      email: ['', [Validators.required, Validators.email]],
      Password: ['',[Validators.required,Validators.minLength(8)]],
      confirmedPassword: ['',[Validators.required,]]

    }, { 
      validator: ConfirmedValidator('Password', 'confirmedPassword')
    })
  }

  submitregisterForm() {
    console.log(this.registerForm);
  }
  redirectTologin(){ 
    this.router.navigate(['/login' ])
  }
 

// Code goes here

  }

