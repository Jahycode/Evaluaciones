import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/modelo/cita';
import { VisualizacionCitasComponent } from '../visualizacion-citas/visualizacion-citas.component';
import { ServicioCitas } from 'src/app/servicio/servicio-citas';
import { ServicioConfiguracion } from 'src/app/servicio/servicio-configuracion';

@Component({
  selector: 'app-contenedor-citas',
  templateUrl: './contenedor-citas.component.html',
  styleUrls: ['./contenedor-citas.component.scss'],
  standalone: true,
  imports: [ VisualizacionCitasComponent],
})
export class ContenedorCitasComponent  implements OnInit {

  cita: Cita = new Cita();
  puedeBorrar: boolean = false;

  constructor(
    private servicioCitas: ServicioCitas,
    private servicioConfig: ServicioConfiguracion
  ) { }

  async ngOnInit() {
    await this.cargarConfiguracion();
    this.cargarCitaAleatoria();
  }

  async ionViewWillEnter() {
    await this.cargarConfiguracion();
    console.log('Configuración recargada. Puede borrar:', this.puedeBorrar);
  }

  async cargarConfiguracion() {
    const config = await this.servicioConfig.obtenerConfiguracion();
    this.puedeBorrar = config.puedeBorrarCitasEnInicio;
  }

  cargarCitaAleatoria() {
    const citaAleatoria = this.servicioCitas.obtenerAleatoria();
    if (citaAleatoria) {
      this.cita = citaAleatoria;
    }
  }

  onDeleteCita(id: number) {
    this.servicioCitas.eliminar(id);
    this.cargarCitaAleatoria();
  }

  onRefreshCita() {
    this.cargarCitaAleatoria();
  }
}
