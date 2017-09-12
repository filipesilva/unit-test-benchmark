import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1957Component } from './my-comp-1957.component';

describe('MyComp1957Component', () => {
  let component: MyComp1957Component;
  let fixture: ComponentFixture<MyComp1957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
