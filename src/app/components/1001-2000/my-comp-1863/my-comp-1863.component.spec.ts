import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1863Component } from './my-comp-1863.component';

describe('MyComp1863Component', () => {
  let component: MyComp1863Component;
  let fixture: ComponentFixture<MyComp1863Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1863Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1863Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
