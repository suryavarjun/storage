import { TestBed } from '@angular/core/testing';

import { ProducttService } from './productt.service';

describe('ProducttService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProducttService = TestBed.get(ProducttService);
    expect(service).toBeTruthy();
  });
});
