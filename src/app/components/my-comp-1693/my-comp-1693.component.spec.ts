import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1693Component } from './my-comp-1693.component';

describe('MyComp1693Component', () => {
  let component: MyComp1693Component;
  let fixture: ComponentFixture<MyComp1693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
