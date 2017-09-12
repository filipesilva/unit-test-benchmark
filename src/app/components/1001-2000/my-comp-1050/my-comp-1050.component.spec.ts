import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1050Component } from './my-comp-1050.component';

describe('MyComp1050Component', () => {
  let component: MyComp1050Component;
  let fixture: ComponentFixture<MyComp1050Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1050Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1050Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
