import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserGetInterface, UserInterface } from '../../models/user.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);
  router = inject(Router);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit(): void {
      // this.http.post<UserGetInterface>('http://127.0.0.1:8000/api/register/', 
      //   this.form.getRawValue()
      // ).subscribe((response) => {
      //   console.log('responce', response);
      //   localStorage.setItem('token', response.token.access);
      //   this.authService.currentUserSig.set(response);
      //   this.router.navigate(['/']);
      // });
  }
}
