import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}
    
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.user
        .pipe(
            map(user => {
                if(user?.role === 'admin') {                
                    return true;
                } else {
                    this.router.navigate(['/home']);
                    return false;
                }
            })
        )
    }
}