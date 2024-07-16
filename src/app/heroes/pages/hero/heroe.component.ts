import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  standalone: true,
  selector: 'HeroePage',
  templateUrl: './heroe.component.html',
})
export class HeroePage implements OnInit {
  public hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activateRouter.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroesById(id)))
      .subscribe((hero) => {
        if (!hero) {
          return this.router.navigateByUrl('/heroes');
        }
        this.hero = hero;
        return;
      });
  }
}
