import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Adresse} from '../entities/adresse.entities';
@Injectable({providedIn:"root"})
//providedIn:"root" permet de rendre accessible cette classe partout dans l'application
export class AdressesService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }
  getAdresse(id_adresse: number): Observable<Adresse>{
    return this.http.get<Adresse>(this.host + '/adresses/' + id_adresse);
  }

  deleteAdresse(ad: Adresse): Observable<void>{
    return this.http.delete<void>(this.host + '/adresses/' + ad.id_adresse);
  }
  save(ad: Adresse): Observable<Adresse>{
    return this.http.post<Adresse>(this.host + '/adresses/', ad);
  }
  updateAdresse(ad: Adresse): Observable<Adresse>{
    return this.http.put<Adresse>(this.host + '/adresses/' + ad.id_adresse, ad);
  }
}
