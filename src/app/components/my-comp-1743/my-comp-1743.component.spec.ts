import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1743Component } from './my-comp-1743.component';

describe('MyComp1743Component', () => {
  let component: MyComp1743Component;
  let fixture: ComponentFixture<MyComp1743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
