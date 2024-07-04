import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  standalone: true,
  selector: 'HeroePage',
  templateUrl: './heroe.component.html',
})
export class HeroePage implements OnInit {
  constructor(
    private heroesService: HeroesService,
    private activateRouter: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activateRouter.params.pipe().subscribe((params) => {
      console.log({ params });
    });
  }
}
