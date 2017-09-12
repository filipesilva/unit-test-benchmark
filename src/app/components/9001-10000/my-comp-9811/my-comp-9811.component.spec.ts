import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9811Component } from './my-comp-9811.component';

describe('MyComp9811Component', () => {
  let component: MyComp9811Component;
  let fixture: ComponentFixture<MyComp9811Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9811Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
