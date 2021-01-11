import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private formBuilder: FormBuilder) { }

  userModel = this.formBuilder.group({
    Username: [''],
    Email: [''],
    FullName: [''],
    Passwords: this.formBuilder.group({
      Password: [''],
      ConfirmPassword: ['']
    })
  });
}
