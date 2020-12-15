import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //nom du projet
  title = 'entrainement'
  //données envoyées au app-aside-comp
  listeProduit = ["Produit 1", "Produit 2", "Produit 3"]
  listeArticle = [
    {
      name: "bidule1",
      chiffre: 0
    },
    {
      name: "bidule2",
      chiffre: 0
    },
    {
      name: "toto",
      chiffre: 0
    }
    ]
  chiffres: number
}
