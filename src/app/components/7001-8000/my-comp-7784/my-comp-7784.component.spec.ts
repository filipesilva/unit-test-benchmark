import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7784Component } from './my-comp-7784.component';

describe('MyComp7784Component', () => {
  let component: MyComp7784Component;
  let fixture: ComponentFixture<MyComp7784Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7784Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7784Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
