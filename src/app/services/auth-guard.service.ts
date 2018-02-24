import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) { }

  canActivate() {
    return this.authService.isLoggedIn().map(isSignedIn => {
      if (isSignedIn) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    });
  }
}
