import { Seccion } from "./seccion";

export interface Alumno {
  id?: number;
  rut_alum: string;
  nombre_alum: string;
  apellido_alum: string;
  edad: number;
  seccion: Seccion;
}
