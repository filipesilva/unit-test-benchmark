import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2458Component } from './my-comp-2458.component';

describe('MyComp2458Component', () => {
  let component: MyComp2458Component;
  let fixture: ComponentFixture<MyComp2458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
