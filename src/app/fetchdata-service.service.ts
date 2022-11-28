import { Injectable } from "@angular/core"; // Permet de géré les dépendances dans mes classes.
import { HttpClient } from "@angular/common/http"; // Permet de communiqué avec un client.

@Injectable()
export class FetchdataServiceService {
  constructor(private http: HttpClient) {} // Injecte HTTPclient. 

  // Schema pour faire une requête get à un clientHttp. 
  getData(url: string) {
    return this.http.get(url);
  }
}
