import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userNameSource = new BehaviorSubject<string | null>(this.getUserNameFromLocalStorage());
  userName$ = this.userNameSource.asObservable();

  setUserName(name: string) {
    this.userNameSource.next(name);
    localStorage.setItem('userName', name); // Save to localStorage
  }

  getUserName() {
    return this.userNameSource.value;
  }

  private getUserNameFromLocalStorage(): string | null {
    return localStorage.getItem('userName');
  }
}
