import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2889Component } from './my-comp-2889.component';

describe('MyComp2889Component', () => {
  let component: MyComp2889Component;
  let fixture: ComponentFixture<MyComp2889Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2889Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2889Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
