import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { MovieDetailsComponent } from './components/moviedetails/moviedetails.component';
const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },  // Default route
{  path: 'details/:movieId', component: MovieDetailsComponent
},
  { path: '**', redirectTo: '/search' }  // Wildcard route in case of unknown paths
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
