import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  constructor() { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Veld is verplicht' :
        this.email.hasError('email') ? 'Dit email adres is niet geldig' :
            '';
  }

}
