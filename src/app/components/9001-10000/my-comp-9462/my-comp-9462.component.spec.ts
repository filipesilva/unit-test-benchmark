import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9462Component } from './my-comp-9462.component';

describe('MyComp9462Component', () => {
  let component: MyComp9462Component;
  let fixture: ComponentFixture<MyComp9462Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9462Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9462Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
