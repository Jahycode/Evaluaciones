import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption,SelectChangeEventDetail, IonItem, IonLabel } from '@ionic/angular/standalone';
import { CirculoComponent } from "../circulo/circulo.component";
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonLabel, IonItem, 
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSelect,
    IonSelectOption,
    CirculoComponent,
    CommonModule,
    TrianguloComponent
  ],
})
export class HomePage {
  tipoFigura:string="";

  constructor() {}

  esCirculo(){return this.tipoFigura == "circulo"}
  esTrianguloEscaleno(){return this.tipoFigura == "triangulo escaleno"}
  esTrianguloEquilatero(){return this.tipoFigura == "triangulo equilatero"}

  manejarSeleccionFiguras($event: CustomEvent<SelectChangeEventDetail<any>>){
    this.tipoFigura = $event.detail.value
  }

  esTriangulo() {
  return this.tipoFigura === "triangulo_escaleno" || 
         this.tipoFigura === "triangulo_equilatero";
}

}

