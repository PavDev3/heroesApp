import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  standalone: true,
  selector: 'hero-card',
  templateUrl: './card.component.html',
  imports: [CardModule, ChipModule, CommonModule],
})
export class CardComponent implements OnInit {
  @Input() hero!: Hero[];
  ngOnInit(): void {
    if (!this.hero) throw new Error('Hero is required');
  }
}
