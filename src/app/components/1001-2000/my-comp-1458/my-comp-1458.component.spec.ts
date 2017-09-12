import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1458Component } from './my-comp-1458.component';

describe('MyComp1458Component', () => {
  let component: MyComp1458Component;
  let fixture: ComponentFixture<MyComp1458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
