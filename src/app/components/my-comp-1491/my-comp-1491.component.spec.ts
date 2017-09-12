import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1491Component } from './my-comp-1491.component';

describe('MyComp1491Component', () => {
  let component: MyComp1491Component;
  let fixture: ComponentFixture<MyComp1491Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1491Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
