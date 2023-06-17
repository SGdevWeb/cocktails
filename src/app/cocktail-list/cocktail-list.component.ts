import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../entities/cocktail';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://www.hangoverweekends.co.uk/media/15505/mojito.jpg?width=500&height=375',
      description:
        "Le Mojito complète parfaitement l'été avec son goût frais de menthe. Le mélange de rhum blanc, de menthe, de jus de citron vert, de sucre et d'eau gazeuse est vif, avec une teneur en alcool relativement faible ; l'eau gazeuse peut être remplacée par du Sprite ou du 7-up. Lorsque vous préparez un mojito, écrasez toujours les feuilles de menthe au lieu de les couper en dés afin de libérer les huiles qui contribueront à renforcer la saveur mentholée. ",
    },
    {
      name: 'Cosmopolitan',
      img: 'https://www.hangoverweekends.co.uk/media/15507/gallery-1430408520-dmg-cosmopolitan-cocktail-001.jpg?width=330px&height=407px',
      description:
        "Ce mélange acidulé de vodka, de triple sec, de jus de citron vert et de jus de canneberge a réussi à supplanter le vénérable screwdriver, car de nombreux buveurs de vodka préfèrent le goût plus net et légèrement acidulé du Cosmopolitan. Les clés de la préparation d'un Cosmopolitan sont une bonne marque de jus de canneberge et le Cointreau Triple Sec, deux éléments essentiels de la boisson.",
    },
    {
      name: 'Mai Tai',
      img: 'https://www.hangoverweekends.co.uk/media/15506/mm-cocktail-guide-maitai-590x375.jpg?width=434px&height=276px',
      description:
        "Le Mai Tai est un cocktail de style polynésien qui a un goût tropical fruité, sucré et vibrant. Le mélange de rhum clair et foncé, de curaçao orange, de sirop d'orgeat et de jus de citron vert est un symbole de la culture tahitienne depuis la création de cette boisson.",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
