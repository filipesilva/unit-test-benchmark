import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2805Component } from './my-comp-2805.component';

describe('MyComp2805Component', () => {
  let component: MyComp2805Component;
  let fixture: ComponentFixture<MyComp2805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
