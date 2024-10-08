import { TestBed } from '@angular/core/testing';

import { TutorialVerif } from './tutorial-verif.service';

describe('TutorialverifServiceService', () => {
  let service: TutorialVerif;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorialVerif);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
