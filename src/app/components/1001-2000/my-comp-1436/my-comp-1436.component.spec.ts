import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1436Component } from './my-comp-1436.component';

describe('MyComp1436Component', () => {
  let component: MyComp1436Component;
  let fixture: ComponentFixture<MyComp1436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1436Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
