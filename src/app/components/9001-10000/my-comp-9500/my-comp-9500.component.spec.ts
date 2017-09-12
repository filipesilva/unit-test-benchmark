import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9500Component } from './my-comp-9500.component';

describe('MyComp9500Component', () => {
  let component: MyComp9500Component;
  let fixture: ComponentFixture<MyComp9500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
