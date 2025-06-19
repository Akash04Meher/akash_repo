import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  cno: string = '';
  password: string = '';
  message: string = '';
  isSuccess: boolean = false;

  onSubmit(): void {
    if (!/^\d{10}$/.test(this.cno)) {
      this.message = 'Contact number must be 10 digits.';
      this.isSuccess = false;
      return;
    }

    if (this.username === 'Akash' && this.password === '13579') {
      this.message = 'Login Successful !';
      this.isSuccess = true;
    
    } 
    else if(this.username != 'Akash') {
      this.message = 'Username Invalid !';
      this.isSuccess = false;
    }
    else {
      this.message = 'Password Invalid !';
      this.isSuccess = false;
    }
  }

  onReset(): void {
    this.username = '';
    this.cno = '';
    this.password = '';
    this.message = '';
  }
}
