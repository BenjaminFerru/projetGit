import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-comp',
  templateUrl: './aside-comp.component.html',
  styleUrls: ['./aside-comp.component.css']
})
export class AsideCompComponent implements OnInit {
//permet la boucle sur la variable liste
@Input() liste

  constructor() { }

  ngOnInit(): void {
  }

}
