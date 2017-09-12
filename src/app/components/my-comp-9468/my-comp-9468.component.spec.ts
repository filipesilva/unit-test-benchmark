import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9468Component } from './my-comp-9468.component';

describe('MyComp9468Component', () => {
  let component: MyComp9468Component;
  let fixture: ComponentFixture<MyComp9468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
