import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1933Component } from './my-comp-1933.component';

describe('MyComp1933Component', () => {
  let component: MyComp1933Component;
  let fixture: ComponentFixture<MyComp1933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
