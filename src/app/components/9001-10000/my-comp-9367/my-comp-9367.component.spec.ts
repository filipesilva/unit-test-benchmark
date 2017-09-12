import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9367Component } from './my-comp-9367.component';

describe('MyComp9367Component', () => {
  let component: MyComp9367Component;
  let fixture: ComponentFixture<MyComp9367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
