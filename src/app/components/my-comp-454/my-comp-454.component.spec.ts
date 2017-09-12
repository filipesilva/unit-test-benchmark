import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp454Component } from './my-comp-454.component';

describe('MyComp454Component', () => {
  let component: MyComp454Component;
  let fixture: ComponentFixture<MyComp454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp454Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
