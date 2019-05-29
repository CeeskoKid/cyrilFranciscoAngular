import {Dinosaur} from './dinosaur.model';
import {City} from './city.model';

export interface Park {
  id: number;
  name: string;
  city: City;
  dinosaurs: Dinosaur[];
}
