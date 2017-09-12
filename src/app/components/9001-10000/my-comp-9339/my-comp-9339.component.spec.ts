import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9339Component } from './my-comp-9339.component';

describe('MyComp9339Component', () => {
  let component: MyComp9339Component;
  let fixture: ComponentFixture<MyComp9339Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9339Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9339Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
