import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'layout',
  templateUrl: './layout.component.html',
  imports: [RouterOutlet],
})
export class LayoutComponent {}
