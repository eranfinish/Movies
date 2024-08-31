import {Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, ChangeDetectorRef} from '@angular/core';
import { ApiService } from 'src/services/api-service';
import { MovieDetails } from 'src/app/models/movieDetails';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/services/localstorage.service';

@Component({
    moduleId: module.id,
    selector: 'app-movie-details',
    templateUrl: './moviedetails.component.html',
    styleUrls: ['./moviedetails.component.scss'],
   //
})
export class MovieDetailsComponent {
  movieDetails : MovieDetails  = new MovieDetails() ;
  Id: string = '';
  constructor(private cd: ChangeDetectorRef,
    private apiService: ApiService,
    private route:ActivatedRoute, private localStorage: LocalStorageService) { }
  ngOnInit() {
     this.route.params.subscribe((params:Params)=>{
      this.Id =params["movieId"];
      this.getDetails(this.Id);
    });

  }
  loadDetails:boolean = false;

  @Input() movieId: string = this.Id;
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

        this.loadDetails = false;
        this.cd.detectChanges();
        });
      //  console.log('Previous value:', changes['movieId'].previousValue);
      //  console.log('Current value:', changes['movieId'].currentValue);

      }

      getDetails(id:string){
        this.apiService.getMovieDetails(id).subscribe(movie => {
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

          this.loadDetails = false;
          this.cd.detectChanges();
          });
      }

      toggleFavorite(movie: MovieDetails) {
        movie.Favorite = !movie.Favorite;
        this.localStorage.updateObjectInList
      }
}




