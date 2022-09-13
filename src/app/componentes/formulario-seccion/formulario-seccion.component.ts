import { Component, Output, EventEmitter } from '@angular/core';
import { Seccion } from 'src/app/modelos/seccion';

@Component({
  selector: 'app-formulario-seccion',
  templateUrl: './formulario-seccion.component.html',
  styleUrls: ['./formulario-seccion.component.scss']
})
export class FormularioSeccionComponent{
  @Output() public enviarSeccion = new EventEmitter<Seccion>();
  @Output() public enviarSeccion2 = new EventEmitter<string>();

  public nuevaSeccion: Seccion = {
    id_sec: 0,
    nombre_sec:  ''
  }

  public cambiarSeccion(event: Event): void{
    const elemento = event.target as HTMLInputElement;
    this.nuevaSeccion.nombre_sec = elemento.value;
    this.enviarSeccion2.emit(elemento.value)
  }




  public guardarSeccion(): void {
    const copia: Seccion = {
      ...this.nuevaSeccion
    }
    this.enviarSeccion.emit(copia);
    this.nuevaSeccion.nombre_sec= '';

  }




}
