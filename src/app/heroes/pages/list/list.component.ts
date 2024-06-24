import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
@Component({
  standalone: true,
  selector: 'list-page',
  templateUrl: './list.component.html',
  imports: [CardModule],
})
export class ListPage {}
