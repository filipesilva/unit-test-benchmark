import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1925Component } from './my-comp-1925.component';

describe('MyComp1925Component', () => {
  let component: MyComp1925Component;
  let fixture: ComponentFixture<MyComp1925Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1925Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1925Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
