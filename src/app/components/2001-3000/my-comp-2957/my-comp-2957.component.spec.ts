import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2957Component } from './my-comp-2957.component';

describe('MyComp2957Component', () => {
  let component: MyComp2957Component;
  let fixture: ComponentFixture<MyComp2957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
