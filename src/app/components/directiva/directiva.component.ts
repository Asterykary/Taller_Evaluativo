import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {

  fechaActual: Date;

  constructor() {
    this.fechaActual = new Date();
   }

  ngOnInit() {
  }

}
