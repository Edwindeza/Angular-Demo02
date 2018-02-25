import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from './theme/services/api/interceptor.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutingModule} from './app-routing.module';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { BaseModule } from './reusable/base/base.module';
import { HttpClientService } from './theme/services/api/http-client.service';
import { SwapiService } from './theme/services/swapi.service';
import { AdminService } from './theme/services/admin/admin.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    ProductosComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InterceptorModule,
    BaseModule,
    HttpClientModule
  ],
  providers: [
    HttpClientService,
    AdminService,
    SwapiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
