import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private formBuilder: FormBuilder) { }

  userModel = this.formBuilder.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.required, Validators.email],
    FullName: [''],
    Passwords: this.formBuilder.group({
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })
  });

  comparePasswords(fg: FormGroup){
    let confirmPassword = fg.get('ConfirmPassword');
    if(confirmPassword.errors == null || 'passwordMismatch' in confirmPassword.errors){
      if(fg.get('Password').value != confirmPassword.value){
        confirmPassword.setErrors({ passwordMismatch: true });
      }else{
        confirmPassword.setErrors(null);
      }
    }
  }
}
