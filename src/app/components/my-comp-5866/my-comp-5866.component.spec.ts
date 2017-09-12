import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5866Component } from './my-comp-5866.component';

describe('MyComp5866Component', () => {
  let component: MyComp5866Component;
  let fixture: ComponentFixture<MyComp5866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5866Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
