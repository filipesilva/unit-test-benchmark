import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2959Component } from './my-comp-2959.component';

describe('MyComp2959Component', () => {
  let component: MyComp2959Component;
  let fixture: ComponentFixture<MyComp2959Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2959Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
