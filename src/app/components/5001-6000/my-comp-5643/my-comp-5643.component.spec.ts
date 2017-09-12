import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5643Component } from './my-comp-5643.component';

describe('MyComp5643Component', () => {
  let component: MyComp5643Component;
  let fixture: ComponentFixture<MyComp5643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
