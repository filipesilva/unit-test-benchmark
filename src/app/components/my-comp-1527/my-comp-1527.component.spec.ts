import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1527Component } from './my-comp-1527.component';

describe('MyComp1527Component', () => {
  let component: MyComp1527Component;
  let fixture: ComponentFixture<MyComp1527Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1527Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1527Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
