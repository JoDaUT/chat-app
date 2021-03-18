import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerCallModalComponent } from './answer-call-modal.component';

describe('AnswerCallModalComponent', () => {
  let component: AnswerCallModalComponent;
  let fixture: ComponentFixture<AnswerCallModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerCallModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerCallModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
