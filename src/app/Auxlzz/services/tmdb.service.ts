import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey: string = 'dcd92f7ccc3440f8f78a90943580bf71'; // Sua chave de API
  private apiUrl: string = 'https://api.themoviedb.org/3';

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
