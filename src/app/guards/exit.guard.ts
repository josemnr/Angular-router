import { Injectable } from '@angular/core';
import { CanDeactivate, Router, UrlTree } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';

export interface OnExit {
    onExit: () => Observable<boolean> | Promise<boolean> | boolean
}

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanDeactivate<unknown> {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}
    
    canDeactivate(
        component: OnExit,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // const rta = confirm('Estas seguro de salir?');
        return component.onExit ? component.onExit() : true;
    }
}