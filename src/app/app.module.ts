import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Rutes
import {APP_ROUTING} from './app.routes';

// Serveis
import { CampsService } from './services/camps.services';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HistorialComponent } from './components/historial/historial.component';
import { NewComponent } from './components/new/new.component';
import { HomeComponent } from './components/home/home.component';
import { CampsComponent } from './components/camps/camps.component';
import { CampComponent } from './components/camp/camp.component';
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    PerfilComponent,
    HistorialComponent,
    NewComponent,
    HomeComponent,
    CampsComponent,
    CampComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    CampsService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
