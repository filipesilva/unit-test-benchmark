import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5284Component } from './my-comp-5284.component';

describe('MyComp5284Component', () => {
  let component: MyComp5284Component;
  let fixture: ComponentFixture<MyComp5284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
