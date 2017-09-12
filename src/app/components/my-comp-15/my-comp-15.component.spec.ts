import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp15Component } from './my-comp-15.component';

describe('MyComp15Component', () => {
  let component: MyComp15Component;
  let fixture: ComponentFixture<MyComp15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
