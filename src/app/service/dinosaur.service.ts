import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import {Dinosaur} from '../model/dinosaur.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DinosaurService {
  API_URL = environment.base_url;

  constructor(public http: HttpClient) {
  }

  getAll(): Observable<Dinosaur[]> {
    return this.http.get<Dinosaur[]>(this.API_URL + 'dinosaurs');
  }
}
