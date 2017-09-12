import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2653Component } from './my-comp-2653.component';

describe('MyComp2653Component', () => {
  let component: MyComp2653Component;
  let fixture: ComponentFixture<MyComp2653Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2653Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2653Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
