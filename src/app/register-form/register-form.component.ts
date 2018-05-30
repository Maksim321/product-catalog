import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ApiService} from '../api.service'


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  OnSubmit(dataForm: NgForm) {
    this.apiService.registerUser(dataForm.value['Login'], dataForm.value['Password'])
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          console.log(data);
        }
        else
          console.log(data);
      });
  }
}
