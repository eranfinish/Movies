import {Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges} from '@angular/core';
import { ApiService } from 'src/services/api-service';

@Component({
    moduleId: module.id,
    selector: 'app-movie-details',
    templateUrl: './moviedetails.component.html',
    styleUrls: ['./moviedetails.component.scss'],
   //
})
export class MovieDetailsComponent {
  constructor(private apiService: ApiService) { }

  @Input() movieId: string = '';
    // TODO implement component
    ngOnChanges(changes: SimpleChanges) {

        console.log(this.movieId);
        this.apiService.getMovieDetails(this.movieId).subscribe(movie => {
        console.log(movie);
        });
      //  console.log('Previous value:', changes['movieId'].previousValue);
      //  console.log('Current value:', changes['movieId'].currentValue);

    }
}




