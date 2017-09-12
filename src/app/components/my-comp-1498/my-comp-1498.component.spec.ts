import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1498Component } from './my-comp-1498.component';

describe('MyComp1498Component', () => {
  let component: MyComp1498Component;
  let fixture: ComponentFixture<MyComp1498Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1498Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1498Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
