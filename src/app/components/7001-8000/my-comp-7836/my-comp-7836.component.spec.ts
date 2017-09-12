import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7836Component } from './my-comp-7836.component';

describe('MyComp7836Component', () => {
  let component: MyComp7836Component;
  let fixture: ComponentFixture<MyComp7836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
