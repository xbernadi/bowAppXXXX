import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { CampComponent } from './components/camp/camp.component';
import { CampsComponent } from './components/camps/camps.component';
import { HistorialComponent } from './components/historial/historial.component';
import { HomeComponent } from './components/home/home.component';
import { NewComponent } from './components/new/new.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FormTiradaComponent } from './components/new/form-tirada.component';
import { FiTiradaComponent } from './components/new/fi-tirada.component';

// Auth0
import { AuthGuardService } from './services/auth-guard.service';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'camp/:id', component: CampComponent },
    { path: 'camps', component: CampsComponent },
    { path: 'new', component: NewComponent },
    { path: 'formTirada', component: FormTiradaComponent },
    { path: 'fiTirada', component: FiTiradaComponent },
    { 
        path: 'historial', 
        component: HistorialComponent,
        canActivate: [AuthGuardService]
    },
    { 
        path: 'perfil', 
        component: PerfilComponent,
        canActivate: [AuthGuardService]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
