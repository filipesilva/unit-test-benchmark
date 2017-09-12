import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7296Component } from './my-comp-7296.component';

describe('MyComp7296Component', () => {
  let component: MyComp7296Component;
  let fixture: ComponentFixture<MyComp7296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
