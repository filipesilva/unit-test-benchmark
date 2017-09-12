import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp463Component } from './my-comp-463.component';

describe('MyComp463Component', () => {
  let component: MyComp463Component;
  let fixture: ComponentFixture<MyComp463Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp463Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
