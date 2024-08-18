import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noauthdGuard: CanActivateFn = (route, state) => {
  let router= inject(Router)
  if(!localStorage.getItem('Token')){
    return true
  }
  else{
    router.navigate(["/home"])
    return false

  }};
