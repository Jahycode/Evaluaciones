import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cita } from 'src/app/modelo/cita';
import { VisualizacionCitasComponent } from '../visualizacion-citas/visualizacion-citas.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonList, IonItem, IonText, IonInput, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ServicioCitas } from 'src/app/servicio/servicio-citas';
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-formulario-citas',
  templateUrl: './gestion-citas.component.html',
  styleUrls: ['./gestion-citas.component.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonText, IonItem, IonList, CommonModule, FormsModule]
})
export class GestionCitasComponent  implements OnInit {

  fraseStr: string = "";
  autorStr: string = "";

  @Output() onCreate = new EventEmitter<Cita>();

  constructor(private servicioCitas: ServicioCitas) {
    addIcons({ addCircleOutline });
  }

  ngOnInit() { }

  onSubmit(form: any) {
    if (form.invalid) return;
    
    const nuevaCita = new Cita(
      undefined,
      this.fraseStr,
      this.autorStr
    );
    
    this.servicioCitas.agregar(nuevaCita);
    this.onCreate.emit(nuevaCita);
    
    this.fraseStr = "";
    this.autorStr = "";
    form.reset();
  }


}
