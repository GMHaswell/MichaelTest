import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';

describe('SearchServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchServiceService]
    });
  });

  it('should be created', inject([SearchServiceService], (service: SearchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
