import {Component, ChangeDetectionStrategy} from '@angular/core';
import { ApiService } from 'src/services/api-service';
import { MovieComponent } from '../movie/movie.component';
import { Movie} from '../../models/movie';
import { ChangeDetectorRef } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
    // TODO implement component
    searchInput: string = '';
 
    response:Array<Movie> = [];
    selectedItem: Movie = new Movie();
    error: errorResponse = new errorResponse();

    constructor(private apiService:ApiService, private cdr:ChangeDetectorRef) { }
    async searchMovies(event : any): Promise<void> {
       this.searchInput = event.target.value;
       this.error = new errorResponse();
    //  let movies = await this.apiService.getMovies(input).subscribe;
  //return this.searchInput;
    }
    //add getMovies
    async getMovies() {
    let movies = this.apiService.getMovies(this.searchInput).subscribe(movies => {
      this.response = movies;
      if (movies.Response == 'False') {
       // this.error.Response = false;
        this.error = { Response: false, Error: movies.Error };
        //this.error.Error = movies.Error;
        console.log( this.error);
        this.cdr.detectChanges();
      }
      else{
        this.error.Response = true;
        this.response = movies.Search;
        console.log( this.response);
          this.cdr.detectChanges();
      }
    })

    //return this.searchInput;
      // Implement your logic to fetch movies based on the input
      // For example, you can make an API call here
      // and return the response
      // Remember to handle any errors that may occur during the API call
      // and return an appropriate result or error message

    }

    toggleSelect(item: Movie): void {
      // Check if the item clicked is already selected
      // If it is, set selectedItem to null (deselect it)
      // Otherwise, set selectedItem to the clicked item
      this.selectedItem =  item;
    }
}
export class errorResponse {
  Response:boolean = false;
  Error:string = '';
}




