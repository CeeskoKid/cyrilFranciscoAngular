import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Dinosaur} from '../model/dinosaur.model';

@Injectable({
  providedIn: 'root'
})
export class AddDinosaurService {
  API_URL = environment.base_url;

  constructor(public http: HttpClient) {
  }

  addDinosaur(name: string, raceId: number, parkId: number, isWorking: boolean): Observable<Dinosaur> {
    return this.http.post<Dinosaur>(this.API_URL + 'dinosaur',
      {name, raceId, parkId, isWorking});
  }

}
