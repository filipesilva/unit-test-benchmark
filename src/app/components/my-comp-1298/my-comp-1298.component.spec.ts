import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1298Component } from './my-comp-1298.component';

describe('MyComp1298Component', () => {
  let component: MyComp1298Component;
  let fixture: ComponentFixture<MyComp1298Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1298Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1298Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
