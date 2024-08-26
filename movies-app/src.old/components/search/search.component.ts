import {Component, ChangeDetectionStrategy} from '@angular/core';
import { ApiService } from 'src/services/api-service';
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
    constructor(private apiService: ApiService) { }

    async searchMovies(event : any): Promise<void> {
        const input = event.target.value
        let movies = await this.apiService.getMovies(input).subscribe;

    }


    // TODO implement component
}
