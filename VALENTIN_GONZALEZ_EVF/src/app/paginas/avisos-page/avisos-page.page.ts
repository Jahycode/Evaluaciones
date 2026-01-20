import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonFab, IonFabButton, IonIcon, IonButton, IonModal } from '@ionic/angular/standalone';
import { Aviso } from '../../model/aviso';
import { AvisosService } from '../../servicio/avisos-service';
import { AvisosComponentComponent } from '../../componentes/avisos-component/avisos-component.component';
import { RouterModule } from '@angular/router';
import { add, trash  } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-avisos-page',
  templateUrl: './avisos-page.page.html',
  styleUrls: ['./avisos-page.page.scss'],
  standalone: true,
  imports: [IonModal, IonButton, IonIcon, IonFabButton,
     IonFab , IonList , IonContent,
     IonHeader, IonTitle, IonToolbar, CommonModule,
      FormsModule,AvisosComponentComponent,RouterModule]
})
export class AvisosPage {

  mostrarModal = false;
  idAvisoAEliminar: string | null = null;


  avisos: Aviso[] = []; 

  constructor(private avisosService: AvisosService) {
    addIcons({ add, trash });
   }

  async ionViewWillEnter() {
    this.avisos = await this.avisosService.obtenerAvisos(); //Cargar avisos al entrar en la vista
    console.log('AVISOS:', this.avisos);
    console.log('FOTO 1:', this.avisos?.[0]?.fotoBase64?.slice?.(0, 30));
  }

  abrirModalEliminar(id: string) { 
  this.idAvisoAEliminar = id;
  this.mostrarModal = true;
  } // Abrir modal de confirmación 

  cerrarModal() { 
    this.mostrarModal = false;
    this.idAvisoAEliminar = null;
  } // Cerrar modal de confirmación

  async confirmarEliminar() {
    if (this.idAvisoAEliminar) {
      await this.avisosService.eliminarAviso(this.idAvisoAEliminar);
      this.avisos = await this.avisosService.obtenerAvisos();
    }
    this.cerrarModal();
  } // Confirmar eliminación del aviso y luego cierra el modal

}
