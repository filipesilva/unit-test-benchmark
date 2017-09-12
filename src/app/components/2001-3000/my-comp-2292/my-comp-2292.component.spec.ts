import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2292Component } from './my-comp-2292.component';

describe('MyComp2292Component', () => {
  let component: MyComp2292Component;
  let fixture: ComponentFixture<MyComp2292Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2292Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2292Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
