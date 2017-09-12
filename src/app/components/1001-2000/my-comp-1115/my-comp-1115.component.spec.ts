import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1115Component } from './my-comp-1115.component';

describe('MyComp1115Component', () => {
  let component: MyComp1115Component;
  let fixture: ComponentFixture<MyComp1115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
