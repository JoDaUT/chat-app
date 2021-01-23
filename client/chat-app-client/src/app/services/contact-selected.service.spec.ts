import { TestBed } from '@angular/core/testing';

import { ContactSelectedService } from './contact-selected.service';

describe('ContactSelectedService', () => {
  let service: ContactSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
