import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoOnlineComponent } from './aluno-online.component';

describe('AlunoOnlineComponent', () => {
  let component: AlunoOnlineComponent;
  let fixture: ComponentFixture<AlunoOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunoOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
