import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsalas',
  templateUrl: './newsalas.component.html',
  styleUrls: ['./newsalas.component.scss']
})
export class NewsalasComponent implements OnInit {
	title:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
