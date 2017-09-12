import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9216Component } from './my-comp-9216.component';

describe('MyComp9216Component', () => {
  let component: MyComp9216Component;
  let fixture: ComponentFixture<MyComp9216Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9216Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9216Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
