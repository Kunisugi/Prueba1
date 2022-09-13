import { Alumno } from "./alumno";

export interface RegistroHistorial {
  fecha: string;
  hora: string;
  alumno: Alumno;
}
