import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1078Component } from './my-comp-1078.component';

describe('MyComp1078Component', () => {
  let component: MyComp1078Component;
  let fixture: ComponentFixture<MyComp1078Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1078Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
