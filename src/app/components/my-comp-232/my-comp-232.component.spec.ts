import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp232Component } from './my-comp-232.component';

describe('MyComp232Component', () => {
  let component: MyComp232Component;
  let fixture: ComponentFixture<MyComp232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
