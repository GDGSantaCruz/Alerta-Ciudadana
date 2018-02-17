import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = null;

  constructor(private authService: AuthService, private router: Router) {
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
      .then((res) => {
        this.router.navigate(['dashboard']);
      })
      .catch((err) => console.log(err));
  }


  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((res) => {
        this.router.navigate(['dashboard']);
      })
      .catch((err) => console.log(err));
  }



  ngOnInit() {
  }

}
