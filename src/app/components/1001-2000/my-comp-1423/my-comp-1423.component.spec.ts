import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1423Component } from './my-comp-1423.component';

describe('MyComp1423Component', () => {
  let component: MyComp1423Component;
  let fixture: ComponentFixture<MyComp1423Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1423Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1423Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
