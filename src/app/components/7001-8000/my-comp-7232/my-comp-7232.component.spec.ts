import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7232Component } from './my-comp-7232.component';

describe('MyComp7232Component', () => {
  let component: MyComp7232Component;
  let fixture: ComponentFixture<MyComp7232Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7232Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
