import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetHeroesService {

  constructor(private http: HttpClient) { }
  configUrl = 'assets/heroes.json';

  getHeroes() {
    return this.http.get(this.configUrl);
  }

}
