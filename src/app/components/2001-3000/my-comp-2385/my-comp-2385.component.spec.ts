import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2385Component } from './my-comp-2385.component';

describe('MyComp2385Component', () => {
  let component: MyComp2385Component;
  let fixture: ComponentFixture<MyComp2385Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2385Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2385Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
