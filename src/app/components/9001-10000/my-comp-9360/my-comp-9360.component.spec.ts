import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9360Component } from './my-comp-9360.component';

describe('MyComp9360Component', () => {
  let component: MyComp9360Component;
  let fixture: ComponentFixture<MyComp9360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
