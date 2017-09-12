import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2635Component } from './my-comp-2635.component';

describe('MyComp2635Component', () => {
  let component: MyComp2635Component;
  let fixture: ComponentFixture<MyComp2635Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2635Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2635Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
