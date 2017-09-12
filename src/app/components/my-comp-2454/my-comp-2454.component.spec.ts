import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2454Component } from './my-comp-2454.component';

describe('MyComp2454Component', () => {
  let component: MyComp2454Component;
  let fixture: ComponentFixture<MyComp2454Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2454Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2454Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
