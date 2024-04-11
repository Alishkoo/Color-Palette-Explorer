import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../models/user.interface';

@Component({
  selector: 'app-palette-creator',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './palette-creator.component.html',
  styleUrl: './palette-creator.component.css'
})
export class PaletteCreatorComponent implements OnInit{
  authService = inject(AuthService);
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get<{ user: UserInterface }>('https://api.realworld.io/api/user')
      .subscribe({
        next: (response) => {
          console.log('response', response);
          this.authService.currentUserSig.set(response.user);
        },
        error: () => {
          this.authService.currentUserSig.set(null);
        },
      });
  }

  logout(): void {
    console.log('logout');
    localStorage.setItem('token', '');
    this.authService.currentUserSig.set(null);
  }

  colors: string[] = [];

  constructor() {
    this.generatePalette();
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  

  generatePalette(): void {
    this.colors = Array(5).fill('').map(() => this.getRandomColor());
  }

  copyColor(color: string): void {
    navigator.clipboard.writeText(color).then(() => {
      alert('Color copied to clipboard: ' + color);
    }, (err) => {
      
    });
  }
}