import { Routes } from '@angular/router';
import { PaletteOverviewComponent } from './pages/palette-overview/palette-overview.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { PaletteCreatorComponent } from './pages/palette-creator/palette-creator.component';


export const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' },
    { path: 'overview', component: PaletteOverviewComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent},
    { path: 'palette', component: PaletteCreatorComponent }


];
