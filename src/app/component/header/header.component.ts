import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
//déclaration des variables (+ leur type), pour affichage dans .html
public name: String
public prenom: String

//variable initialisée à false (ngIf équivaut à display: none)
public isClicked: boolean = false

//fonction activant la variable isClicked
  public auClic() { 
    this.isClicked = true
   }

  constructor() {  }

  ngOnInit(): void {
  }
}