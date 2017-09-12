import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1469Component } from './my-comp-1469.component';

describe('MyComp1469Component', () => {
  let component: MyComp1469Component;
  let fixture: ComponentFixture<MyComp1469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
