import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1494Component } from './my-comp-1494.component';

describe('MyComp1494Component', () => {
  let component: MyComp1494Component;
  let fixture: ComponentFixture<MyComp1494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1494Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
