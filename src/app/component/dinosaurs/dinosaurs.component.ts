import {Component, OnInit} from '@angular/core';
import {Dinosaur} from '../../model/dinosaur.model';
import {DinosaurService} from '../../service/dinosaur.service';

@Component({
  selector: 'app-dinosaurs',
  templateUrl: './dinosaurs.component.html',
  styleUrls: ['./dinosaurs.component.css']
})
export class DinosaursComponent implements OnInit {
  dinosaurs: Dinosaur[];

  constructor(public ds: DinosaurService) {
  }

  ngOnInit() {
    this.ds.getAll().subscribe(res => {
      this.dinosaurs = res;
    });
  }

}
