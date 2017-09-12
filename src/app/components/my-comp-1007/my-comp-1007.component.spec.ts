import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1007Component } from './my-comp-1007.component';

describe('MyComp1007Component', () => {
  let component: MyComp1007Component;
  let fixture: ComponentFixture<MyComp1007Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1007Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1007Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
