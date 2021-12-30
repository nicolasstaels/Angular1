import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Location} from '../entities/location.entities';
import {Client} from '../entities/client.entities';
import {Adresse} from '../entities/adresse.entities';
import {formatDate} from '@angular/common';
@Injectable({providedIn:"root"})
export class LocationsService{
  private host = environment.host;
  constructor(private http: HttpClient) {
  }
  deleteLocation(loc: Location): Observable<void>{
    return this.http.delete<void>(this.host + '/locations/' +
      loc.id_location);
  }
  save(loc: Location,cl:Client): Observable<Location>{
    loc.client=cl;
    return this.http.post<Location>(this.host + '/locations/',loc);
  }
  getLocation(id_location: number): Observable<Location>{
    return this.http.get<Location>(this.host + '/locations/' + id_location);
  }
  updateLocation(loc: Location): Observable<Location>{
    return this.http.put<Location>(this.host + '/locations/' +
      loc.id_location, loc);
  }
  getLocationsClient(id_Client: number) : Observable<Location[]>{
    return this.http.get<Location[]>(this.host + '/locations/idclient=' +
      id_Client);
  }
}
