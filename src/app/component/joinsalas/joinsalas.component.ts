import { Component, OnInit } from '@angular/core';
import { salas } from '../../../utils/salasdb';

@Component({
  selector: 'app-joinsalas',
  templateUrl: './joinsalas.component.html',
  styles: [
  ]
})
export class JoinsalasComponent implements OnInit {
	public salas = salas;

  constructor() { }

  ngOnInit(): void {
		console.log(this.salas)
  }

}
