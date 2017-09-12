import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1558Component } from './my-comp-1558.component';

describe('MyComp1558Component', () => {
  let component: MyComp1558Component;
  let fixture: ComponentFixture<MyComp1558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1558Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
