import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AcercaDeService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAcerca_De():Observable<Acerca_De> {
    return this.http.get<Acerca_De>(`${this.apiServerUrl}/api/v1/acerca_de`);
  }

  public updateAcerca_De(acerca_de: Acerca_De):Observable<Acerca_De> {
    return this.http.put<Acerca_De>(`${this.apiServerUrl}/api/v1/acerca_de`, acerca_de);    
  }


}
