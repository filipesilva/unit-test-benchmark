import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9697Component } from './my-comp-9697.component';

describe('MyComp9697Component', () => {
  let component: MyComp9697Component;
  let fixture: ComponentFixture<MyComp9697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
