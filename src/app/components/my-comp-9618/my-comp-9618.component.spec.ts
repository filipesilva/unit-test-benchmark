import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9618Component } from './my-comp-9618.component';

describe('MyComp9618Component', () => {
  let component: MyComp9618Component;
  let fixture: ComponentFixture<MyComp9618Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9618Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9618Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
