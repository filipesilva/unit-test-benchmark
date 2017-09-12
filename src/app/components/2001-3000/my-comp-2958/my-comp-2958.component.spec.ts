import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2958Component } from './my-comp-2958.component';

describe('MyComp2958Component', () => {
  let component: MyComp2958Component;
  let fixture: ComponentFixture<MyComp2958Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2958Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
