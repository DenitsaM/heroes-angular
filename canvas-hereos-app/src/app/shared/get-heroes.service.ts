import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetHeroesService {

  constructor(private http: HttpClient) { }
  configHeroesUrl = 'assets/heroes.json';
  configSettingsUrl = 'assets/settings.json';

  getHeroes() {
    return this.http.get(this.configHeroesUrl);
  }

  getSettings(){
    return this.http.get(this.configSettingsUrl);
  }
}
