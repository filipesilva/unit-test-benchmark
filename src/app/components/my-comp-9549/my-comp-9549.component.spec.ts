import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9549Component } from './my-comp-9549.component';

describe('MyComp9549Component', () => {
  let component: MyComp9549Component;
  let fixture: ComponentFixture<MyComp9549Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9549Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9549Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
