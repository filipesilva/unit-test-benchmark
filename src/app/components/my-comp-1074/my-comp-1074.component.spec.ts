import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1074Component } from './my-comp-1074.component';

describe('MyComp1074Component', () => {
  let component: MyComp1074Component;
  let fixture: ComponentFixture<MyComp1074Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1074Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
