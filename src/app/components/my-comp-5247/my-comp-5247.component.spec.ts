import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5247Component } from './my-comp-5247.component';

describe('MyComp5247Component', () => {
  let component: MyComp5247Component;
  let fixture: ComponentFixture<MyComp5247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
