import { TestBed, inject } from '@angular/core/testing';

import { HoodpubService } from './hoodpub.service';

describe('HoodpubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoodpubService]
    });
  });

  it('should be created', inject([HoodpubService], (service: HoodpubService) => {
    expect(service).toBeTruthy();
  }));
});
