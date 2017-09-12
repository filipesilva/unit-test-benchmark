import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2369Component } from './my-comp-2369.component';

describe('MyComp2369Component', () => {
  let component: MyComp2369Component;
  let fixture: ComponentFixture<MyComp2369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
