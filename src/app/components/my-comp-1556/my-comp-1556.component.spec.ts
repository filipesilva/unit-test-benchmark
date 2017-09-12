import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1556Component } from './my-comp-1556.component';

describe('MyComp1556Component', () => {
  let component: MyComp1556Component;
  let fixture: ComponentFixture<MyComp1556Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1556Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
