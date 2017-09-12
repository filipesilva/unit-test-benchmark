import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2470Component } from './my-comp-2470.component';

describe('MyComp2470Component', () => {
  let component: MyComp2470Component;
  let fixture: ComponentFixture<MyComp2470Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2470Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2470Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
