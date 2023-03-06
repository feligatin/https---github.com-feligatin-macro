import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMensaje() {
    return this.http.get('http://localhost:3000/');
  }
  enviarDatos(datos: any) {
    console.log(datos);
    return this.http.post('http://localhost:3000/postdata', datos);
  }
}