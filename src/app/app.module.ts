import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';
import { FormularioSeccionComponent } from './componentes/formulario-seccion/formulario-seccion.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { ListarAlumnosComponent } from './componentes/listar-alumnos/listar-alumnos.component';
import { HistorialComponent } from './componentes/historial/historial.component';
import { ListaHistorialComponent } from './componentes/lista-historial/lista-historial.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioAlumnoComponent,
    FormularioSeccionComponent,
    AlumnoComponent,
    ListarAlumnosComponent,
    HistorialComponent,
    ListaHistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
