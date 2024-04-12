import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Colors, UserGetInterface, UserInterface } from '../../models/user.interface';

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
  router = inject(Router);

  ngOnInit(): void {
    this.http
      .get<Colors[]>('http://127.0.0.1:8000/api/colorslist/')
      .subscribe({
        next: (response) => {
          console.log('response', response);
          this.colors[0] = response[0].hex_code_1;
          this.colors[1] = response[0].hex_code_2;
          this.colors[2] = response[0].hex_code_3;
          this.colors[3] = response[0].hex_code_4;
          this.colors[4] = response[0].hex_code_5;
        },
        error: () => {
          this.generatePalette();
        },
      });
  }

  logout(): void {
    console.log('logout');
    localStorage.setItem('token', '');
    this.authService.currentUserSig.set(null);
    this.router.navigate(['/']);
  }

  colors: string[] = [];

  constructor() {
    // this.generatePalette();
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

  save(): void {
    this.http
      .put<{message: string}>('http://127.0.0.1:8000//api/colorslist/', 
      {
        hex_code_1: this.colors[0],
        hex_code_2: this.colors[1],
        hex_code_3: this.colors[2],
        hex_code_4: this.colors[3],
        hex_code_5: this.colors[4]
      })
      .subscribe({
        next: (response) => {
          console.log('response', response);
        },
        // error: () => {
        //   // this.authService.currentUserSig.set(null);
        //   console.log('error');
        // },
      });
  }

}