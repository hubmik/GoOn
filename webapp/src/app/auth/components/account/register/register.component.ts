import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RegistrationService } from '../../../services/registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public service: RegistrationService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmitForm(){
    this.service.register().subscribe(
      (res: any) => {
        if(res.succeeded){
          this.service.formModel.reset();
          this.toastr.success("User created successfuly", "Registration successful!");
        }else{
          res.errors.array.forEach(element => {
            switch(element.code){
              case 'DuplicateUserName':
                this.toastr.error("Username is already taken", "Registration failed!");
                break;

              default:
                this.toastr.error(element.description, "Registration failed!");
                break;
            }
          });
        }
      },
      err => { console.log(err) }
    );
  }
}
