import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2469Component } from './my-comp-2469.component';

describe('MyComp2469Component', () => {
  let component: MyComp2469Component;
  let fixture: ComponentFixture<MyComp2469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
