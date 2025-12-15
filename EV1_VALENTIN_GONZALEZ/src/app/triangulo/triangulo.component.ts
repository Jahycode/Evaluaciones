import { Component, Input, OnInit } from '@angular/core';
import { TrianguloEquilatero, TrianguloEscaleno } from '../Modelo/figura';
import { IonList, IonItem, IonInput, IonButton, IonCard, IonImg } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone:true,
  imports: [IonImg, IonCard, IonInput, IonList, IonItem, FormsModule, IonButton, CommonModule]

})
export class TrianguloComponent  implements OnInit {
  @Input() tipo: string = "";

  ladoAStr:string=""; //Triangulo Escaleno
  ladoBStr:string=""; //Triangulo Escaleno
  ladoCStr:string=""; //Triangulo Escaleno
  resultadoEs: string="" //Resultado Escaleno

  ladoStr:string=""; //Triangulo Equilatero
  resultadoEq: string="" //Resultado Equilatero
  
  constructor() { }

  ngOnInit() {}

  calcularPerimetroEscaleno(){
      const ladoA = parseInt(this.ladoAStr)
      const ladoB = parseInt(this.ladoBStr)
      const ladoC = parseInt(this.ladoCStr)
      const TrianguloEs = new TrianguloEscaleno(ladoA,ladoB,ladoC) 
      const calculo = TrianguloEs.calcularPerimetro()
      this.resultadoEs = `El perimetro del triangulo escaleno es de ${calculo.toFixed(2)} cm.`
    }

    calcularPerimetroEquilatero(){
      const lado = parseInt(this.ladoStr)
      const TrianguloEq = new TrianguloEquilatero(lado) 
      const calculo = TrianguloEq.calcularPerimetro()
      this.resultadoEq = `El perimetro del triangulo equilatero es de ${calculo.toFixed(2)} cm.`
    }

}
