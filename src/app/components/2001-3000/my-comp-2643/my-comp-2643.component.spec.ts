import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2643Component } from './my-comp-2643.component';

describe('MyComp2643Component', () => {
  let component: MyComp2643Component;
  let fixture: ComponentFixture<MyComp2643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
