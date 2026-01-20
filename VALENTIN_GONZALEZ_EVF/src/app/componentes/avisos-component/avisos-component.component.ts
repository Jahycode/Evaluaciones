import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Aviso } from 'src/app/model/aviso';
import { IonItem, IonLabel, IonButton, IonIcon } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avisos-component',
  templateUrl: './avisos-component.component.html',
  styleUrls: ['./avisos-component.component.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonItem,CommonModule]
})
export class AvisosComponentComponent {

  @Input() aviso!: Aviso;
  @Output() eliminar = new EventEmitter<string>();

  solicitarEliminar() {
    this.eliminar.emit(this.aviso.id);
  }

}
