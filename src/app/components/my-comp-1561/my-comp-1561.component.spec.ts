import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1561Component } from './my-comp-1561.component';

describe('MyComp1561Component', () => {
  let component: MyComp1561Component;
  let fixture: ComponentFixture<MyComp1561Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1561Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1561Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
