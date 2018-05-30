import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ApiService} from '../api.service'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }

  OnSubmit(dataForm: NgForm) {
    this.apiService.loginUser(dataForm.value['Login'], dataForm.value['Password'])
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          console.log(data);
        }
        else
          console.log(data);
      });
  }

}
