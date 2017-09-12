import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1041Component } from './my-comp-1041.component';

describe('MyComp1041Component', () => {
  let component: MyComp1041Component;
  let fixture: ComponentFixture<MyComp1041Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1041Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
