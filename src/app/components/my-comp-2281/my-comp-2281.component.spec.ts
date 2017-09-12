import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2281Component } from './my-comp-2281.component';

describe('MyComp2281Component', () => {
  let component: MyComp2281Component;
  let fixture: ComponentFixture<MyComp2281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
