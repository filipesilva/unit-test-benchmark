import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1356Component } from './my-comp-1356.component';

describe('MyComp1356Component', () => {
  let component: MyComp1356Component;
  let fixture: ComponentFixture<MyComp1356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
