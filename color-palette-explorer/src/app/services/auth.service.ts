import { Injectable, signal } from '@angular/core';
import { UserGetInterface, UserInterface } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUserSig = signal<UserInterface | undefined | null >(undefined)
}
// | UserGetInterface