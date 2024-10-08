import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment }  from '../../environments/environment' 

@Injectable({
  providedIn: 'root'
})
export class GetInfoMovieAPIService {
  private apiKey: string = environment.tmdbApiKey;
  private apiUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  // Função para buscar filmes populares
  getPopularMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
  }

  // Função para buscar filme específico
  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`);
  }
}

