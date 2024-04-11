import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaletteCreatorComponent } from './pages/palette-creator/palette-creator.component';
import { PaletteOverviewComponent } from './pages/palette-overview/palette-overview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PaletteCreatorComponent, PaletteOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'color-palette-explorer';
}
