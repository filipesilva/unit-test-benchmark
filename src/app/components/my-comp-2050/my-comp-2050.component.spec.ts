import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2050Component } from './my-comp-2050.component';

describe('MyComp2050Component', () => {
  let component: MyComp2050Component;
  let fixture: ComponentFixture<MyComp2050Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2050Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
