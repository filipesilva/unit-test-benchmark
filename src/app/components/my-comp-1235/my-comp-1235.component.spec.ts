import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1235Component } from './my-comp-1235.component';

describe('MyComp1235Component', () => {
  let component: MyComp1235Component;
  let fixture: ComponentFixture<MyComp1235Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1235Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1235Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
