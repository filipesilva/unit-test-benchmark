import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp583Component } from './my-comp-583.component';

describe('MyComp583Component', () => {
  let component: MyComp583Component;
  let fixture: ComponentFixture<MyComp583Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp583Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp583Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
