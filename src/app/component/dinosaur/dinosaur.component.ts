import {Component, Input, OnInit} from '@angular/core';
import {Dinosaur} from '../../model/dinosaur.model';

@Component({
  selector: 'app-dinosaur',
  templateUrl: './dinosaur.component.html',
  styleUrls: ['./dinosaur.component.css']
})
export class DinosaurComponent implements OnInit {
  @Input() dinosaur: Dinosaur;

  constructor() { }

  ngOnInit() {
  }

}
