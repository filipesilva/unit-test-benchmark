import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5296Component } from './my-comp-5296.component';

describe('MyComp5296Component', () => {
  let component: MyComp5296Component;
  let fixture: ComponentFixture<MyComp5296Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5296Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
