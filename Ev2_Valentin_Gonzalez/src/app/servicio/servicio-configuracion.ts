import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences'
import { Configuracion } from '../modelo/configuracion';

@Injectable({
  providedIn: 'root',
})
export class ServicioConfiguracion {

  private readonly KEY_CONFIGURACION = 'app-configuracion';

  constructor() { }

  // Guardar configuración
  async guardarConfiguracion(config: Configuracion): Promise<void> {
    try {
      const configJson = JSON.stringify(config);
      await Preferences.set({
        key: this.KEY_CONFIGURACION,
        value: configJson
      });
      console.log('Configuración guardada:', config);
    } catch (error) {
      console.error('Error al guardar configuración:', error);
    }
  }

  // Obtener configuración
  async obtenerConfiguracion(): Promise<Configuracion> {
    try {
      const resultado = await Preferences.get({ 
        key: this.KEY_CONFIGURACION 
      });
      
      if (resultado.value) {
        const configJson = JSON.parse(resultado.value);
        return new Configuracion(configJson.puedeBorrarCitasEnInicio);
      } else {
        return new Configuracion(false);
      }
    } catch (error) {
      console.error('Error al obtener configuración:', error);
      return new Configuracion(false);
    }
  }
  async limpiarConfiguracion(): Promise<void> {
    try {
      await Preferences.remove({ key: this.KEY_CONFIGURACION });
      console.log('Configuración eliminada');
    } catch (error) {
      console.error('Error al limpiar configuración:', error);
    }
  }
}
