import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  apiKey: string = environment.tmdbApiKey; // Sua chave de API
  apiUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getPopularMovies(): Observable<any> {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=pt-BR`; // Adicione o parâmetro language
    return this.http.get<any>(url);
  }

  getMovieVideos(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}/videos?api_key=${this.apiKey}&language=pt-BR`;
    return this.http.get<any>(url);
  }

  getMovieWatchProviders(movieId: number): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}/watch/providers?api_key=${this.apiKey}&language=pt-BR`;
    return this.http.get<any>(url);
  }



}
