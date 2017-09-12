import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2004Component } from './my-comp-2004.component';

describe('MyComp2004Component', () => {
  let component: MyComp2004Component;
  let fixture: ComponentFixture<MyComp2004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
