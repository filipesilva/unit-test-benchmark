import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1642Component } from './my-comp-1642.component';

describe('MyComp1642Component', () => {
  let component: MyComp1642Component;
  let fixture: ComponentFixture<MyComp1642Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1642Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1642Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
