import { Component } from '@angular/core';
import { Alumno } from './modelos/alumno';
import { Seccion } from './modelos/seccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public registroAlumnos: Array<Alumno> = [];
  public registroSeccion: Array<Seccion> = [];

  public agregarRegistro(nuevo: Alumno): void{
    this.registroAlumnos.push(nuevo);
  }
  public agregarSeccion(seccion :Seccion): void{
    const id: number = this.registroSeccion.length + 1;
    seccion.id_sec = id;
    this.registroSeccion.push(seccion);



  }


}
