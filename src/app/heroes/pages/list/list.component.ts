import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { CardComponent } from '../../components/card/card.component';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
@Component({
  standalone: true,
  selector: 'list-page',
  templateUrl: './list.component.html',
  imports: [CardModule, CardComponent],
})
export class ListPage implements OnInit {
  public hero: Hero[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((heroes) => (this.hero = heroes));
  }
}
