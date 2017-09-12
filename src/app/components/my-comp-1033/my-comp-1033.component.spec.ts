import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1033Component } from './my-comp-1033.component';

describe('MyComp1033Component', () => {
  let component: MyComp1033Component;
  let fixture: ComponentFixture<MyComp1033Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1033Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
