import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9976Component } from './my-comp-9976.component';

describe('MyComp9976Component', () => {
  let component: MyComp9976Component;
  let fixture: ComponentFixture<MyComp9976Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9976Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
