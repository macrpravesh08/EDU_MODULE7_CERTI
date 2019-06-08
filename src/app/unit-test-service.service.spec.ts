import { TestBed } from '@angular/core/testing';

import { UnitTestServiceService } from './unit-test-service.service';

describe('UnitTestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnitTestServiceService = TestBed.get(UnitTestServiceService);
    expect(service).toBeTruthy();
  });
});
