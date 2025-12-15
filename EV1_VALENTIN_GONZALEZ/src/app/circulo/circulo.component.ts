import { Component, OnInit } from '@angular/core';
import { Circulo } from '../Modelo/figura';
import { IonList, IonItem, IonInput, IonButton, IonCard,IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone:true,
  imports: [IonImg, IonInput, IonList, IonItem, FormsModule, IonButton, IonCard]
})
export class CirculoComponent  implements OnInit {

  radioStr:string="";
  resultado: string="";
  constructor() { }

  ngOnInit() {}

  calcularPerimetro(){
    const radio = parseInt(this.radioStr)
    const circulo = new Circulo(radio) 
    const calculo = circulo.calcularPerimetro()
    this.resultado = `El radio del circulo es de ${calculo.toFixed(2)} cm`
  }
  
}
