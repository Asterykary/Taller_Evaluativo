import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Libreria que ayuda a consumir servicios ( vienen en el core de angular)
import { ConfigService } from './config.service'; // consumir servicios
import { Observable, observable } from 'rxjs'; // forma amistosa de poder consumir un servicio
// | rxjs esta en distintos framework| respuestas asincronas
import { VillanosResponse } from '../model/villanosResponse'; // consumir nuestro modelo

@Injectable({
  providedIn: 'root'
})
export class VillanosService {

  private readonly SERVICE01_URI = '/vector/servicios/villanos01';
  private endpoint;

  constructor(private http: HttpClient, private configService: ConfigService ) {
    // ruta donde esta alojado el servicio
    console.log('servicio villano activo');
    this.endpoint = `${this.configService.getHost()}${this.SERVICE01_URI}`; // alt + 96 postick
   }

  // va a retornar un observable (Forma asincrona, subcribirnos al servicio)
   getResponseVillanos(): Observable<VillanosResponse> {

    return Observable.create((observer) => {
      // requiere una cabecera
      const headers = {          // protocolo se va a utilizar
        headers: new HttpHeaders({'Content-type': ' application/json'})
      };
      // requiere un cuerpo
      this.http.post(this.endpoint, null, headers).subscribe(resp => {
        // validacion
        if (resp['METADATA'].STATUS !== '0' || resp['DATA']['Servicio-01Response'].resultado !== 'OK') {
          observer.error('Error en respuesta de servicio');
          observer.complete();
          return;
        }
        const servicevillanos = resp['DATA']['Servicio-01Response'].Data;
        observer.next(servicevillanos);
        observer.complete();

      // capturar error
      }, (err) => {
        observer.error('error de comunicación con servicio');
        observer.complete();
        return;
      });

    });
   }
}

