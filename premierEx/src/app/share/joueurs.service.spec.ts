import { TestBed, inject } from '@angular/core/testing';

import { JoueursService } from './joueurs.service';

describe('JoueursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JoueursService]
    });
  });

  it('should be created', inject([JoueursService], (service: JoueursService) => {
    expect(service).toBeTruthy();
  }));
});
