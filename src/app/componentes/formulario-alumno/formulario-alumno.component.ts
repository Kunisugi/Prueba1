import { Component, Output, EventEmitter} from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';
import { Seccion } from 'src/app/modelos/seccion';

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent{
  public seccion: Array<Seccion> = [];
  @Output() public salidaAlumno = new EventEmitter<Alumno>();
  public registroNuevo: Alumno = {
    rut_alum:'',
    nombre_alum: '',
    apellido_alum:'',
    edad: 0,
    seccion: {id_sec: 0,
      nombre_sec: ''

    }
  }
  public cambiarRut(event : Event): void{
    const elemento= event.target as HTMLInputElement;
    this.registroNuevo.rut_alum = elemento.value;
  }
  public cambiarNombre(event : Event): void{
    const elemento= event.target as HTMLInputElement;
    this.registroNuevo.nombre_alum = elemento.value;
  }
  public cambiarApellido(event : Event): void{
    const elemento= event.target as HTMLInputElement;
    this.registroNuevo.apellido_alum = elemento.value;
  }
  public cambiarEdad(event : Event): void{
    const elemento = event.target as HTMLInputElement;
    this.registroNuevo.edad = Number.parseInt(elemento.value) ||0;
  }
  public sacarSeccion(event : Event): void{
    const elemento = event.target as HTMLInputElement;
    this.registroNuevo.seccion= { id_sec: 1, nombre_sec: elemento.value}
    console.log(elemento);
  }





  public registrarAlumno(): void {
    const copia: Alumno = {
      ...this.registroNuevo

    }
    this.salidaAlumno.emit(copia);
    this.registroNuevo.rut_alum= '';
    this.registroNuevo.nombre_alum= '';
    this.registroNuevo.apellido_alum= '';
    this.registroNuevo.edad= 0;
    this.registroNuevo.seccion = {id_sec: 0, nombre_sec: ''};
    console.log(copia)

  }
  public agregarSeccion(seccion :Seccion): void{
    const id: number = this.seccion.length + 1;
    seccion.id_sec = id;
    this.seccion.push(seccion);



  }






}
