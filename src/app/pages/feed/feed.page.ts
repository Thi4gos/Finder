import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class FeedPage implements OnInit {
  movies: any[] = [];
  genres: any[] = []; // Adicionado para armazenar gêneros
  selectedGenre: number | null = null; // Armazena o gênero selecionado
  searchTerm: string = '';
  ratings: { [key: number]: number } = {};
  streamingProviders: { [key: number]: string[] } = {};
  additionalDetails: { [key: number]: any } = {}; // Detalhes adicionais dos filmes
  isLoading: boolean = false;
  apiKey = this.tmdb.apiKey
  apiUrl = this.tmdb.apiUrl
                          //MOVER REQUISIÇÕES PARA SERVICE
                          //ADICIONAR ESTRUTURA NO BANCO PARA AVALIAÇÕES
  constructor(private http: HttpClient, private router: Router, private tmdb: TmdbService) { }
  
  ngOnInit() {
    this.getPopularMovies();
    this.getGenres(); // Carregar gêneros ao iniciar
  }

  // Método para buscar os filmes populares
  getPopularMovies() {
    this.isLoading = true;
    this.http.get<any>(this.apiUrl).subscribe(
      (data) => {
        this.movies = data.results;
        this.isLoading = false;
        this.loadWatchProviders();
        this.loadAdditionalMovieDetails();
      },
      (error) => {
        console.error('Erro ao buscar filmes: ', error);
        this.isLoading = false;
      }
    );
  }

  // Método para buscar os gêneros de filmes
  getGenres() {
    const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=pt-BR`;
    this.http.get<any>(genresUrl).subscribe(
      (response) => {
        this.genres = response.genres;
      },
      (error) => {
        console.error('Erro ao buscar gêneros: ', error);
      }
    );
  }

  // Método para buscar filmes filtrados por gênero
  filterByGenre() {
    this.isLoading = true;
    if (this.selectedGenre) {
      const genreUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&with_genres=${this.selectedGenre}&language=pt-BR`;
      this.http.get<any>(genreUrl).subscribe(
        (data) => {
          this.movies = data.results;
          this.isLoading = false;
          this.loadWatchProviders();
          this.loadAdditionalMovieDetails();
        },
        (error) => {
          console.error('Erro ao buscar filmes por gênero: ', error);
          this.isLoading = false;
        }
      );
    } else {
      this.getPopularMovies();
    }
  }

  // Método para buscar provedores de streaming
  loadWatchProviders() {
    this.movies.forEach(movie => {
      const movieId = movie.id;
      const url = `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${this.apiKey}&language=pt-BR`;
      this.http.get<any>(url).subscribe(
        (response) => {
          const providers = response.results?.['BR']?.flatrate || [];
          this.streamingProviders[movieId] = providers.map((provider: any) => provider.provider_name);
        },
        (error) => {
          console.error('Erro ao buscar provedores de streaming: ', error);
        }
      );
    });
  }

  // Carregar detalhes adicionais de cada filme
  loadAdditionalMovieDetails() {
    this.movies.forEach(movie => {
      const movieId = movie.id;
      const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&language=pt-BR`;
      this.http.get<any>(detailsUrl).subscribe(
        (details) => {
          this.additionalDetails[movieId] = {
            genres: details.genres.map((genre: any) => genre.name), // Gêneros
            duration: details.runtime, // Duração
            budget: details.budget, // Orçamento
            revenue: details.revenue, // Receita
            certification: details.release_dates.results.find((release: any) => release.iso_3166_1 === 'BR')?.release_dates[0]?.certification || 'N/A' // Classificação indicativa
          };
        },
        (error) => {
          console.error('Erro ao buscar detalhes adicionais: ', error);
        }
      );
    });
  }

  // Método de busca de filmes com base na barra de pesquisa
  searchMovies() {
    this.isLoading = true;
    if (this.searchTerm.trim() === '') {
      this.getPopularMovies();
    } else {
      const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.searchTerm}&language=pt-BR`;

      this.http.get<any>(searchUrl).subscribe(
        (data) => {
          this.movies = data.results;
          this.isLoading = false;
          this.loadWatchProviders();
          this.loadAdditionalMovieDetails(); // Recarregar os detalhes para os filmes buscados
        },
        (error) => {
          console.error('Erro ao buscar filmes: ', error);
          this.isLoading = false;
        }
      );
    }
  }

  // Método para definir o ícone da estrela com base na avaliação do usuário
  getStarIcon(movieId: number, star: number): { icon: string, colorClass: string } {
    let colorClass = '';
    if (this.ratings[movieId] && this.ratings[movieId] >= star) {
      colorClass = 'rated';
      return { icon: 'star', colorClass };
    }
    return { icon: 'star-outline', colorClass: '' };
  }

  // Método para o usuário avaliar um filme
  rateMovie(movieId: number, rating: number) {
    this.ratings[movieId] = rating;
  }

  // Método para assistir ao trailer de um filme
  watchTrailer(movieId: number) {
    const trailerUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.apiKey}`;
    this.http.get<any>(trailerUrl).subscribe(
      (response) => {
        const trailer = response.results.find((video: any) => video.type === 'Trailer' && video.site === 'YouTube');
        if (trailer) {
          const url = `https://www.youtube.com/watch?v=${trailer.key}`;
          window.open(url, '_blank');
        } else {
          alert('Trailer não encontrado.');
        }
      },
      (error) => {
        console.error('Erro ao buscar trailer: ', error);
        alert('Erro ao buscar trailer.');
      }
    );
  }
}
