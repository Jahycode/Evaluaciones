import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonIcon, IonButtons, IonButton } from '@ionic/angular/standalone';
import { ServicioCitas } from 'src/app/servicio/servicio-citas';
import { Cita } from 'src/app/modelo/cita';
import { addIcons } from 'ionicons';
import { trashOutline, homeOutline } from 'ionicons/icons';
import { GestionCitasComponent } from "src/app/componentes/gestion-citas/gestion-citas.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonIcon, IonItemOption, 
    IonItemOptions, IonLabel, IonItem, IonItemSliding, IonList, IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule, FormsModule, GestionCitasComponent,RouterLink]
})
export class GestionCitasPage implements OnInit {

  citas: Cita[] = [];

  constructor(private servicioCitas: ServicioCitas) {
    addIcons({homeOutline,trashOutline});
  }

  ngOnInit() {
    this.cargarCitas();
  }

  cargarCitas() {
    this.citas = this.servicioCitas.obtenerTodas();
  }

  eliminarCita(id: number) {
    this.servicioCitas.eliminar(id);
    this.cargarCitas();
  }

  onNuevaCita() {
    this.cargarCitas();
  }

}
