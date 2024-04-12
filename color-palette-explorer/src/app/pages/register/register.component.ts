import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserGetInterface, UserInterface } from '../../models/user.interface';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, RouterModule],
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
      this.http.post<UserGetInterface>('http://127.0.0.1:8000/api/register/', 
        this.form.getRawValue()
      ).subscribe((response) => {
        console.log('responce', response);
        localStorage.setItem('token', response.token.access);
        this.authService.currentUserSig.set(response);
        this.router.navigate(['/palette']);
      });

      this.http
      .post<{message: string}>('http://127.0.0.1:8000/api/colorslist/', 
      {
        hex_code_1: "#FFA500",
        hex_code_2: "#FFDAB9",
        hex_code_3: "#F08080 ",
        hex_code_4: "#FFA07A",
        hex_code_5: "#FFE4B5"
      })
      .subscribe({
        next: (response) => {
          console.log('response', response);
        },
        error: () => {
          // this.authService.currentUserSig.set(null);
          console.log('error when posting colors');
        },
      });
  }
}
