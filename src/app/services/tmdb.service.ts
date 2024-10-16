import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  apiKey: string = environment.tmdbApiKey;
  apiUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=pt-BR`;
    return this.http.get<any>(url);
  }

  getGenres(): Observable<any> {
    const url = `${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}&language=pt-BR`;
    return this.http.get<any>(url);
  }

  getMoviesByGenre(genreId: number): Observable<any> {
    const url = `${this.apiUrl}/discover/movie?api_key=${this.apiKey}&with_genres=${genreId}&language=pt-BR`;
    return this.http.get<any>(url);
  }

  searchMovies(query: string): Observable<any> {
    const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}&language=pt-BR`;
    return this.http.get<any>(url);
  }

  getMovieWatchProviders(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}/watch/providers?api_key=${this.apiKey}&language=pt-BR`;
    return this.http.get<any>(url);
  }

  getMovieDetails(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}&language=pt-BR`;
    return this.http.get<any>(url);
  }

  getMovieVideos(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}/videos?api_key=${this.apiKey}&language=pt-BR`;
    return this.http.get<any>(url);
  }
}
