import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2150Component } from './my-comp-2150.component';

describe('MyComp2150Component', () => {
  let component: MyComp2150Component;
  let fixture: ComponentFixture<MyComp2150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
