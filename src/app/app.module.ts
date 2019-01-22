import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Rutes
import {APP_ROUTING} from './app.routes';

// Serveis
import { CampsService } from './services/camps.services';
import { SqlService } from './services/sql.service';
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
import { FormTiradaComponent } from './components/new/form-tirada.component';
import { FiTiradaComponent } from './components/new/fi-tirada.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


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
    KeysPipe,
    FormTiradaComponent,
    FiTiradaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    CampsService,
    SqlService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
