import { TestBed } from '@angular/core/testing';

import { FilterdProductsService } from './filterd-products.service';

describe('FilterdProductsService', () => {
  let service: FilterdProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterdProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
