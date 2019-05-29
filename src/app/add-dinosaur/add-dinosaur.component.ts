import {Component, OnInit} from '@angular/core';
import {AddDinosaurService} from '../service/add-dinosaur.service';
import {Dinosaur} from '../model/dinosaur.model';
import {Park} from '../model/park.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-dinosaur',
  templateUrl: './add-dinosaur.component.html',
  styleUrls: ['./add-dinosaur.component.css']
})
export class AddDinosaurComponent implements OnInit {
  dinosaur: Dinosaur;
  park: Park;
  isWorking: boolean;

  constructor(public ads: AddDinosaurService, public router: Router) {
  }

  ngOnInit() {
  }

  saveDinosaur() {
    this.ads.addDinosaur(this.dinosaur.name, this.dinosaur.race.id, this.park.id, this.isWorking).subscribe(res => {
      this.router.navigate(['dinosaurs']);
      console.log(res);
    });
  }

}
