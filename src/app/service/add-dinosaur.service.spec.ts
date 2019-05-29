import { TestBed } from '@angular/core/testing';

import { AddDinosaurService } from './add-dinosaur.service';

describe('AddDinosaurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddDinosaurService = TestBed.get(AddDinosaurService);
    expect(service).toBeTruthy();
  });
});
