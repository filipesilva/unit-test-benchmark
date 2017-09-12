import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5465Component } from './my-comp-5465.component';

describe('MyComp5465Component', () => {
  let component: MyComp5465Component;
  let fixture: ComponentFixture<MyComp5465Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5465Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
