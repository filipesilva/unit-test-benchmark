import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9922Component } from './my-comp-9922.component';

describe('MyComp9922Component', () => {
  let component: MyComp9922Component;
  let fixture: ComponentFixture<MyComp9922Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9922Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
