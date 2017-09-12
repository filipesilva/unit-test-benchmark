import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1017Component } from './my-comp-1017.component';

describe('MyComp1017Component', () => {
  let component: MyComp1017Component;
  let fixture: ComponentFixture<MyComp1017Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1017Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
