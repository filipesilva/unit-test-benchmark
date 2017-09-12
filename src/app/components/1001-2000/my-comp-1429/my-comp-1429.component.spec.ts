import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1429Component } from './my-comp-1429.component';

describe('MyComp1429Component', () => {
  let component: MyComp1429Component;
  let fixture: ComponentFixture<MyComp1429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
