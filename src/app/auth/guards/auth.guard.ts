import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// export const authGuard: CanActivateFn = (route, state) => {
//     const authService = inject(AuthService);
//     const router = inject(Router);

//     const isLogged = localStorage.getItem('token');
//     if( !isLogged ) return false;

//     router.navigate(['./auth/login']);
//     return true;
    
// };