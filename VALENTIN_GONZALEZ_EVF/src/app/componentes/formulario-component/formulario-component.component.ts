import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonItem, IonLabel, IonInput, IonTextarea, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.scss'],
  standalone: true,
  imports: [IonButton, IonTextarea, IonInput, IonLabel, IonItem, FormsModule, CommonModule ]
}) 
export class FormularioComponentComponent{

    titulo = '';
    descripcion = '';
    fotoBase64 = '';

    @Output() guardar = new EventEmitter<{ 
      titulo: string; 
      descripcion: string;
      fotoBase64: string;
     }>();

    formularioValido(): boolean {
      return this.titulo.trim().length >= 5 &&
            this.descripcion.trim().length >= 20;
    }

  enviar() {
    if (this.formularioValido()) {
      this.guardar.emit({
        titulo: this.titulo,
        descripcion: this.descripcion,
        fotoBase64: this.fotoBase64
      });
    }
  }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera //
    })

    this.fotoBase64 = 'data:image/jpeg;base64,' + image.base64String; // Convertir a formato base64
 }
}
