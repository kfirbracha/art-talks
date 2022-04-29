import { TestBed } from '@angular/core/testing';

import { CanActivateArtWorkGuard } from './can-activate-art-work.guard';

describe('CanActivateArtWorkGuard', () => {
  let guard: CanActivateArtWorkGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivateArtWorkGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
