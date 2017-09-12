import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1596Component } from './my-comp-1596.component';

describe('MyComp1596Component', () => {
  let component: MyComp1596Component;
  let fixture: ComponentFixture<MyComp1596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
