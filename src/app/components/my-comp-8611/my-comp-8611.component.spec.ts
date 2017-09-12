import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8611Component } from './my-comp-8611.component';

describe('MyComp8611Component', () => {
  let component: MyComp8611Component;
  let fixture: ComponentFixture<MyComp8611Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8611Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8611Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
