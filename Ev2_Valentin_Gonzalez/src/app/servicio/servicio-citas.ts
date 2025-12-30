import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';
import { ServicioPersistencia } from './servicio-persistencia'; // Iba a implementar persistencia, pero no pude hacer funcionar SQLite, asi que lo deje asi.

@Injectable({
  providedIn: 'root'
})
export class ServicioCitas {

  private citas: Cita[] = [];
  private nextId: number = 1;

  constructor() {
    this.inicializarCitasEjemplo();
  }

  private inicializarCitasEjemplo() {
    this.agregar(new Cita(this.nextId++, 'La vida es lo que pasa mientras estás ocupado haciendo otros planes.', 'John Lennon'));
    this.agregar(new Cita(this.nextId++, 'El único modo de hacer un gran trabajo es amar lo que haces.', 'Steve Jobs'));
    this.agregar(new Cita(this.nextId++, 'No cuentes los días, haz que los días cuenten.', 'Muhammad Ali'));
  }

  obtenerTodas(): Cita[] {
    return [...this.citas];
  }

  obtenerAleatoria(): Cita | null {
    if (this.citas.length === 0) {
      return null;
    }
    const indiceAleatorio = Math.floor(Math.random() * this.citas.length);
    return this.citas[indiceAleatorio];
  }

  // Agregar una nueva cita
  agregar(cita: Cita): void {
    if (!cita.id || cita.id === undefined) {
      cita.id = this.nextId++;
    }
    this.citas.push(cita);
    console.log('Cita agregada:', cita);
  }

  // Eliminar una cita por ID
  eliminar(id: number): boolean {
    const indiceInicial = this.citas.length;
    this.citas = this.citas.filter(cita => cita.id !== id);
    const seElimino = this.citas.length < indiceInicial;
    
    if (seElimino) {
      console.log('Cita eliminada con ID:', id);
    }
    
    return seElimino;
  }

  // Obtener cita por ID
  obtenerPorId(id: number): Cita | undefined {
    return this.citas.find(cita => cita.id === id);
  }

  // Obtener cantidad de citas
  obtenerCantidad(): number {
    return this.citas.length;
  }

  // Limpiar todas las citas
  limpiarTodas(): void {
    this.citas = [];
    this.nextId = 1;
    console.log('Todas las citas eliminadas');
  }
}
