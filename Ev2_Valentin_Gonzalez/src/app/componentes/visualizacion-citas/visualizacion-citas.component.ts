import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Cita } from 'src/app/modelo/cita';
import { CommonModule } from '@angular/common';
import { IonList, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trashOutline, refreshOutline } from 'ionicons/icons';

@Component({
  selector: 'app-visualizacion-citas',
  templateUrl: './visualizacion-citas.component.html',
  styleUrls: ['./visualizacion-citas.component.scss'],
  standalone: true,
  imports: [CommonModule,IonList, IonItem, IonLabel, IonButton, IonIcon]
})
export class VisualizacionCitasComponent  implements OnInit {

  @Input() cita: Cita = new Cita();
  @Input() puedeBorrar: boolean = false;
  
  @Output() onDelete = new EventEmitter<number>();
  @Output() onRefresh = new EventEmitter<void>();

  constructor() {
    addIcons({ trashOutline, refreshOutline });
  }

  ngOnInit() { }

  eliminarCita() {
    if (this.cita.id) {
      this.onDelete.emit(this.cita.id);
    }
  }

  refrescarCita() {
    this.onRefresh.emit();
  }

}
