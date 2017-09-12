import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7465Component } from './my-comp-7465.component';

describe('MyComp7465Component', () => {
  let component: MyComp7465Component;
  let fixture: ComponentFixture<MyComp7465Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7465Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
