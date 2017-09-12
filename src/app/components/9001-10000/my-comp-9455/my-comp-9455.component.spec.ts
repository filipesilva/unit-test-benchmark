import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9455Component } from './my-comp-9455.component';

describe('MyComp9455Component', () => {
  let component: MyComp9455Component;
  let fixture: ComponentFixture<MyComp9455Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9455Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9455Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
