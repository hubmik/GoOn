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
    this.service.formModel.reset();
  }

  onSubmitForm(){
    this.service.register().subscribe(
      (res: any) => {
        if(res.succeeded){
          this.service.formModel.reset();
        }else{
          res.errors.array.forEach(element => {
            switch(element.code){
              case 'DuplicateUserName':
                break;

              default:
                break;
            }
          });
        }
      },
      err => { console.log(err) }
    );
  }
}
