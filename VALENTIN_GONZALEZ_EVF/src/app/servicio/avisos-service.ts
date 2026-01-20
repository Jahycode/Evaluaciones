import { Injectable } from '@angular/core';
import { Aviso } from '../model/aviso';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class AvisosService {


  async obtenerAvisos(): Promise<Aviso[]> {

    const { value } =  await Preferences.get({ key: 'avisos' });
    if (value) {
      return JSON.parse(value) as Aviso[];
    } else {
      return [];
    }
    
    
  }

  async guardarAviso(aviso: Aviso): Promise<void> {

    const avisos = await this.obtenerAvisos(); 

  const nuevoAviso: Aviso = {
    ...aviso, // Copio las propiedades del aviso recibido
    id: Date.now().toString(), // Como ocupare preferences uso string para el id con Date.now()
    fechaCreacion: new Date()
  };

  avisos.push(nuevoAviso);

  await Preferences.set({
    key: 'avisos',
    value: JSON.stringify(avisos)
  });
}

  async eliminarAviso(id: string): Promise<void> {

    const avisos = await this.obtenerAvisos();
    const avisosFiltrados = avisos.filter(aviso => aviso.id !== id);

    await Preferences.set({
      key: 'avisos',
      value: JSON.stringify(avisosFiltrados),
    });

  }
  
}
