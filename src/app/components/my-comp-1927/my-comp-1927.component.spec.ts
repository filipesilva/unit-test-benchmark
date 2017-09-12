import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1927Component } from './my-comp-1927.component';

describe('MyComp1927Component', () => {
  let component: MyComp1927Component;
  let fixture: ComponentFixture<MyComp1927Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1927Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
