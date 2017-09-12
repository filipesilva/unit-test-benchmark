import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9644Component } from './my-comp-9644.component';

describe('MyComp9644Component', () => {
  let component: MyComp9644Component;
  let fixture: ComponentFixture<MyComp9644Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9644Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
