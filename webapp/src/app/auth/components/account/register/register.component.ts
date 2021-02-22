import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../../services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public service: RegistrationService) { }

  ngOnInit() {
  }

  onSubmitForm(){

  }
}
