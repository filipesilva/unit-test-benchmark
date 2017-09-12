import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2634Component } from './my-comp-2634.component';

describe('MyComp2634Component', () => {
  let component: MyComp2634Component;
  let fixture: ComponentFixture<MyComp2634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2634Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
