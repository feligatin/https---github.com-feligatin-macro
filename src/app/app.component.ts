import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  despacho: string;
  entrega: string;
  amabilidad: number;
  satisfaccion: number;
  recomendar: number;
  observaciones: string;

  constructor(private api: ApiService) { }

  ngOnInit() {
    console.log( this.api.getMensaje());

  }
  submitForm() {
   
    const data = { // Datos del formulario
      despacho: this.despacho,
      entrega: this.entrega,
      amabilidad: this.amabilidad,
      satisfaccion: this.satisfaccion,
      recomendar: this.recomendar,
      observaciones: this.observaciones,
    };
    this.api.enviarDatos(data).subscribe(
      respuesta => {
        console.log('Datos enviados con éxito:', respuesta);
      },
      error => {
        console.error('Error al enviar datos:', error);
      }
    );
    /*this.http.post(url, data).subscribe((response) => {
      console.log(response); // Manejo de la respuesta del servidor
    });*/
  }
}
