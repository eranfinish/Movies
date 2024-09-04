import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from 'src/services/api-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieDetailsComponent } from './components/moviedetails/moviedetails.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieDetailsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
