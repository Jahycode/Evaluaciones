import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButtons, IonButton, IonIcon, IonToggle } from '@ionic/angular/standalone';
import { ServicioConfiguracion } from 'src/app/servicio/servicio-configuracion';
import { Configuracion } from 'src/app/modelo/configuracion';
import { addIcons } from 'ionicons';
import { homeOutline } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina-configuracion',
  templateUrl: './pagina-configuracion.page.html',
  styleUrls: ['./pagina-configuracion.page.scss'],
  standalone: true,
  imports: [IonToggle, IonIcon, IonButton, IonButtons, IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class PaginaConfiguracionPage implements OnInit {

  configuracion: Configuracion = new Configuracion();

  constructor(private servicioConfig: ServicioConfiguracion) {
    addIcons({ homeOutline });
  }

  async ngOnInit() {
    await this.cargarConfiguracion();
  }

  async ionViewWillEnter() {
    await this.cargarConfiguracion();
  }

  async cargarConfiguracion() {
    this.configuracion = await this.servicioConfig.obtenerConfiguracion();
    console.log('📄 Configuración cargada en página:', this.configuracion);
  }

  async onToggleChange(event: any) {
    this.configuracion.puedeBorrarCitasEnInicio = event.detail.checked;
    console.log('🔄 Toggle cambió a:', this.configuracion.puedeBorrarCitasEnInicio);
    await this.servicioConfig.guardarConfiguracion(this.configuracion);
  }



}
