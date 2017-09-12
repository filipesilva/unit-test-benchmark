import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1035Component } from './my-comp-1035.component';

describe('MyComp1035Component', () => {
  let component: MyComp1035Component;
  let fixture: ComponentFixture<MyComp1035Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1035Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1035Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
