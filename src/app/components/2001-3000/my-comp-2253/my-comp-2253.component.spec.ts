import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2253Component } from './my-comp-2253.component';

describe('MyComp2253Component', () => {
  let component: MyComp2253Component;
  let fixture: ComponentFixture<MyComp2253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
