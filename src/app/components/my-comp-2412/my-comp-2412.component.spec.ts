import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2412Component } from './my-comp-2412.component';

describe('MyComp2412Component', () => {
  let component: MyComp2412Component;
  let fixture: ComponentFixture<MyComp2412Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2412Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2412Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
