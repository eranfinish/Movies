import {Component, ChangeDetectionStrategy, Input, ViewEncapsulation, EventEmitter, Output} from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { ApiService } from 'src/services/api-service';
@Component({
    moduleId: module.id,
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom
})
export class MovieComponent {
  constructor(private apiService: ApiService) { }
 // selected = false;
  @Input() movie:Movie = new Movie();
  @Input() selected:boolean = false;
  @Output() selectItem = new EventEmitter<Movie>();

  toggleSelected() {
      this.selectItem.emit(this.movie);
      console.log(this.movie);
  }

  

    // TODO implement component
}
