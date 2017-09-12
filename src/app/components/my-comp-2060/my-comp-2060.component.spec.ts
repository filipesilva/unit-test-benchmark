import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2060Component } from './my-comp-2060.component';

describe('MyComp2060Component', () => {
  let component: MyComp2060Component;
  let fixture: ComponentFixture<MyComp2060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
