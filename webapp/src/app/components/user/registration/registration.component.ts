import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmitForm(){
    this.service.register().subscribe(
      (res: any) => {
        if(res.succeded){
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
