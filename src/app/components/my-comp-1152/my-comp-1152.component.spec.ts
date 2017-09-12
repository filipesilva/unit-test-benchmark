import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1152Component } from './my-comp-1152.component';

describe('MyComp1152Component', () => {
  let component: MyComp1152Component;
  let fixture: ComponentFixture<MyComp1152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
