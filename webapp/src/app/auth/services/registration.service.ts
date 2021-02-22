import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private formBuilder: FormBuilder, private client: HttpClient) { }
  readonly baseURI = 'http://localhost:57491/api';

  formModel = this.formBuilder.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.required],
    FullName: [''],
    Passwords: this.formBuilder.group({
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required]
    },{
      validator: this.comparePasswords
    })
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

  register(){
    var userModel = new User();
    userModel.Username = this.formModel.value.UserName;
    userModel.Email = this.formModel.value.Email;
    userModel.FullName = this.formModel.value.FullName;
    userModel.Password = this.formModel.value.Passwords.Password;

    var httpBody = {
      UserName: userModel.Username,
      Email: userModel.Email,
      FullName: userModel.FullName,
      Password: userModel.Password
    };

    return this.client.post(this.baseURI + '/ApplicationUser/RegisterUser', httpBody);
  }
}
