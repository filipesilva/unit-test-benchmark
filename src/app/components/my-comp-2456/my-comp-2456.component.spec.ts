import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2456Component } from './my-comp-2456.component';

describe('MyComp2456Component', () => {
  let component: MyComp2456Component;
  let fixture: ComponentFixture<MyComp2456Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2456Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2456Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
