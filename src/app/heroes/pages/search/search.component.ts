import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  standalone: true,
  selector: 'search-page',
  templateUrl: './search.component.html',
  imports: [AutoCompleteModule, ReactiveFormsModule, CommonModule],
})
export class SearchPage {
  public searchInput = new FormControl('');
}
