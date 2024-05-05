import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouteReuseStrategy, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  imageUrl = '/assets/images/amazon_logo_dark.png';

  email = 'azeem@gmail.com';
  password = '12345';

  mail = '';
  pass = '';

  isEmpty = false;

  constructor(public router: Router) {

  }
  checkInput(email: any, password: any) {
    if (email == '') {
      this.isEmpty = true;
    }
    else if (email == this.email && password == this.password) {
      alert("Logged in Successfully!");
      this.router.navigate(['/home']);
    }
    else {
      alert("Invalid email or password, Create a new Amazon account?");
      this.router.navigate(['/register']);
    }
  }
}
