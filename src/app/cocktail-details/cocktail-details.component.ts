import { Component } from '@angular/core';
import { Cocktail } from '../entities/cocktail';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent {
  cocktail: Cocktail = {
    name: 'Mojito',
    img: 'https://www.hangoverweekends.co.uk/uploads/images/mojito.jpg',
    description:
      "Le Mojito complète parfaitement l'été avec son goût frais de menthe. Le mélange de rhum blanc, de menthe, de jus de citron vert, de sucre et d'eau gazeuse est vif, avec une teneur en alcool relativement faible ; l'eau gazeuse peut être remplacée par du Sprite ou du 7-up. Lorsque vous préparez un mojito, écrasez toujours les feuilles de menthe au lieu de les couper en dés afin de libérer les huiles qui contribueront à renforcer la saveur mentholée. ",
  };
}
