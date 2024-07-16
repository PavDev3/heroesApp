import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { delay, switchMap } from 'rxjs';
import { HeroImagePipe } from '../../../pipes/heroImage.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  standalone: true,
  selector: 'HeroePage',
  templateUrl: './heroe.component.html',
  imports: [CommonModule, ProgressSpinnerModule, HeroImagePipe, ButtonModule],
})
export class HeroePage implements OnInit {
  back() {
    this.router.navigateByUrl('/heroes');
  }

  public hero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activateRouter.params
      .pipe(
        delay(500),
        switchMap(({ id }) => this.heroesService.getHeroesById(id))
      )
      .subscribe((hero) => {
        if (!hero) {
          return this.router.navigateByUrl('/heroes');
        }
        this.hero = hero;
        return;
      });
  }
}
