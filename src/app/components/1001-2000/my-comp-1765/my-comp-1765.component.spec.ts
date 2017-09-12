import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1765Component } from './my-comp-1765.component';

describe('MyComp1765Component', () => {
  let component: MyComp1765Component;
  let fixture: ComponentFixture<MyComp1765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
