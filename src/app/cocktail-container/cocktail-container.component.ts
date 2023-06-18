import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../entities/cocktail';

@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent implements OnInit {
  public cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      img: 'https://www.hangoverweekends.co.uk/uploads/images/mojito.jpg',
      description:
        "Le Mojito complète parfaitement l'été avec son goût frais de menthe. Le mélange de rhum blanc, de menthe, de jus de citron vert, de sucre et d'eau gazeuse est vif, avec une teneur en alcool relativement faible ; l'eau gazeuse peut être remplacée par du Sprite ou du 7-up. Lorsque vous préparez un mojito, écrasez toujours les feuilles de menthe au lieu de les couper en dés afin de libérer les huiles qui contribueront à renforcer la saveur mentholée. ",
    },
    {
      name: 'Cosmopolitan',
      img: 'https://www.hangoverweekends.co.uk/uploads/images/cosmo.jpg',
      description:
        "Ce mélange acidulé de vodka, de triple sec, de jus de citron vert et de jus de canneberge a réussi à supplanter le vénérable screwdriver, car de nombreux buveurs de vodka préfèrent le goût plus net et légèrement acidulé du Cosmopolitan. Les clés de la préparation d'un Cosmopolitan sont une bonne marque de jus de canneberge et le Cointreau Triple Sec, deux éléments essentiels de la boisson.",
    },
    {
      name: 'Mai Tai',
      img: 'https://www.cocktail.fr/wp-content/uploads/2017/05/mai-tai.jpg',
      description:
        "Le Mai Tai est un cocktail de style polynésien qui a un goût tropical fruité, sucré et vibrant. Le mélange de rhum clair et foncé, de curaçao orange, de sirop d'orgeat et de jus de citron vert est un symbole de la culture tahitienne depuis la création de cette boisson.",
    },
  ];

  public selectedCocktail!: Cocktail;

  ngOnInit(): void {
    this.selectedCocktail = this.cocktails[0];
  }

  public selectCocktail(index: number): void {
    this.selectedCocktail = this.cocktails[index];
  }
}
