import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2296Component } from './my-comp-2296.component';

describe('MyComp2296Component', () => {
  let component: MyComp2296Component;
  let fixture: ComponentFixture<MyComp2296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
