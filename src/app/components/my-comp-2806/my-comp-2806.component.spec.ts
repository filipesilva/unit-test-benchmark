import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2806Component } from './my-comp-2806.component';

describe('MyComp2806Component', () => {
  let component: MyComp2806Component;
  let fixture: ComponentFixture<MyComp2806Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2806Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2806Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
