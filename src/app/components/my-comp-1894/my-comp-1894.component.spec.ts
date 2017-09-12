import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1894Component } from './my-comp-1894.component';

describe('MyComp1894Component', () => {
  let component: MyComp1894Component;
  let fixture: ComponentFixture<MyComp1894Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1894Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1894Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
