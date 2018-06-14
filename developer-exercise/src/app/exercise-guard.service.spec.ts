import { TestBed, inject } from '@angular/core/testing';

import { ExerciseGuardService } from './exercise-guard.service';

describe('ExerciseGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExerciseGuardService]
    });
  });

  it('should be created', inject([ExerciseGuardService], (service: ExerciseGuardService) => {
    expect(service).toBeTruthy();
  }));
});
