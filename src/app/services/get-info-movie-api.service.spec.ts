import { TestBed } from '@angular/core/testing';

import { GetInfoMovieAPIService } from './get-info-movie-api.service';

describe('GetInfoMovieAPIService', () => {
  let service: GetInfoMovieAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetInfoMovieAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
