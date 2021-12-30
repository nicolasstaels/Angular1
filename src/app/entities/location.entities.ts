import {Client} from './client.entities';
import {Adresse} from './adresse.entities';
export interface Location {
  id_location : number;
  date_location:string;
  km_total:number;
  cout:number
  client:Client
  adresse:Adresse
}
