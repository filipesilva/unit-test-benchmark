import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8369Component } from './my-comp-8369.component';

describe('MyComp8369Component', () => {
  let component: MyComp8369Component;
  let fixture: ComponentFixture<MyComp8369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
