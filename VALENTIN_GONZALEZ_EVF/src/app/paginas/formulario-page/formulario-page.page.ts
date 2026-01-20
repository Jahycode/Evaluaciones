import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonNote, IonButton } from '@ionic/angular/standalone';
import { AvisosService } from 'src/app/servicio/avisos-service';
import { Router } from '@angular/router';
import { Aviso } from 'src/app/model/aviso';
import { FormularioComponentComponent } from 'src/app/componentes/formulario-component/formulario-component.component';

@Component({
  selector: 'app-formulario-page',
  templateUrl: './formulario-page.page.html',
  styleUrls: ['./formulario-page.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, FormularioComponentComponent]
})
export class FormularioPage {

  constructor(
    private avisosService: AvisosService,
    private router: Router
  ) {}

  async guardarAviso(data: { titulo: string; descripcion: string; fotoBase64: string }) {
    const aviso: Aviso = {
      id: '',
      titulo: data.titulo,
      descripcion: data.descripcion,
      fechaCreacion: new Date(),
      fotoBase64: data.fotoBase64
    };

    await this.avisosService.guardarAviso(aviso);
    this.router.navigateByUrl('/avisos-page');
  }

}
