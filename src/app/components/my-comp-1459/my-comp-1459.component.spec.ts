import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1459Component } from './my-comp-1459.component';

describe('MyComp1459Component', () => {
  let component: MyComp1459Component;
  let fixture: ComponentFixture<MyComp1459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
