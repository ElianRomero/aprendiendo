import { Component } from '@angular/core';
import { FormControl, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { HeaderComponent } from '../../components/header/header.component';
@Component({
  selector: 'app-movie-form-page',
  standalone: true,
  imports: [ReactiveFormsModule,HeaderComponent],
  templateUrl: './movie-form-page.component.html',
  styleUrl: './movie-form-page.component.css'
})
export class MovieFormPageComponent {

    movieForm: FormGroup;
    name: FormControl;
    duration: FormControl;
    director: FormControl;
  
    constructor(public movieService: MovieService) {
      this.name = new FormControl('', Validators.required);
      this.duration = new FormControl('', [Validators.required, Validators.max(200)]);
      this.director = new FormControl('', Validators.required);
  
      this.movieForm = new FormGroup({
        name: this.name,
        duration: this.duration,
        director: this.director
      });
    }
    handleSubmit(): void{
      console.log(this.movieForm.value);
      this.movieService.addMovie(this.movieForm.value);
      this.movieForm.reset();
    }
}


