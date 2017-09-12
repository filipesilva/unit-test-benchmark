import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2515Component } from './my-comp-2515.component';

describe('MyComp2515Component', () => {
  let component: MyComp2515Component;
  let fixture: ComponentFixture<MyComp2515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
