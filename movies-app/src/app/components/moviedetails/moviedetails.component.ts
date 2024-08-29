import {Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, ChangeDetectorRef} from '@angular/core';
import { ApiService } from 'src/services/api-service';
import { MovieDetails } from 'src/app/models/movieDetails';
@Component({
    moduleId: module.id,
    selector: 'app-movie-details',
    templateUrl: './moviedetails.component.html',
    styleUrls: ['./moviedetails.component.scss'],
   //
})
export class MovieDetailsComponent {
  movieDetails : MovieDetails  = new MovieDetails() ;
  constructor(private cd: ChangeDetectorRef, private apiService: ApiService) { }
  loadDetails:boolean = false;

  @Input() movieId: string = '';
    // TODO implement component
    ngOnChanges(changes: SimpleChanges) {
this.loadDetails = true;
        console.log(this.movieId);
        this.apiService.getMovieDetails(this.movieId).subscribe(movie => {
        console.log(movie);
        this.movieDetails.Actors = movie.Actors;
        this.movieDetails.Director = movie.Director;
        this.movieDetails.Genre =  movie.Genre;
        this.movieDetails.Plot = movie.Plot;
        this.movieDetails.Poster = movie.Poster;
        this.movieDetails.Title =  movie.Title;
        this.movieDetails.imdbID = movie.Actors;
        this.movieDetails.Year = movie.Director;
        this.movieDetails.Type = movie.Type;
        this.loadDetails = true;
        this.cd.detectChanges();
        });
      //  console.log('Previous value:', changes['movieId'].previousValue);
      //  console.log('Current value:', changes['movieId'].currentValue);

      }
}




