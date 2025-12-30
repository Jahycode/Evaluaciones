import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ContenedorCitasComponent } from '../componentes/contenedor-citas/contenedor-citas.component';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons'
import { settingsOutline, listOutline } from 'ionicons/icons'
import { ServicioPersistencia } from '../servicio/servicio-persistencia';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, ContenedorCitasComponent, RouterLink],
})
export class HomePage {

  componentKey: number = 0;
  puedeBorrar = false;

  constructor(private persistencia: ServicioPersistencia){
    addIcons({ settingsOutline, listOutline });
  }

  async ionViewWillEnter() {
     console.log('Inicializando persistencia');
  await this.persistencia.init();

  this.componentKey++;
  console.log('Recargando componente contenedor');
}


  }
