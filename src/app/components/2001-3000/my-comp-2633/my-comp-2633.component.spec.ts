import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2633Component } from './my-comp-2633.component';

describe('MyComp2633Component', () => {
  let component: MyComp2633Component;
  let fixture: ComponentFixture<MyComp2633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
