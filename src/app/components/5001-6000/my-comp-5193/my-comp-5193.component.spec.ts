import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5193Component } from './my-comp-5193.component';

describe('MyComp5193Component', () => {
  let component: MyComp5193Component;
  let fixture: ComponentFixture<MyComp5193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
