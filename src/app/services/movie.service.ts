import { Injectable } from '@angular/core';
import Movie from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[]
  constructor() {
    this.movies = [
      {
        name: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        duration: 300
      },
      {
        name: 'THalo',
        director: 'Elian',
        duration: 100
      },
    ]
  }
  addMovie(movie: Movie) {
    this.movies.push(movie);
  }
}