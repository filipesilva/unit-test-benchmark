import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2928Component } from './my-comp-2928.component';

describe('MyComp2928Component', () => {
  let component: MyComp2928Component;
  let fixture: ComponentFixture<MyComp2928Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2928Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2928Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
