import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Client} from '../entities/client.entities';
@Injectable({providedIn:"root"})
//providedIn:"root" permet de rendre accessible cette classe partout dans l'application
export class ClientsService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }
  getClient(id_client: number): Observable<Client>{
    return this.http.get<Client>(this.host + '/clients/' + id_client);
  }
  searchClientUnique(nom: string,prenom:string,tel:string):
    Observable<Client[]>{
    return this.http.get<Client[]>(this.host +
      '/clients/'+nom+'/'+prenom+'/'+tel);
  }


  searchClients(nom: string): Observable<Client[]>{
    return this.http.get<Client[]>(this.host + '/clients/nom=' + nom);
  }
  deleteClient(c: Client): Observable<void>{
    return this.http.delete<void>(this.host + '/clients/' + c.id_client);
  }
  save(c: Client): Observable<Client>{
    return this.http.post<Client>(this.host + '/clients/', c);
  }
  updateClient(c: Client): Observable<Client>{
    return this.http.put<Client>(this.host + '/clients/' + c.id_client, c);
  }
}
