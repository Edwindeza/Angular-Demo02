import {NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

const routes: Routes = [
	{
		path: 'home', component: HomeComponent
	},
	{
		path: 'contacto', component: ContactoComponent
	},
	{
		path: 'productos', component: ProductosComponent
	},
	{
		path: 'productos/:codigo', component: DetalleComponent
	},
	{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];


@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})

export class AppRoutingModule {}