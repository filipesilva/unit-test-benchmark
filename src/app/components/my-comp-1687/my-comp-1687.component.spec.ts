import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1687Component } from './my-comp-1687.component';

describe('MyComp1687Component', () => {
  let component: MyComp1687Component;
  let fixture: ComponentFixture<MyComp1687Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1687Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1687Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
