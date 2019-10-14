import { TestBed } from '@angular/core/testing';

import { AlunoOnlineService } from './aluno-online.service';

describe('AlunoOnlineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlunoOnlineService = TestBed.get(AlunoOnlineService);
    expect(service).toBeTruthy();
  });
});
